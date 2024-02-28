package com.medical.app.repository;

import com.medical.app.models.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient,Long> {


}
