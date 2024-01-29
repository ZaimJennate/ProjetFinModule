package com.formation.service;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Service;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

//CustomSuccessHandler.java
@Service
public class CustomSuccessHandler implements AuthenticationSuccessHandler {

 @Override
 public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
         Authentication authentication) throws IOException, ServletException {
     
     var authourities = authentication.getAuthorities();
     var roles = authourities.stream().map(r -> r.getAuthority()).findFirst();

     if (roles.orElse("").equals("ADMIN")) {
         response.getWriter().print("{\"redirect\":\"/admin-page\"}");
     } else if (roles.orElse("").equals("USER")) {
         response.getWriter().print("{\"redirect\":\"/user-page\"}");
     } else {
         response.getWriter().print("{\"redirect\":\"/error\"}");
     }

     response.setContentType("application/json");
     response.setStatus(HttpServletResponse.SC_OK);
 }
}
