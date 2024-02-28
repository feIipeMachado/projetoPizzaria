package com.pizzaria.api.controller;

import com.pizzaria.api.model.dto.request.PizzaToppingRequestDto;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.response.PizzaToppingResponseDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.model.forms.LoginForm;
import com.pizzaria.api.service.PizzaToppingService;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/pizzaToppings")
public class PizzaToppingController {

    private PizzaToppingService service;

    public PizzaToppingController(PizzaToppingService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PizzaToppingResponseDto>> findAllPizzaToppings() {
        return ResponseEntity.ok(this.service.findAllPizzaToppings());
    }

    @PostMapping
    public ResponseEntity<Void> addPizzaTopping (@RequestBody PizzaToppingRequestDto pizzaToppingDto) {
        service.addPizzaTopping(pizzaToppingDto);
        return ResponseEntity.created(null).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PizzaToppingResponseDto> removePizzaTopping(@PathVariable("id") ObjectId id) {
        return ResponseEntity.ok(service.removePizzaToppingById(id));
    }




}
