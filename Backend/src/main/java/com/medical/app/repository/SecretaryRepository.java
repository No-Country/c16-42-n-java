package com.medical.app.repository;

import com.medical.app.models.Secretary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecretaryRepository extends CrudRepository<Secretary,Integer> {
}
