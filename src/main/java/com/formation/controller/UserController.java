package com.formation.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.formation.service.UserService;
import com.formation.entities.User;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/registration")
    public ResponseEntity<String> saveUser(@RequestBody User  userDto) {
        try {
            User savedUser = userService.save(userDto);
            return ResponseEntity.ok("User registered successfully!");
        } catch (IllegalArgumentException e) {
            // Handle the case where the password is null
            return ResponseEntity.badRequest().body("Password cannot be null");
        } catch (Exception e) {
            // Handle other exceptions if neededs
            return ResponseEntity.status(500).body("Internal Server Error");
        }
    }
	
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginRequest) {
	    String username = loginRequest.get("username");
	    String password = loginRequest.get("password");

	    // Validate the credentials (replace this with your actual logic)
	    boolean loginSuccessful = userService.authenticate(username, password);

	    if (loginSuccessful) {
	        Map<String, String> response = new HashMap<>();
	        response.put("message", "Login successful");
	        return ResponseEntity.ok(response);
	    } else {
	        Map<String, String> response = new HashMap<>();
	        response.put("error", "Login failed");
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
	    }
	}
	
	@GetMapping("/user/{username}")
    public ResponseEntity<User> getUserDetails(@PathVariable String username) {
        try {
            User user = userService.getUserByEmail(username);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }


}
