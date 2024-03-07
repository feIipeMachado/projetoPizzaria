package com.pizzaria.api.model.dto.response;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class PizzaToppingResponseDto {

    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;
}
