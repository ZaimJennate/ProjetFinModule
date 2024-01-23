package com.formation.entities;


import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
@Data
@Entity
public class PlanifierFormation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "formation_id")
    private Formation formation;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "formateur_id")
    private Formateur formateur;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;

    private LocalDate dateDebut;
    private LocalDate dateFin;

   
}

