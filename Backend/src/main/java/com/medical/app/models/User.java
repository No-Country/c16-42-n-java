package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@Inheritance(strategy = InheritanceType.JOINED)
@MappedSuperclass
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dni;
    private String name;
    private String email;
    private String address;
    private String phoneNumber;

}
