import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";

import "./manageDates.css";

const ManageDate = () => {
  const { id } = useParams();
  const { setPrice } = usePrice();
  const initialBookedDates = [
    "2024-08-01",
    "2024-08-03",
    "2024-08-10", // Example of pre-booked dates
  ];

  const [bookedDates, setBookedDates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

  // Load booked dates from local storage or use initial values
  useEffect(() => {
    const savedDates =
      JSON.parse(localStorage.getItem(`bookedDates_${id}`)) ||
      initialBookedDates;
    setBookedDates(savedDates);
  }, [id]);

  // Save booked dates to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(`bookedDates_${id}`, JSON.stringify(bookedDates));
  }, [bookedDates, id]);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDateClick = (date) => {
    const formattedDate = `${currentMonth.getFullYear()}-${String(
      currentMonth.getMonth() + 1
    ).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    if (bookedDates.includes(formattedDate)) {
      setError("This date is already booked!");
    } else {
      setError("");
      setFormData((prev) => ({ ...prev, date: formattedDate }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.date) {
      setError("All fields are required.");
      return;
    }
    if (bookedDates.includes(formData.date)) {
      setError("This date is already booked!");
      return;
    }
    const newBookedDates = [...bookedDates, formData.date];
    setBookedDates(newBookedDates);
    localStorage.setItem(`bookedDates_${id}`, JSON.stringify(newBookedDates)); // Update local storage
    setSuccessMessage("Booking confirmed!");
    setFormData({ name: "", contact: "", date: "" });
    navigate("/payment");
  };

  return (
    <div className="manage-date">
      <h1>Manage Dates for Venue {id}</h1>

      <div className="calendar">
        <div className="calendar-header">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
              )
            }
          >
            {"<"}
          </button>
          <span>
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </span>
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
              )
            }
          >
            {">"}
          </button>
        </div>
        <div className="calendar-grid">
          {[...Array(startDay).fill(null), ...daysArray].map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                bookedDates.includes(
                  `${currentMonth.getFullYear()}-${String(
                    currentMonth.getMonth() + 1
                  ).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                )
                  ? "booked"
                  : ""
              }`}
              onClick={() => day && handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <h2 style={{ color: "#ff6347" }}>Book Venue</h2>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="number"
            id="contact"
            className="cons"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            readOnly
            placeholder="Select a date"
          />
        </div>
        <button type="submit" className="manage" disabled={!formData.date}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default ManageDate;
