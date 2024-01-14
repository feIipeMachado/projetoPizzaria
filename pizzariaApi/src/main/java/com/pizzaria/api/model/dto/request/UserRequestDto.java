package com.pizzaria.api.model.dto.request;

import lombok.Data;

@Data
public class UserRequestDto {

    private String username;
    private String email;
    private String password;
}
