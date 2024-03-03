package com.medical.app.repository;

import com.medical.app.models.Doctor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor,Long> {
    Doctor getReferenceById(Long id);

    Optional<Doctor> findByDni(Integer dni);
}
