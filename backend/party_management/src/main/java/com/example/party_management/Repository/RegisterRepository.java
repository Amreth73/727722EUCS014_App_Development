package com.example.party_management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.example.party_management.Model.RegisterModel;

@Repository
public interface RegisterRepository extends JpaRepository<RegisterModel, Integer> {
    List<RegisterModel> findByEmail(String email);
}
