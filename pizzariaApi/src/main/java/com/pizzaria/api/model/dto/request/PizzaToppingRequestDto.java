package com.pizzaria.api.model.dto.request;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class PizzaToppingRequestDto {

    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;

}
