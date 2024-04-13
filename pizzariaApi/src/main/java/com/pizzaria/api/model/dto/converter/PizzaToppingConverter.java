package com.pizzaria.api.model.dto.converter;

import com.pizzaria.api.model.dto.request.PizzaToppingRequestDto;
import com.pizzaria.api.model.dto.response.PizzaToppingResponseDto;
import com.pizzaria.api.model.entity.PizzaTopping;

import java.util.ArrayList;
import java.util.List;

public class PizzaToppingConverter {

    public static PizzaTopping dtoToEntityConverter(PizzaToppingRequestDto dto) {
        PizzaTopping pizzaTopping = new PizzaTopping();
        pizzaTopping.setName(dto.getName());
        pizzaTopping.setDescription(dto.getDescription());
        pizzaTopping.setImageUrl(dto.getImageUrl());
        pizzaTopping.setPrice(dto.getPrice());

        return pizzaTopping;
    }

    public static PizzaToppingResponseDto entityToDtoConverter (PizzaTopping entity) {
        PizzaToppingResponseDto pizzaToppingResponse= new PizzaToppingResponseDto();
        pizzaToppingResponse.setId(entity.getId().toHexString());
        pizzaToppingResponse.setName(entity.getName());
        pizzaToppingResponse.setDescription(entity.getDescription());
        pizzaToppingResponse.setImageUrl(entity.getImageUrl());
        pizzaToppingResponse.setPrice(entity.getPrice());
        return pizzaToppingResponse;
    }

    public static List<PizzaToppingResponseDto> entityListToDtoListConverter (List<PizzaTopping> entityList) {
        List<PizzaToppingResponseDto> dtoList = new ArrayList<>();

        for (PizzaTopping u : entityList) {
            dtoList.add(entityToDtoConverter(u));
        }

        return dtoList;
    }


}
