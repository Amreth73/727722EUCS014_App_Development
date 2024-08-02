package com.example.party_management.Model;

import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Events")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VenueModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "userName")
    private String userName;
    @Column(name = "eventType")
    private String eventType;
    @Column(name = "date")
    private Date date;
    @Column(name="phoneNumber")
    private String phoneNumber;
    @Column(name = "venueId")
    private int venueId;


}
