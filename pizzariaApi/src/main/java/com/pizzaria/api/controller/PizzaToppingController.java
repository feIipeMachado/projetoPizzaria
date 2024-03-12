package com.pizzaria.api.controller;

import com.pizzaria.api.model.dto.request.PizzaToppingRequestDto;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.response.PizzaToppingResponseDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.model.forms.EditPizzaTopping;
import com.pizzaria.api.model.forms.EditPizzaToppingPrice;
import com.pizzaria.api.model.forms.EditUsernameForm;
import com.pizzaria.api.model.forms.LoginForm;
import com.pizzaria.api.service.PizzaToppingService;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
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
    public ResponseEntity<Void> addPizzaTopping(@RequestBody PizzaToppingRequestDto pizzaToppingDto) {
        service.addPizzaTopping(pizzaToppingDto);
        return ResponseEntity.created(null).build();
    }

    @DeleteMapping
    public ResponseEntity<PizzaToppingResponseDto> removePizzaTopping(@RequestBody ObjectId id) {
        return ResponseEntity.ok(service.removePizzaToppingById(id));
    }

    @PutMapping("/edit/name")
    public ResponseEntity<Void> editPizzaToppingName(@RequestBody EditPizzaTopping editPizzaTopping) {
        service.editPizzaToppingName(editPizzaTopping.getFieldToEdit(), editPizzaTopping.getId());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/description")
    public ResponseEntity<Void> editPizzaToppingDescription(@RequestBody EditPizzaTopping editPizzaTopping) {
        service.editPizzaToppingDescription(editPizzaTopping.getFieldToEdit(), editPizzaTopping.getId());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/imageUrl")
    public ResponseEntity<Void> editPizzaToppingImageUrl(@RequestBody EditPizzaTopping editPizzaTopping) {
        service.editPizzaToppingImageUrl(editPizzaTopping.getFieldToEdit(), editPizzaTopping.getId());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/price")
    public ResponseEntity<Void> editPizzaToppingPrice(@RequestBody EditPizzaToppingPrice editPizzaToppingPrice) {
        service.editPizzaToppingPrice(editPizzaToppingPrice.getPrice(), editPizzaToppingPrice.getId());
        return ResponseEntity.noContent().build();
    }


}
