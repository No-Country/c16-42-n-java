package com.medical.app.models;
import jakarta.persistence.*;
import lombok.*;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Date;
import java.util.List;

@Data
@Table(name="patient")
@AttributeOverride(name = "id", column = @Column(name = "paciente_id"))
@Entity
public class Patient extends User {


    @ManyToOne
    @JoinColumn(name = "doctor_id")
    @Schema(hidden = true)
    private Doctor doctor;
    /*
    @ManyToOne
    @JoinColumn(name = "medical_visit_id")
    private Appointment appointment;*/
    private Date birthDate;
    @OneToMany(mappedBy = "patient")
    @Schema(hidden = true)
    private List<Appointment> medicalHistory;
    private String emergencyNumber;
    @ManyToOne
    @JoinColumn(name = "secretary_id")
    @Schema(hidden = true)
    private Secretary secretary;
}
