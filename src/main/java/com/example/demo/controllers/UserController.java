package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/rest/users")
    public List<User> gettAllUsers() {
        return userService.findAllUser();
    }
    @GetMapping("/rest/users/{id}")
    public Optional<User> getUserById(@PathVariable int id) {
        return userService.findUserById(id);
    }

    @PostMapping("/auth/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping("/auth/whoami")
    public User whoAmI() {
        return userService.findCurrentUser();
    }
}
