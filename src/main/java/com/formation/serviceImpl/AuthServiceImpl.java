package com.formation.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.formation.entities.User;
import com.formation.service.AuthService;
import com.formation.service.UserService;

@Service
public class AuthServiceImpl implements AuthService {

 @Autowired
 private UserService userService;

 @Override
 public User authenticate(String username, String password) {
     User user = userService.getUserByUsername(username);

     // Check if the user exists and the password matches (you might want to hash passwords in a real-world scenario)
     if (user != null && user.getPassword().equals(password)) {
         return user;
     }

     return null;
 }
}

