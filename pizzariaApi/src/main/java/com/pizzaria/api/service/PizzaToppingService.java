package com.pizzaria.api.service;

import com.pizzaria.api.model.dto.converter.PizzaToppingConverter;
import com.pizzaria.api.model.dto.converter.UserConverter;
import com.pizzaria.api.model.dto.request.PizzaToppingRequestDto;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.response.PizzaToppingResponseDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.model.entity.PizzaTopping;
import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.repository.PizzaToppingRepository;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PizzaToppingService {

    private PizzaToppingRepository repository;

    public PizzaToppingService(PizzaToppingRepository repository) {
        this.repository = repository;
    }

    public List<PizzaToppingResponseDto> findAllPizzaToppings() {
        List<PizzaTopping> pizzaToppingList = repository.findAll();
        return PizzaToppingConverter.entityListToDtoListConverter(pizzaToppingList);
    }

    public void addPizzaTopping(PizzaToppingRequestDto pizzaToppingDto) {
        String pizzaToppingName = pizzaToppingDto.getName();
        Optional<PizzaTopping> pizzaToppingNameCheck = repository.findByName(pizzaToppingName);

        if (!pizzaToppingNameCheck.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O sabor de " + pizzaToppingName + " já está cadastrado.");
        } else {
            PizzaTopping pizzaTopping = PizzaToppingConverter.dtoToEntityConverter(pizzaToppingDto);
            repository.save(pizzaTopping);
        }
    }

    public PizzaToppingResponseDto removePizzaToppingById(ObjectId id) {
        Optional<PizzaTopping> pizzaToppingToRemove = repository.findById(id);

        if (pizzaToppingToRemove.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sabor " + pizzaToppingToRemove.get().getName() + " não existe");
        } else {
            repository.delete(pizzaToppingToRemove.get());
            return PizzaToppingConverter.entityToDtoConverter(pizzaToppingToRemove.get());
        }
    }

    public PizzaTopping editPizzaToppingName(String name, ObjectId id) {
        Optional<PizzaTopping> pizzaToppingToEdit = repository.findById(id);
        if (pizzaToppingToEdit.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sabor " + pizzaToppingToEdit.get().getName() + " não existe");
        } else {
            pizzaToppingToEdit.get().setName(name);
            return pizzaToppingToEdit.get();
        }
    }

    public PizzaTopping editPizzaToppingDescription(String description, ObjectId id) {
        Optional<PizzaTopping> pizzaToppingToEdit = repository.findById(id);
        if (pizzaToppingToEdit.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sabor " + pizzaToppingToEdit.get().getName() + " não existe");
        } else {
            pizzaToppingToEdit.get().setDescription(description);
            return pizzaToppingToEdit.get();
        }
    }

    public PizzaTopping editPizzaToppingImageUrl(String imageUrl, ObjectId id) {
        Optional<PizzaTopping> pizzaToppingToEdit = repository.findById(id);
        if (pizzaToppingToEdit.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sabor " + pizzaToppingToEdit.get().getName() + " não existe");
        } else {
            pizzaToppingToEdit.get().setImageUrl(imageUrl);
            return pizzaToppingToEdit.get();
        }
    }

    public PizzaTopping editPizzaToppingPrice(BigDecimal price, ObjectId id) {
        Optional<PizzaTopping> pizzaToppingToEdit = repository.findById(id);
        if (pizzaToppingToEdit.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sabor " + pizzaToppingToEdit.get().getName() + " não existe");
        } else {
            pizzaToppingToEdit.get().setPrice(price);
            return pizzaToppingToEdit.get();
        }
    }


}
