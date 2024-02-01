package com.formation.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class Formateur {
   @Id
   
    private Long id;

    private String nom;
    private String competences; 
    private String remarques;
    private String img;
    
    @JsonIgnore
    @OneToMany(mappedBy = "formateur")
    private List<PlanifierFormation> planifierformation;
    
}