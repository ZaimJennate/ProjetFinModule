package com.formation.controller;


import java.math.BigDecimal;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.Categorie;
import com.formation.entities.Formateur;
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





    @PostMapping("/ajouterformation")
    public ResponseEntity<Formation> ajouterFormation(@RequestBody Formation formation) {
        Formation nouveauFormation = formationRepository.save(formation);
        return new ResponseEntity<>(nouveauFormation, HttpStatus.CREATED);
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
    
    static class FormationRequest {
        private String titre;
        private int nombreHeures;
        private BigDecimal cout;
        private String objectifs;
        private String programmeDetaille;
        private String img;
        private Long categorieId;  // Single category id

        // getters and setters
    }

}

