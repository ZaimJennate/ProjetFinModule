package com.formation.service;

import com.formation.entities.User;



public interface UserService {
    User getUserByEmail(String email);
    User save(User userDto);
    boolean authenticate(String email, String password);
}
