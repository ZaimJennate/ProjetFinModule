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

import com.formation.entities.Formateur;
import com.formation.repository.FormateurRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FormateurController {

    @Autowired
    private FormateurRepository formateurRepository;

    @PostMapping("/ajouterForma")
    public ResponseEntity<Formateur> ajouterFormateur(@RequestBody Formateur formateur) {
        Formateur nouveauFormateur = formateurRepository.save(formateur);
        return new ResponseEntity<>(nouveauFormateur, HttpStatus.CREATED);
    }

    @GetMapping("showForma")
    public ResponseEntity<List<Formateur>> obtenirListeFormateurs() {
        List<Formateur> formateurs = formateurRepository.findAll();
        return new ResponseEntity<>(formateurs, HttpStatus.OK);
    }
    
    @GetMapping("/compterFormateurs")
    public ResponseEntity<Long> compterFormateurs() {
        long nombreFormateurs = formateurRepository.count();
        return new ResponseEntity<>(nombreFormateurs, HttpStatus.OK);
    }
    @DeleteMapping("/supprimerForma/{id}")
    public ResponseEntity<Void> supprimerFormateur(@PathVariable Long id) {
        formateurRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/modifierForma/{id}")
    public ResponseEntity<Formateur> modifierFormateur(@PathVariable Long id, @RequestBody Formateur formateur) {
        Formateur existingFormateur = formateurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formateur not found with id: " + id));

        // Update the existing formateur with the new data
        existingFormateur.setNom(formateur.getNom());
        existingFormateur.setCompetences(formateur.getCompetences());
        existingFormateur.setRemarques(formateur.getRemarques());

        Formateur updatedFormateur = formateurRepository.save(existingFormateur);
        return new ResponseEntity<>(updatedFormateur, HttpStatus.OK);
    }
    
    @GetMapping("/getFormateurById/{id}")
    public ResponseEntity<Formateur> getFormateurById(@PathVariable Long id) {
        Optional<Formateur> formateurOptional = formateurRepository.findById(id);
        
        if (formateurOptional.isPresent()) {
            Formateur formateur = formateurOptional.get();
            return new ResponseEntity<>(formateur, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}

