package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AttributeOverride(name = "dni", column = @Column(name = "paciente_dni"))
public class Paciente extends Usuario{
    @ManyToOne
    @JoinColumn(name = "medico_id")
    private Medico medico;
    @ManyToOne
    @JoinColumn(name = "cita_id")
    private Cita cita;
    private Date fechaNacimiento;
    @OneToMany(mappedBy = "paciente")
    private List<Cita> historial;
    private String numeroEmergencia;
    @ManyToOne
    @JoinColumn(name = "secretario_dni")
    private Secretario secretario;
}
