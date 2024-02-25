package com.medical.app.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
@Data
@Entity
@AttributeOverride(name = "dni", column = @Column(name = "secretary_dni"))
@Table(name = "secretary")
public class Secretary extends User {
    private String area;
    @OneToMany(mappedBy = "secretary",cascade = CascadeType.ALL)
    private List<Patient> patients;
    @OneToMany(mappedBy = "secretary",cascade = CascadeType.ALL)
    private List<Doctor> doctors;

}
