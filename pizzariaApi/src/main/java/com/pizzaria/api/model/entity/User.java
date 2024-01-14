package com.pizzaria.api.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
public class User {

    @Id
    private ObjectId id;
    private String username;
    private String email;
    private String password;
}
