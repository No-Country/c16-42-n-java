package com.medical.app.controladores;


import com.medical.app.models.Secretary;
import com.medical.app.models.request.PatientRequest;
import com.medical.app.models.response.PatientResponse;
import com.medical.app.services.PatientService;
import com.medical.app.services.SecretaryService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("patients")
public class PatientController {
    @Autowired
    private PatientService patientService;


    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Paciente creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Bad Request: Parámetros inválidos"),
            @ApiResponse(responseCode = "404", description = "Not Found: Secretario no encontrado"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error: Error al crear el paciente")
    })
    @PostMapping("/create-patient")
    public ResponseEntity<?> createPatient(@RequestBody PatientRequest patientRequest) {
            PatientResponse createdPatient = patientService.createPatient(patientRequest);
            return ResponseEntity.ok().body(createdPatient);

    }

    @GetMapping
    public ResponseEntity<List<PatientResponse>> getPatients(){
        try {
            return ResponseEntity.ok().body(patientService.getPatients());
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
