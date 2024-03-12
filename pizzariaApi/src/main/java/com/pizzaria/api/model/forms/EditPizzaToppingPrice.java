package com.pizzaria.api.model.forms;

import lombok.Data;
import org.bson.types.ObjectId;

import java.math.BigDecimal;

@Data
public class EditPizzaToppingPrice {
    ObjectId id;
    BigDecimal price;
}
