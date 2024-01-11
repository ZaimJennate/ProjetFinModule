package com.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.formation.entities.Formation;

public interface FormationRepository extends JpaRepository<Formation, Long>{

}
