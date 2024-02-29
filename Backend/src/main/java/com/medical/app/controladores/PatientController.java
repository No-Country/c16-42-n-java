package com.medical.app.controladores;

import com.medical.app.models.Patient;
import com.medical.app.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("patients")
public class PatientController {
    @Autowired
    private PatientService patientService;



    @GetMapping
    public ResponseEntity<List<Patient>> getPatients(){
        return ResponseEntity.ok().body(patientService.getPatients());
        /*
        try {
            return ResponseEntity.ok().body(patientService.getPatients());
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }*/
    }
}
