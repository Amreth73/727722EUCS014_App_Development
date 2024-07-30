import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homes.css"; // Import the CSS file
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Homes = ({ venues }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      {/* <div style={{ marginTop: "-37px" }}> */}
      <Navbar />
      {/* </div> */}
      <div className="venue-heading">
        <h2>Welcome to </h2>
        <h1>Venues Section</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search venues..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
      <div className="venues-list">
        {filteredVenues.map((venue) => (
          <div key={venue.id} className="venue-item">
            <Link to={`/venue/${venue.id}`}>
              <img
                src={venue.images[0]}
                alt={venue.name}
                className="venue-image"
              />
            </Link>
            <h2>{venue.name}</h2>
            <p>{venue.location}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Homes;
