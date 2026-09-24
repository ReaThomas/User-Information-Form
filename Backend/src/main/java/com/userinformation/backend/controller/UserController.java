package com.userinformation.backend.controller;

import com.userinformation.backend.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {

        System.out.println("User information received:");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Current Status: " + user.getCurrentStatus());

        return user;
    }
}