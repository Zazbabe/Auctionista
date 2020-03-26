package com.example.demo.services;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public List<User> findAllUser(){
        return (List<User>) userRepo.findAll();
    }

    public Optional<User> findUserById(int id) {
        return userRepo.findById(id);
    }

    public User createNewUser(User user) {
        return userRepo.save(user);
    }

}
