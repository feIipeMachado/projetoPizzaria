package com.pizzaria.api.service;

import com.pizzaria.api.model.entity.User;
import com.pizzaria.api.model.dto.request.UserRequestDto;
import com.pizzaria.api.model.dto.converter.UserConverter;
import com.pizzaria.api.model.dto.response.UserResponseDto;
import com.pizzaria.api.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    public UserResponseDto removeUser(String email, String password) {
        Optional<User> userToRemove = repository.findByEmail(email);

        if (userToRemove.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário com e-mail " + email + " não existe");
        } else if (!Objects.equals(userToRemove.get().getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senha incorreta.");
        } else {
            repository.delete(userToRemove.get());
            return UserConverter.entityToDtoConverter(userToRemove.get());
        }
    }
    public void addUser(UserRequestDto userDto) {
        String userEmail = userDto.getEmail();
        Optional<User> userEmailCheck = repository.findByEmail(userEmail);

        if (!userEmailCheck.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O e-mail " + userEmail + " já está em uso.");
        } else {
            User user = UserConverter.dtoToEntityConverter(userDto);
            repository.save(user);
        }
    }

    public UserResponseDto findUserByLoginForm(String email, String password) {
        Optional<User> userFound = repository.findByEmail(email);

        if (userFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail ou senha incorretos.");
        } else if (!Objects.equals(userFound.get().getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail ou senha incorretos.");
        } else {
            return UserConverter.entityToDtoConverter(userFound.get());
        }
    }

    public UserResponseDto editUsername(String password, String username, ObjectId id) {
        Optional<User> userFound = repository.findById(id);

        if (userFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não existe.");
        } else if (!Objects.equals(userFound.get().getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senha incorreta.");
        } else {
            userFound.get().setUsername(username);
            repository.save(userFound.get());
            return UserConverter.entityToDtoConverter(userFound.get());
        }
    }

    public UserResponseDto editPassword(String password, String newPassword, ObjectId id) {
        Optional<User> userFound = repository.findById(id);

        if (userFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não existe.");
        } else if (!Objects.equals(userFound.get().getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Senha incorreta.");
        } else {
            userFound.get().setPassword(newPassword);
            repository.save(userFound.get());
            return UserConverter.entityToDtoConverter(userFound.get());
        }
    }


}
