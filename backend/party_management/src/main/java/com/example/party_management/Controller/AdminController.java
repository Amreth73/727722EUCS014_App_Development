package com.example.party_management.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.party_management.Model.AdminModel;
import com.example.party_management.Model.RegisterModel;
import com.example.party_management.Service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/get/{mail}")
    public ResponseEntity<List<AdminModel>> getValues(@PathVariable String mail){
        List<AdminModel> u = service.getByMail(mail);
           if (u.isEmpty()) {
               return new ResponseEntity<>(u, HttpStatus.NOT_FOUND);

          } else {

               return new ResponseEntity<>(u, HttpStatus.CREATED);
          }
    }

}
