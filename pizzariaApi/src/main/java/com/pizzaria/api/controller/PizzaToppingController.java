package com.pizzaria.api.controller;

import com.pizzaria.api.model.dto.request.PizzaToppingRequestDto;
import com.pizzaria.api.model.dto.response.PizzaToppingResponseDto;
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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PizzaToppingResponseDto> removePizzaTopping(@PathVariable("id") ObjectId id) {
        return ResponseEntity.ok(service.removePizzaToppingById(id));
    }

    @PutMapping("/edit/{id}/name")
    public ResponseEntity<Void> editPizzaToppingName(@PathVariable("id") ObjectId id,
                                                     @RequestBody String name) {
        service.editPizzaToppingName(name, id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/{id}/description")
    public ResponseEntity<Void> editPizzaToppingDescription(@PathVariable("id") ObjectId id,
                                                            @RequestBody String description) {
        service.editPizzaToppingDescription(description, id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/{id}/imageUrl")
    public ResponseEntity<Void> editPizzaToppingImageUrl(@PathVariable("id") ObjectId id,
                                                         @RequestBody String imageUrl) {
        service.editPizzaToppingImageUrl(imageUrl, id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/edit/{id}/price")
    public ResponseEntity<Void> editPizzaToppingPrice(@PathVariable("id") ObjectId id,
                                                      @RequestBody BigDecimal price) {
        service.editPizzaToppingPrice(price, id);
        return ResponseEntity.noContent().build();
    }


}
