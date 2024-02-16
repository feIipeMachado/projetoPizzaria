package com.pizzaria.api.model.dto.request;

import lombok.Data;

@Data
public class PizzaToppingRequestDto {

    private String name;
    private String description;
    private String imageUrl;
}
