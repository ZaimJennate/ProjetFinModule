package com.formation.service;

import com.formation.entities.User;

public interface AuthService {
 User authenticate(String username, String password);
}

