package com.example.demo.services;

import com.example.demo.configs.MyUserDetailsService;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public User findCurrentUser() {
        // the login session is stored between page reloads,
        // and we can access the current authenticated user with this
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByUsername(username);
    }

    public User registerUser(User user) {
        //don't create a user that already exists
        if(userRepo.findByUsername(user.getUsername())!=null){
            return null;
        }
        return myUserDetailsService.addUser(user.getUsername(), user.getPassword(), user.getFirst_name(), user.getLast_name(), user.getEmail(), user.getAddress(), user.getPhone());
    }

    public List<User> findAllUser(){
        return (List<User>) userRepo.findAll();
    }

    public Optional<User> findUserById(int id) {
        return userRepo.findById(id);
    }

}
