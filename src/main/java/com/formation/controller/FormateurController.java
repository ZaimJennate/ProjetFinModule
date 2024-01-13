package com.formation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
}

