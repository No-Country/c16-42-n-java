package com.medical.app.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@AttributeOverride(name = "dni", column = @Column(name = "secretario_dni"))
public class Secretario extends Usuario{
    private String area;
    @OneToMany(mappedBy = "secretario",cascade = CascadeType.ALL)
    private List<Paciente> pacientes;
    @OneToMany(mappedBy = "secretario",cascade = CascadeType.ALL)
    private List<Medico> medicos;

}
