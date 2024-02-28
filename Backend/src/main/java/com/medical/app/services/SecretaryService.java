package com.medical.app.services;

import com.medical.app.models.Secretary;
import com.medical.app.models.request.SecretaryModifyRequest;
import com.medical.app.models.request.SecretaryRequest;
import com.medical.app.models.response.SecretaryResponse;
import com.medical.app.models.response.SecretaryResponseComplete;
import com.medical.app.repository.SecretaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SecretaryService {
    @Autowired
    private SecretaryRepository secretaryRepository;


    public SecretaryResponse createSecretary(SecretaryRequest secretaryRequest) {
        // Crea una nueva instancia de Secretary
        Secretary newSecretary = new Secretary();
        newSecretary.setDni(secretaryRequest.getDni());
        newSecretary.setAddress(secretaryRequest.getAddress());
        newSecretary.setArea(secretaryRequest.getArea());
        newSecretary.setEmail(secretaryRequest.getEmail());
        newSecretary.setName(secretaryRequest.getName());
        newSecretary.setPhoneNumber(secretaryRequest.getPhoneNumber());
        // Guarda la nueva entidad en la base de datos
        Secretary savedSecretary = secretaryRepository.save(newSecretary);

        // Construye y devuelve una respuesta con los datos relevantes
        return SecretaryResponse.builder()
                .dni(savedSecretary.getDni())
                .address(savedSecretary.getAddress())
                .area(savedSecretary.getArea())
                .email(savedSecretary.getEmail())
                .name(savedSecretary.getName())
                .phoneNumber(savedSecretary.getPhoneNumber())
                .build();
    }

    public List<SecretaryResponse> getSecretaries() {
        // SELECT * FROM secretary
        List<Secretary> secretarys = (List<Secretary>) secretaryRepository.findAll();

        // se mapea la lista que recibimos de la base y la retornamos como tipo List
        return secretarys.stream()
                .map(s -> SecretaryResponse.builder()
                        .dni(s.getDni())
                        .address(s.getAddress())
                        .area(s.getArea())
                        .email(s.getEmail())
                        .name(s.getName())
                        .phoneNumber(s.getPhoneNumber())
                        .build())
                .toList();
    }


    public SecretaryResponseComplete getSecretaryByDni(Integer dni) {
        Optional<Secretary> optionalSecretary = secretaryRepository.findByDni(dni);

        if (optionalSecretary.isPresent()) {
            Secretary secretary = optionalSecretary.get();

            return SecretaryResponseComplete.builder()
                    .id(secretary.getId())
                    .dni(secretary.getDni())
                    .name(secretary.getName())
                    .email(secretary.getEmail())
                    .address(secretary.getAddress())
                    .phoneNumber(secretary.getPhoneNumber())
                    .area(secretary.getArea())
                    .build();
        } else {
            return SecretaryResponseComplete.error("No se encontró un secretario con el DNI proporcionado.");
        }
    }


    public SecretaryResponse modifySecretaryByDni(Integer dni, SecretaryModifyRequest secretaryRequest) {
        Optional<Secretary> optionalSecretary = secretaryRepository.findByDni(dni);

        if (optionalSecretary.isEmpty()) {
            return SecretaryResponse.error("No se encontró un secretario con el DNI proporcionado");
        }

        Secretary secretary = optionalSecretary.get();

        if (secretaryRequest.getName() != null) {
            secretary.setName(secretaryRequest.getName());
        }

        if (secretaryRequest.getEmail() != null) {
            secretary.setEmail(secretaryRequest.getEmail());
        }

        if (secretaryRequest.getAddress() != null) {
            secretary.setAddress(secretaryRequest.getAddress());
        }

        if (secretaryRequest.getPhoneNumber() != null) {
            secretary.setPhoneNumber(secretaryRequest.getPhoneNumber());
        }

        if (secretaryRequest.getArea() != null) {
            secretary.setArea(secretaryRequest.getArea());
        }

        // Otros campos que desees modificar

        secretaryRepository.save(secretary);

        return SecretaryResponse.builder()
                .dni(secretary.getDni())
                .name(secretary.getName())
                .email(secretary.getEmail())
                .address(secretary.getAddress())
                .phoneNumber(secretary.getPhoneNumber())
                .area(secretary.getArea())
                // Otros campos que desees devolver en la respuesta
                .build();
    }


    public void deleteSecretary(Long id) {
        Secretary secreatry= secretaryRepository.getReferenceByid(id);
        secretaryRepository.delete(secreatry);
    }
}
