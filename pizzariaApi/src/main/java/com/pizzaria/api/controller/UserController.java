package com.pizzaria.api.controller;

import com.pizzaria.api.model.User;
import com.pizzaria.api.model.dto.LoginForm;
import com.pizzaria.api.model.dto.UserRequestDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/users")
public class UserController {
    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<UserResponseDto>> findAllUsers() {
        return ResponseEntity.ok(this.service.findAllUsers());
    }

    @PostMapping
    public ResponseEntity<Void> addUser (@RequestBody UserRequestDto userDto) {
        service.addUser(userDto);
        return ResponseEntity.created(null).build();
    }

    @DeleteMapping
    public ResponseEntity<User> removeUser(@RequestBody LoginForm loginForm) {
        service.removeUser(loginForm.getEmail(), loginForm.getPassword());
        return ResponseEntity.accepted().build();
    }
}
