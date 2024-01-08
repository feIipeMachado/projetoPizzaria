package com.pizzaria.api.repository;

import com.pizzaria.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByName(String name);
    public Optional<User> findByEmail(String email);
}
