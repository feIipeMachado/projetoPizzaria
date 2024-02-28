package com.pizzaria.api.repository;

import com.pizzaria.api.model.entity.PizzaTopping;
import com.pizzaria.api.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PizzaToppingRepository extends MongoRepository<PizzaTopping, ObjectId> {
    public Optional<PizzaTopping> findByName(String name);
    public Optional<PizzaTopping> findById(ObjectId id);


}
