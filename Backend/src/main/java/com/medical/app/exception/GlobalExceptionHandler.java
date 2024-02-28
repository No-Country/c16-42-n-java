package com.medical.app.exception;

import com.medical.app.models.response.SecretaryResponse;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<SecretaryResponse> handleDataIntegrityViolation(DataIntegrityViolationException e) {
        String errorMessage = "Error al crear el secretario: Ya existe un secretario con el mismo DNI.";
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(SecretaryResponse.error(errorMessage));
    }
}