package com.example.party_management.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.party_management.Model.VenueModel;
import com.example.party_management.Service.VenueService;

import java.util.List;

@RestController
@RequestMapping("/venue")
@CrossOrigin("http://localhost:3000")
public class VenueController {

    @Autowired
    public VenueService service;

    @PostMapping("/insert")
    public String insertData(@RequestBody VenueModel obj) {
        service.connect(obj);
        return "Done";
    }

    @GetMapping("/bookedDates/{id}")
    public List<String> getBookedDates(@PathVariable int id) {
        return service.getBookedDates(id);
    }

    @GetMapping("/bookedDatesByVenueName/{venueName}")
    public List<String> getBookedDatesByVenueName(@PathVariable int venueName) {
        return service.getBookedDatesByVenueName(venueName);
    }
}
