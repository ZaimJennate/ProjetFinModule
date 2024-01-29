package com.formation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service; // Import the Service annotation

import com.formation.entities.User;
import com.formation.repository.UserRepository;

@Service // Add the Service annotation
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public User save(User userDto) {
        // Encode the password before saving to the database
        User user = new User(userDto.getId(), userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()), userDto.getFirstname(), userDto.getLastname());
        return userRepository.save(user);
    }


    @Override
    public boolean authenticate(String email, String password) {
        // Validate the user credentials
        User user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return true;
        }
        return false;
    }




    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

}
