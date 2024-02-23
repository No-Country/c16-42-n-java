package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@Inheritance(strategy = InheritanceType.JOINED)
@MappedSuperclass
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dni;
    private String nombre;
    private String email;
    private String direccion;
    private String telefono;

}
