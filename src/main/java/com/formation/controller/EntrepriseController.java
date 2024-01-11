package com.formation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.Entreprise;
import com.formation.repository.EntrepriseRepository;

@RestController
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
}
