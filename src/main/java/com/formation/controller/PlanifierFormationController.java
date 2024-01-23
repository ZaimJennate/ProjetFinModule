package com.formation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.formation.entities.Entreprise;
import com.formation.entities.Formateur;
import com.formation.entities.Formation;
import com.formation.entities.PlanifierFormation;
import com.formation.repository.EntrepriseRepository;
import com.formation.repository.FormateurRepository;
import com.formation.repository.FormationRepository;
import com.formation.repository.PlanifierFormationRepository;

import java.util.List;

@RestController
@RequestMapping("/api/sessions-formations")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanifierFormationController {

	 @Autowired
	    private PlanifierFormationRepository sessionFormationRepository;

	    @PostMapping
	    public PlanifierFormation planifierSessionFormation(@RequestBody PlanifierFormation sessionFormation) {
	        return sessionFormationRepository.save(sessionFormation);
	    }
	    @GetMapping
	    public List<PlanifierFormation> getAllPlannedFormations() {
	        return sessionFormationRepository.findAll();
	    }

    // Ajouter d'autres méthodes pour récupérer toutes les sessions, récupérer une session par ID, etc.
}

