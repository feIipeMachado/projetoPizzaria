package com.pizzaria.api.model.dto;

import lombok.Data;

@Data
public class UserRequestDto {

    private String name;
    private String email;
    private String password;
}
