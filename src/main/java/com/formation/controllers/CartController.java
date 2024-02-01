package com.formation.controllers;

import com.formation.entities.Cart;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import com.formation.entities.Formation;
import com.formation.entities.User;
import com.formation.repository.UserRepository;
import com.formation.repository.FormationRepository;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

 

    @Autowired
    private FormationRepository formationRepository;

    @Autowired
    private UserRepository userRepository;

    

    // Existing code


    @PostMapping("/add/{userId}/formation/{formationId}")
    public void addToCart(@PathVariable Long userId, @PathVariable Long formationId) {
    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Formation formation = formationRepository.findById(formationId).orElseThrow(() -> new RuntimeException("Formation not found"));

        // Check if the user has a non-null cart, create a new one if null
        if (user.getCart() == null) {
            user.setCart(new Cart());
        }

        Cart cart = user.getCart();
        cart.getFormations().add(formation); // Set the formation in the cart

        // Set the user association in the cart
        cart.setUser(user);

        userRepository.save(user);
    }

    @GetMapping("/user/{userId}/cart/formations")
    public Set<Formation> getUserCartFormations(@PathVariable Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getCart() == null) {
            throw new RuntimeException("User cart is empty");
        }

        return user.getCart().getFormations();
    }
    
}
