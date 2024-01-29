package com.formation.entities;

import java.math.BigDecimal;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data

@Entity
public class Formation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;

    private String titre;
    private int nombreHeures;
    private BigDecimal cout;
    private String objectifs;
    private String programmeDetaille;
    private String img;
    
  
    @OneToMany(mappedBy = "formation")
    private List<PlanifierFormation> planifierformation;
    
    @ManyToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

}
