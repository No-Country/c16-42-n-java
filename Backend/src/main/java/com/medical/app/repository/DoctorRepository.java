package com.medical.app.repository;

import com.medical.app.models.Doctor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor,Long> {
    Doctor getReferenceById(Long id);

}
