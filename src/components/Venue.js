import React from "react";
import { useParams } from "react-router-dom";
import ImageSlideShow from "./ImageSlideShow";
import "./venue.css";

const Venue = ({ venues }) => {
  const { id } = useParams();
  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  const {
    name,
    location,
    capacity,
    amenities,
    images,
    contact,
    website,
    description,
  } = venue;

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

      <div className="venue-images">
        <ImageSlideShow images={images} />
      </div>
    </div>
  );
};

export default Venue;
