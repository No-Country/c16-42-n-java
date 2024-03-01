package com.medical.app.services;

import com.medical.app.models.Patient;
import com.medical.app.models.Secretary;
import com.medical.app.models.request.PatientRequest;
import com.medical.app.models.request.SecretaryRequest;
import com.medical.app.models.response.PatientResponse;
import com.medical.app.models.response.SecretaryResponse;
import com.medical.app.repository.PatientRepository;
import com.medical.app.repository.SecretaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private SecretaryRepository secretaryRepository;


    public List<PatientResponse> getPatients() {
        // SELECT * FROM Patient
        //List<Patient> medicos = patientRepository.findAll();

        List<Patient> patients = (List<Patient>) patientRepository.findAll();
        if (patients.isEmpty()) {
            return Collections.emptyList();  // Devolver lista vacía si no hay pacientes
        }

        return patients.stream()
                .map(p -> PatientResponse.builder()
                        .Id(p.getId())
                        .dni(p.getDni())
                        .name(p.getName())
                        .email(p.getEmail())
                        .address(p.getAddress())
                        .phoneNumber(p.getPhoneNumber())
                        .birthDate(p.getBirthDate())
                        .emergencyNumber(p.getEmergencyNumber())
                        .secretaryId(p.getSecretary())
                        .build())
                .toList();
    }
    public PatientResponse createPatient(PatientRequest patientRequest) {
        Patient newPatient  = new Patient();
        newPatient.setDni(patientRequest.getDni());
        newPatient.setAddress(patientRequest.getAddress());
        newPatient.setEmail(patientRequest.getEmail());
        newPatient.setName(patientRequest.getName());
        newPatient.setPhoneNumber(patientRequest.getPhoneNumber());
        newPatient.setBirthDate(patientRequest.getBirthDate());
        newPatient.setEmergencyNumber(patientRequest.getEmergencyNumber());

        //busco secretario id

        Optional<Secretary> optionalSecretary = secretaryRepository.findById(patientRequest.getSecretaryId());

        if (!optionalSecretary.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontró el secretario con ID: " + patientRequest.getSecretaryId());
        }

        Secretary savedSecretary = optionalSecretary.get();
        newPatient.setSecretary(savedSecretary.getId());

        Patient savedPatient = patientRepository.save(newPatient);
        return PatientResponse.builder()
                .Id(savedPatient.getId())
                .dni(savedPatient.getDni())
                .address(savedPatient.getAddress())
                .email(savedPatient.getEmail())
                .name(savedPatient.getName())
                .phoneNumber(savedPatient.getPhoneNumber())
                .birthDate(savedPatient.getBirthDate())
                .emergencyNumber(savedPatient.getEmergencyNumber())
                .secretaryId(savedPatient.getId())
                .build();

    }
}
