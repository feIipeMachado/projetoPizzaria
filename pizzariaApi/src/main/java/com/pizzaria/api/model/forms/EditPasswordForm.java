package com.pizzaria.api.model.forms;

import lombok.Data;

@Data
public class EditPasswordForm {

    private String password;
    private String newPassword;
}
