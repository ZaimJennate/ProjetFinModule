package com.formation.entities;

import java.math.BigDecimal;
import java.util.List;

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
public class Categorie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;

    private String nomCategorie;
    
    @OneToMany(mappedBy = "categorie")
    private List<Formation> formation;

    // Add a String-argument constructor or factory method
    public Categorie(String nomCategorie) {
        this.nomCategorie = nomCategorie;
    }
}
