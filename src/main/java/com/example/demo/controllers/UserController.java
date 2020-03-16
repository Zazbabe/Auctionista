package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
