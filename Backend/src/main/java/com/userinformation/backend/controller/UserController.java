package com.userinformation.backend.controller;

import com.userinformation.backend.model.User;
import com.userinformation.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {

        System.out.println("User information received:");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Current Status: " + user.getCurrentStatus());

        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }
}