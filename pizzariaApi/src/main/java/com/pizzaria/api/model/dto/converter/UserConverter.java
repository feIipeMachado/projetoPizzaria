package com.pizzaria.api.model.dto.converter;

import com.pizzaria.api.model.User;
import com.pizzaria.api.model.dto.UserRequestDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;

import java.util.ArrayList;
import java.util.List;

public class UserConverter {

    public static User dtoToEntityConverter(UserRequestDto dto) {
        User userEntity = new User();
        userEntity.setName(dto.getName());
        userEntity.setEmail(dto.getEmail());
        userEntity.setPassword(dto.getPassword());

        return userEntity;
    }

    public static UserResponseDto entityToDtoConverter (User entity) {
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setName(entity.getName());
        userResponse.setEmail(entity.getEmail());
        return userResponse;
    }

    public static List<UserResponseDto> entityListToDtoListConverter (List<User> entityList) {
        List<UserResponseDto> dtoList = new ArrayList<>();

        for (User u : entityList) {
            dtoList.add(entityToDtoConverter(u));
        }

        return dtoList;
    }
}
