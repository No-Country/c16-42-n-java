package com.medical.app.services;

import com.medical.app.models.Patient;
import com.medical.app.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Transactional(readOnly = true)
    public List<Patient> getPatients() {
        // SELECT * FROM Patient
        //List<Patient> medicos = patientRepository.findAll();

        //List<Patient> patients = (List<Patient>) patientRepository.findAll();
        return (List<Patient>) patientRepository.findAll();

                // Limpiar detalles anidados para evitar respuesta anidada
                /*patients.forEach(patient -> {
                    // patient.setDoctor(null);
                    //patient.setSecretary(null);
                    // Limpiar medicalHistory si no es necesario
                    patient.setMedicalHistory(null);
                });

        return patients;*/
    }

}
