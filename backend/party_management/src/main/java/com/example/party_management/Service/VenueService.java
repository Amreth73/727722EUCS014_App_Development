package com.example.party_management.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.party_management.Model.VenueModel;
import com.example.party_management.Repository.VenueRepository;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    public String connect(VenueModel obj) {
        venueRepository.save(obj);
        return "Data Inserted Successfully";
    }

    public List<String> getBookedDates(int id) {
        return venueRepository.findAll()
                              .stream()
                              .filter(v -> v.getId() == id)
                              .map(v -> new SimpleDateFormat("yyyy-MM-dd").format(v.getDate()))
                              .collect(Collectors.toList());
    }

    public List<String> getBookedDatesByVenueName(int venueName) {
        return venueRepository.findBookedDatesByVenueName(venueName)
                              .stream()
                              .map(date -> new SimpleDateFormat("yyyy-MM-dd").format(date))
                              .collect(Collectors.toList());
    }
}
