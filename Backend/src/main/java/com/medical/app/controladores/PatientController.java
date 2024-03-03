package com.medical.app.controladores;


import com.medical.app.models.Secretary;
import com.medical.app.models.request.DoctorRequest;
import com.medical.app.models.request.PatientRequest;
import com.medical.app.models.response.DoctorResponse;
import com.medical.app.models.response.DoctorResponseCompleto;
import com.medical.app.models.response.PatientResponse;
import com.medical.app.models.response.PatientResponseComplete;
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
    @GetMapping("{id}")
    public ResponseEntity<PatientResponseComplete> getPatient(@RequestParam Long id){
        return ResponseEntity.ok().body(patientService.getPatient(id));
    }

    @PutMapping("modify-patient")
    public ResponseEntity<PatientResponse> modifyPatient(@RequestParam Long id, @RequestBody PatientRequest patientRequest){

        return ResponseEntity.ok().body(patientService.modifyPatient(id, patientRequest));
    }

    @DeleteMapping("delete-patient")
    public ResponseEntity<String> deletePatient(@RequestParam Long id){
        patientService.deletePatient(id);

        return ResponseEntity.ok().body("doctor deleted with exit");
    }
}
