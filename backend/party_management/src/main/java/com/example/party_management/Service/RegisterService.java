package com.example.party_management.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.party_management.Model.RegisterModel;
import com.example.party_management.Repository.RegisterRepository;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository repo;

    public List<RegisterModel> getAll() {
        return repo.findAll();
    }

    public Optional<RegisterModel> getById(int Id) {
        return repo.findById(Id);
    }

    public RegisterModel addUser(RegisterModel d) {
        return repo.save(d);
    }

    public List<RegisterModel> getByMail(String mail) {
        return repo.findByEmail(mail);
    }
}
