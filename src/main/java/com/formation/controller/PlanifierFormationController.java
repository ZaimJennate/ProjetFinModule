package com.formation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.formation.entities.PlanifierFormation;
import com.formation.entities.PlannedFormationDTO;
import com.formation.repository.PlanifierFormationRepository;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlanifierFormationController {

	 @Autowired
	    private PlanifierFormationRepository sessionFormationRepository;

	    @PostMapping("/api/sessions-formations")
	    public PlanifierFormation planifierSessionFormation(@RequestBody PlanifierFormation sessionFormation) {
	    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
	    	return sessionFormationRepository.save(sessionFormation);
	    }
	    @GetMapping("/api/sessions-formations/show")
	    public List<PlanifierFormation> getAllPlannedFormations() {
	    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
	    	return sessionFormationRepository.findAll();
	    }
	    
	    @GetMapping("/formateur/{formateurId}")
	    public List<PlanifierFormation> getPlannedFormationsForFormateur(@PathVariable Long formateurId) {
	        List<PlanifierFormation> plannedFormations = sessionFormationRepository.findByFormateurId(formateurId);

	        // Set the transient field for each entity
	        plannedFormations.forEach(pf -> pf.setFormationTitle(pf.getFormationTitle()));
	        plannedFormations.forEach(pf -> pf.setNomEntreprise(pf.getNomEntreprise()));

	        return plannedFormations;
	    }

	

    // Ajouter d'autres méthodes pour récupérer toutes les sessions, récupérer une session par ID, etc.
}

