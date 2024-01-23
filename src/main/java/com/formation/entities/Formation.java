package com.formation.entities;

import java.math.BigDecimal;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    
    @JsonManagedReference
    @OneToMany(mappedBy = "formation")
    private List<PlanifierFormation> planifierformation;

}
