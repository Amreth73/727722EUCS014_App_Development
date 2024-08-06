package com.example.party_management.Model;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.CascadeType;

@Entity(name="Login_Details")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String name;
    private String email;
    private String password;
    private String confirmPassword;
    // @OneToOne(cascade = CascadeType.ALL)
    // @JsonBackReference
    // private VenueModel venueModel;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "model")
    @JsonManagedReference
    private List<VenueModel> venue;

}