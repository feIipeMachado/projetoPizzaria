package com.pizzaria.api.model.dto.converter;

import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.response.UserResponseDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class UserConverter {

    public static User dtoToEntityConverter(UserRequestDto dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setAdminStatus(false);
        if (dto.getAdminStatus() != null) {
            user.setAdminStatus(dto.getAdminStatus());
        }
        return user;
    }

    public static UserResponseDto entityToDtoConverter (User entity) {
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setUsername(entity.getUsername());
        userResponse.setAdminStatus(entity.getAdminStatus());
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
