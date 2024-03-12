package com.pizzaria.api.model.forms;

import lombok.Data;
import org.bson.types.ObjectId;

@Data
public class EditPizzaTopping {

    ObjectId id;
    String fieldToEdit;
}
