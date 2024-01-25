package com.formation.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
                        .requestMatchers("/admin-page").hasAuthority("ADMIN")
                        .requestMatchers("/user-page").hasAuthority("USER")
               

                        .requestMatchers("/login","/registration", "/css/**", "/ajouter","/afficherFormations","/ajouterForma","/modifierFormation/{id}","/getFormationById/{id}","/supprimerFormations/{id}","/showForma","/compterFormateurs","/supprimerForma/{id}","/modifierForma/{id}","/api/sessions-formations","/getFormateurById/{id}","/ajouteEntre","Entre","/compterEntreprise","/getEntrepriseById/{id}","/supprimerEntreprise/{id}","/modifierEntreprise/{id}","/compterFormations").permitAll()
                        .anyRequest().authenticated())
                ;

        return http.build();
    }

 // Update SecurityConfig.java
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService)
            .passwordEncoder(passwordEncoder());
    }

}
