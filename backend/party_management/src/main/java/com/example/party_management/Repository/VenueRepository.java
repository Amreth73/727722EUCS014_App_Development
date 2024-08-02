package com.example.party_management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.party_management.Model.VenueModel;

import java.util.Date;
import java.util.List;

@Repository
public interface VenueRepository extends JpaRepository<VenueModel, Integer> {

    @Query("SELECT v.date FROM Events v WHERE v.venueId = :venueId")
    List<Date> findBookedDatesByVenueName(int venueId);

    @Query("SELECT v FROM Events v WHERE v.userName = :name")
    VenueModel findWhole(@Param("name") String name);

    List<VenueModel> findById(int id);
}
