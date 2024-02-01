package com.formation.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


import com.formation.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
        .authorizeRequests(authorizeRequests -> authorizeRequests
            .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .requestMatchers("/login","/registration", "/css/**","/users/formateurs","/checkEmailExists/{email}","/user/{username}","/api/upload","/ajouterformation","/afficherFormations","/ajouterForma","/modifierFormation/{id}","/getFormationById/{id}","/supprimerFormations/{id}","/showForma","/compterFormateurs","/supprimerForma/{id}","/modifierForma/{id}","/api/sessions-formations","/getFormateurById/{id}","/ajouteEntre","Entre","/compterEntreprise","/getEntrepriseById/{id}","/supprimerEntreprise/{id}","/modifierEntreprise/{id}","/compterFormations","/categorie","/supprimercategorie/{id}","/modifierCategorie/{id}","/ajoutercategorie","/affichercategorie","/toutes","/add","/addFormation/{userId}","/user/{userId}/formations","/addcategories","/showcategories","/add/{userId}/formation/{formationId}","/user/{userId}/cart/formations","/api/sessions-formations/show","/formateur/{formateurId}","/api/sessions-formations/show3").permitAll()
            .anyRequest().authenticated());

        
                

        return http.build();
    }

 // Update SecurityConfig.java
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService)
            .passwordEncoder(passwordEncoder());
    }

}
