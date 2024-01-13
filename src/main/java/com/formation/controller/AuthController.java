package com.formation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.formation.entities.User;
import com.formation.service.AuthService;

//AuthController.java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

 @Autowired
 private AuthService authService;

 @PostMapping("/login")
 public ResponseEntity<String> login(@RequestBody User loginUser) {
     User authenticatedUser = authService.authenticate(loginUser.getUsername(), loginUser.getPassword());

     if (authenticatedUser != null) {
         return ResponseEntity.ok("Login successful! User role: " + authenticatedUser.getRole());
     } else {
         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
     }
 }
}
