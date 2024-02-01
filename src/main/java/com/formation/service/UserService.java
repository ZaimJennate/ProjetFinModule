package com.formation.service;

import java.util.List;

import com.formation.entities.User;



public interface UserService {
    User getUserByEmail(String email);
    User getUserById(Long userId);
    User save(User userDto);
    boolean authenticate(String email, String password);
    boolean existsByEmail(String email);
    List<User> getUsersByRole(String role);
}
