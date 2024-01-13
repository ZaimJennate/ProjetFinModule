package com.formation.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.Entreprise;
import com.formation.entities.Formateur;
import com.formation.entities.Formation;
import com.formation.repository.EntrepriseRepository;
import com.formation.repository.FormateurRepository;
import com.formation.repository.FormationRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FormationController {

    @Autowired
    private FormationRepository formationRepository;

    @Autowired
    private FormateurRepository formateurRepository;

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @PostMapping("/ajouter")
    public Formation ajouterFormation(@RequestBody Formation formation) {
        return formationRepository.save(formation);
    }
    
    @PostMapping("/planifier")
    public ResponseEntity<Formation> planifierFormation(
            @RequestParam Long formationId,
            @RequestParam Long formateurId,
            @RequestParam Long entrepriseId,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateDebut,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateFin) {

        Optional<Formation> optionalFormation = formationRepository.findById(formationId);
        Optional<Formateur> optionalFormateur = formateurRepository.findById(formateurId);
        Optional<Entreprise> optionalEntreprise = entrepriseRepository.findById(entrepriseId);

        if (optionalFormation.isPresent() && optionalFormateur.isPresent() && optionalEntreprise.isPresent()) {
            Formation formation = optionalFormation.get();
            Formateur formateur = optionalFormateur.get();
            Entreprise entreprise = optionalEntreprise.get();

            formation.setFormateur(formateur);
            formation.setEntreprise(entreprise);
            formation.setDateDebut(dateDebut);
            formation.setDateFin(dateFin);

            Formation formationPlanifiee = formationRepository.save(formation);
            return new ResponseEntity<>(formationPlanifiee, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

