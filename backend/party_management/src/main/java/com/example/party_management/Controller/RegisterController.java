package com.example.party_management.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.party_management.Model.RegisterModel;
import com.example.party_management.Service.RegisterService;

@RestController
@RequestMapping("/login")
public class RegisterController {
    @Autowired
    public RegisterService service;

        @GetMapping("/all")
    public ResponseEntity<List<RegisterModel>> getAll() {
          List<RegisterModel> u = service.getAll();
          if (u.isEmpty()) {
               return new ResponseEntity<>(u, HttpStatus.NOT_FOUND);

          } else {

               return new ResponseEntity<>(u, HttpStatus.CREATED);
          }
     }
     @GetMapping("/check/{mail}")
     public ResponseEntity<List<RegisterModel>> check(@PathVariable String mail){
          List<RegisterModel> u = service.getByMail(mail);
           if (u.isEmpty()) {
               return new ResponseEntity<>(u, HttpStatus.NOT_FOUND);

          } else {

               return new ResponseEntity<>(u, HttpStatus.CREATED);
          }
     }

    @PostMapping("/enter")
     public ResponseEntity<RegisterModel> Enter(@RequestBody RegisterModel app) {

          RegisterModel s = service.addUser(app);
          return new ResponseEntity<>(s, HttpStatus.OK);
     }




}
