package com.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.formation.entities.User;

public interface UserRepository extends JpaRepository<User, Long>  {
	User findByEmail (String email);
	boolean existsByEmail(String email);
	List<User> findByRole(String role);


}
