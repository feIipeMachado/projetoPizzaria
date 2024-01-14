package com.pizzaria.api.repository;

import com.pizzaria.api.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {

    public Optional<User> findByUsername(String username);
    public Optional<User> findByEmail(String email);
}
