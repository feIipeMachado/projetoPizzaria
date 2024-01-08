package com.pizzaria.api.service;

import com.pizzaria.api.model.User;
import com.pizzaria.api.model.dto.UserRequestDto;
import com.pizzaria.api.model.dto.converter.UserConverter;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<UserResponseDto> findAllUsers() {
        List<User> userList = repository.findAll();
        return UserConverter.entityListToDtoListConverter(userList);
    }

    public User removeUser(String email, String password) {
        Optional<User> userToRemove = repository.findByEmail(email);

        if (userToRemove.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário com e-mail " + email + " não existe");
        } else if (!Objects.equals(userToRemove.get().getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senha incorreta.");
        } else {
            repository.delete(userToRemove.get());
            return userToRemove.get();
        }
    }
    public void addUser(UserRequestDto userDto) {
        String userEmail = userDto.getEmail();
        Optional<User> userEmailCheck = repository.findByEmail(userEmail);

        if (!userEmailCheck.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O e-mail " + userEmail + " já está em uso.");
        } else {
            User userEntity = UserConverter.dtoToEntityConverter(userDto);
            repository.save(userEntity);
        }
    }
}
