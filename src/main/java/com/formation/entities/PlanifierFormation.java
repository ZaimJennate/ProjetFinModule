package com.formation.entities;


import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
import lombok.Data;
@Data
@Entity
public class PlanifierFormation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
    @ManyToOne
    
    @JoinColumn(name = "formation_id")
    private Formation formation;

    @ManyToOne
    
    @JoinColumn(name = "formateur_id")
    private Formateur formateur;


    @ManyToOne
    
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;


    private LocalDate dateDebut;
    private LocalDate dateFin;
    @Transient
    private String formationTitle;
    @Transient
    private String nomEntreprise;
    public String getFormationTitle() {
        return (formation != null) ? formation.getTitre() : null;
    }
    public String getNomEntreprise() {
        return (entreprise != null) ? entreprise.getNom() : null;
    }

   
}

