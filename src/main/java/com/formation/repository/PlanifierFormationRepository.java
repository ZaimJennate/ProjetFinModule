package com.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.formation.entities.PlanifierFormation;

@Repository
public interface PlanifierFormationRepository extends JpaRepository<PlanifierFormation, Long>  {
	 List<PlanifierFormation> findByFormateurId(Long formateurId);
}
