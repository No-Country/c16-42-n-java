package com.medical.app.models;

import jakarta.persistence.*;

import lombok.Builder;
import lombok.Data;


import java.util.List;

@Data
@Entity
@AttributeOverride(name = "id", column = @Column(name = "secretary_id"))
@Table(name = "secretary")
public class Secretary extends User {

    private String area;
    @OneToMany(mappedBy = "secretary",cascade = CascadeType.ALL)
    private List<Patient> patients;
    @OneToMany(mappedBy = "secretary",cascade = CascadeType.ALL)
    private List<Doctor> doctors;

}
