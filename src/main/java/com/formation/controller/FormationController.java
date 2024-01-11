package com.formation.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.Formation;
import com.formation.repository.FormationRepository;

@RestController

public class FormationController {

    @Autowired
    private FormationRepository formationRepository;

    @PostMapping("/ajouter")
    public Formation ajouterFormation(@RequestBody Formation formation) {
        return formationRepository.save(formation);
    }
}
