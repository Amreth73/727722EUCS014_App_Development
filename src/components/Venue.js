import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageSlideShow from "./ImageSlideShow";
import "./venue.css";

import { usePrice } from "../day3/PriceProvider";
import { color } from "framer-motion";

const Venue = ({ venues }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  const {
    name,
    location,
    capacity,
    amenities,
    charges,
    images,
    contact,
    website,
    description,
  } = venue;

  const handleDateManagementClick = () => {
    setPrice(charges);
    navigate(`/date-management/${id}`);
  };

  return (
    <div className="venue">
      <h1>{name}</h1>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Capacity:</strong> {capacity}
      </p>
      <div className="venue-details">
        <h2>Details</h2>
        <p>
          <span className="detail-label">Description:</span> {description}
        </p>
        <p>
          <span className="detail-label">Contact:</span> {contact}
        </p>
        <p>
          <span className="detail-label">Website:</span>{" "}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>
      <p>
        <strong>Amenities:</strong>
      </p>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <p>
        <span className="detail-label">Charges: </span>
        {charges}
      </p>
      <div className="venue-images">
        <ImageSlideShow images={images} />
      </div>
      <button
        onClick={handleDateManagementClick}
        style={{
          backgroundColor: "#ff6347", // Tomato color
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Manage Dates
      </button>
    </div>
  );
};

export default Venue;
