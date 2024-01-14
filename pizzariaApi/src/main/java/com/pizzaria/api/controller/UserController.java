package com.pizzaria.api.controller;

import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.model.forms.LoginForm;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.service.UserService;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/login")
    public ResponseEntity<UserResponseDto> loginUser(@RequestBody LoginForm loginForm) {
        return ResponseEntity.ok(this.service.findUserByLoginForm(loginForm.getEmail(), loginForm.getPassword()));
    }
}
