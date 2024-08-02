package com.example.party_management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.party_management.Model.AdminModel;
import com.example.party_management.Repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repo;

    public List<AdminModel> getByMail(String mail){
        return repo.findByEmail(mail);
    }

}
