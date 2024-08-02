package com.example.party_management.Repository;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.party_management.Model.AdminModel;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Integer> {

    List<AdminModel> findByEmail(String email);
}
