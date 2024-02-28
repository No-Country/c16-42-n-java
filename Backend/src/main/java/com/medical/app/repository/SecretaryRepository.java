package com.medical.app.repository;

import com.medical.app.models.Secretary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SecretaryRepository extends CrudRepository<Secretary,Long> {


    Optional<Secretary> findByDni(Integer dni);

    Secretary getReferenceByid(Long id);
}
