package com.medical.app.models;

import jakarta.persistence.*;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;
@Data
@AttributeOverride(name = "dni", column = @Column(name = "medico_dni"))
@Entity
public class Medico extends Usuario{
    private String especialidad;
    private String consultorio;
    private String horario;
    @OneToMany(mappedBy = "medico")
    private List<Paciente> pacientes;
    private String Matricula;
    @ManyToOne
    @JoinColumn(name = "secretario_dni")
    private Secretario secretario;

}
