package com.medical.app.controladores;

import com.medical.app.models.request.SecretaryModifyRequest;
import com.medical.app.models.request.SecretaryRequest;
import com.medical.app.models.response.SecretaryResponse;
import com.medical.app.models.response.SecretaryResponseComplete;
import com.medical.app.services.SecretaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("secretaries")
public class SecretaryController {

    @Autowired
    private SecretaryService secretaryService;

    @PostMapping("/create-secretary")
    public ResponseEntity<SecretaryResponse> createSecretary(@RequestBody SecretaryRequest secretaryRequest) {
        SecretaryResponse createdSecretary = secretaryService.createSecretary(secretaryRequest);
        return ResponseEntity.ok().body(createdSecretary);
    }

    @GetMapping("/get-secretaries")
    public ResponseEntity<List<SecretaryResponse>> getSecretaries() {
        try {
            List<SecretaryResponse> secretaryResponses = secretaryService.getSecretaries();
            return ResponseEntity.ok().body(secretaryResponses);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }


    @GetMapping("{dni}")
    public ResponseEntity<SecretaryResponseComplete> getSecretaryByDni(@RequestParam Integer dni) {
        SecretaryResponseComplete secretaryResponse = secretaryService.getSecretaryByDni(dni);

        if (secretaryResponse != null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(secretaryResponse);
        }

        return ResponseEntity.ok().body(secretaryResponse);
    }

    @PutMapping("modify-secretary")
    public ResponseEntity<SecretaryResponse> createMedico(@RequestParam Integer dni, @RequestBody SecretaryModifyRequest modifyRequest){

        return ResponseEntity.ok().body(secretaryService.modifySecretaryByDni(dni, modifyRequest));
    }


    @DeleteMapping("delete-secretary")
    public ResponseEntity<String> deleteSecretary(@RequestParam Long id){
        secretaryService.deleteSecretary(id);

        return ResponseEntity.ok().body("secretario eliminado");
    }


}