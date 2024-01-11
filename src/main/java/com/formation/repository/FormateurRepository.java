package com.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.formation.entities.Formateur;

public interface FormateurRepository extends JpaRepository<Formateur, Long> {
}

