package com.medical.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Datas
@Entity
public class Cita {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;
    @ManyToOne
    @JoinColumn(name = "medico_id") // columna  la FK en la tabla Cita
    private Medico medico;

    private Date fecha;
    private LocalDate hora;
    private boolean recordatorio;
    private boolean estado;

}
