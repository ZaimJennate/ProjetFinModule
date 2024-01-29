package com.formation.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.Categorie;
import com.formation.entities.Formation;
import com.formation.entities.PlanifierFormation;
import com.formation.repository.CategorieRepository;
import com.formation.repository.EntrepriseRepository;
import com.formation.repository.FormateurRepository;
import com.formation.repository.FormationRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FormationController {

    @Autowired
    private FormationRepository formationRepository;

    @Autowired
    private CategorieRepository categorieRepository;



    @PostMapping("/ajouter")
    public Formation ajouterFormation(@RequestBody Formation formation) {
    	
        return formationRepository.save(formation);
    }
    
    
    @GetMapping("/afficherFormations")
    public ResponseEntity<List<Formation>> afficherFormations() {
        List<Formation> formations = formationRepository.findAll();
        if (!formations.isEmpty()) {
            return new ResponseEntity<>(formations, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping("/compterFormations")
    public ResponseEntity<Long> compternombreFormations() {
        long nombreFormations = formationRepository.count();
        return new ResponseEntity<>(nombreFormations, HttpStatus.OK);
    }
    @DeleteMapping("/supprimerFormations/{id}")
    public ResponseEntity<Void> supprimerFormations(@PathVariable Long id) {
        formationRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/modifierFormation/{id}")
    public ResponseEntity<Formation> modifierFormation(@PathVariable Long id, @RequestBody Formation formation) {
    	Formation existingFormation = formationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formation not found with id: " + id));

        // Update the existing formateur with the new data
        existingFormation.setTitre(formation.getTitre());
        existingFormation.setProgrammeDetaille(formation.getProgrammeDetaille());
        existingFormation.setObjectifs(formation.getObjectifs());
        existingFormation.setNombreHeures(formation.getNombreHeures());
        existingFormation.setCout(formation.getCout());

        Formation updatedFormation = formationRepository.save(existingFormation);
        return new ResponseEntity<>(updatedFormation, HttpStatus.OK);
    }
    
    @GetMapping("/getFormationById/{id}")
    public ResponseEntity<Formation> getFormationById(@PathVariable Long id) {
        Optional<Formation> formationOptional = formationRepository.findById(id);
        
        if (formationOptional.isPresent()) {
            Formation formation = formationOptional.get();
            return new ResponseEntity<>(formation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/affichercategorie")
    public ResponseEntity<List<Categorie>> affichercategorie() {
        List<Categorie> categorie = categorieRepository.findAll();
        if (!categorie.isEmpty()) {
            return new ResponseEntity<>(categorie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping("/categorie")
    public List<Categorie> getAllPlannedCategorie() {
        return categorieRepository.findAll();
    }
    
    @DeleteMapping("/supprimercategorie/{id}")
    public ResponseEntity<Void> supprimercategorie(@PathVariable Long id) {
    	categorieRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/modifierCategorie/{id}")
    public ResponseEntity<Categorie> modifierCategorie(@PathVariable Long id, @RequestBody Categorie categorie) {
    	Categorie existingCategorie = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categorie not found with id: " + id));

        // Update the existing formateur with the new data
    	existingCategorie.setNomCategorie(categorie.getNomCategorie());


    	Categorie updatedCategorie = categorieRepository.save(existingCategorie);
        return new ResponseEntity<>(updatedCategorie, HttpStatus.OK);
    }
    
    @PostMapping("/ajoutercategorie")
    public Categorie ajouterCategorie(@RequestBody Categorie categorie) {
        return categorieRepository.save(categorie);
    }
    
    @GetMapping("/getCategorieById/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable Long id) {
        Optional<Categorie> categorieOptional = categorieRepository.findById(id);
        
        if (categorieOptional.isPresent()) {
            Categorie categorie = categorieOptional.get();
            return new ResponseEntity<>(categorie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

