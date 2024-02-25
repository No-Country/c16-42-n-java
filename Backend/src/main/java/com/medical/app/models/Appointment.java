package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name="medical_visit")
public class Appointment {
    //Cita
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;
    @ManyToOne
    @JoinColumn(name = "doctor_id") // columna  la FK en la tabla Cita
    private Doctor doctor;

    private Date date;
    private LocalDate time;
    private boolean reminder;
    private boolean status;

}
