package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@Table(name="patient")
@AttributeOverride(name = "dni", column = @Column(name = "paciente_dni"))
@Entity
public class Patient extends User {
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    @ManyToOne
    @JoinColumn(name = "medical_visit_id")
    private Appointment appointment;
    private Date birthDate;
    @OneToMany(mappedBy = "patient")
    private List<Appointment> medicalHistory;
    private String emergencyNumber;
    @ManyToOne
    @JoinColumn(name = "secretary_dni")
    private Secretary secretary;
}
