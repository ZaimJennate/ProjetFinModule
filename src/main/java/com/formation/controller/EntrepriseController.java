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

import com.formation.entities.Entreprise;
import com.formation.repository.EntrepriseRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EntrepriseController {

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @PostMapping("/ajouteEntre")
    public ResponseEntity<Entreprise> ajouterEntreprise(@RequestBody Entreprise entreprise) {
        Entreprise nouvelleEntreprise = entrepriseRepository.save(entreprise);
        return new ResponseEntity<>(nouvelleEntreprise, HttpStatus.CREATED);
    }

    @GetMapping("Entre")
    public ResponseEntity<List<Entreprise>> obtenirListeEntreprises() {
        List<Entreprise> entreprises = entrepriseRepository.findAll();
        return new ResponseEntity<>(entreprises, HttpStatus.OK);
    }
    
    @GetMapping("/compterEntreprise")
    public ResponseEntity<Long> compterFormateurs() {
        long nombreEntreprise = entrepriseRepository.count();
        return new ResponseEntity<>(nombreEntreprise, HttpStatus.OK);
    }
    @DeleteMapping("/supprimerEntreprise/{id}")
    public ResponseEntity<Void> supprimerEntreprise(@PathVariable Long id) {
        entrepriseRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/modifierEntreprise/{id}")
    public ResponseEntity<Entreprise> modifierFormateur(@PathVariable Long id, @RequestBody Entreprise entreprise) {
    	Entreprise existingEntreprise = entrepriseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formateur not found with id: " + id));

        // Update the existing formateur with the new data
    	existingEntreprise.setNom(entreprise.getNom());
    	existingEntreprise.setEmail(entreprise.getEmail());
    	existingEntreprise.setAdresse(entreprise.getAdresse());
    	existingEntreprise.setTelephone(entreprise.getTelephone());
    	existingEntreprise.setUrl(entreprise.getUrl());

    	Entreprise updatedEntreprise = entrepriseRepository.save(existingEntreprise);
        return new ResponseEntity<>(updatedEntreprise, HttpStatus.OK);
    }
    
    @GetMapping("/getEntrepriseById/{id}")
    public ResponseEntity<Entreprise> getEntrepriseById(@PathVariable Long id) {
        Optional<Entreprise> entrepriseOptional = entrepriseRepository.findById(id);
        
        if (entrepriseOptional.isPresent()) {
        	Entreprise entreprise = entrepriseOptional.get();
            return new ResponseEntity<>(entreprise, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
