package com.pizzaria.api.model.entity;

import jakarta.persistence.Id;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "saborPizza")
@Data
public class PizzaTopping {

    @Id
    private ObjectId id;
    private String name;
    private String description;
    private String imageUrl;
}
