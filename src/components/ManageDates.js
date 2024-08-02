import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import "./manageDates.css";

const ManageDate = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const navigate = useNavigate();

  const [bookedDates, setBookedDates] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    eventType: "",
    date: "",
    venueId: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Load booked dates from the server
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/venue/bookedDatesByVenueName/${id}`
        );
        setBookedDates(response.data);
      } catch (err) {
        console.error("Failed to fetch booked dates", err);
      }
    };
    fetchBookedDates();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.phoneNumber || !formData.date) {
      setError("All fields are required.");
      return;
    }
    if (bookedDates.includes(formData.date)) {
      setError("This date is already booked!");
      return;
    }
    formData.venueId = id;
    console.log("venue: " + formData.venueId);
    const newBookedDates = [...bookedDates, formData.date];
    try {
      // Send the booking request to the server
      console.log(formData);
      await axios.post("http://localhost:5000/venue/insert", formData);
      // Update state and local storage
      setBookedDates(newBookedDates);
      localStorage.setItem(`bookedDates_${id}`, JSON.stringify(newBookedDates));
      setSuccessMessage("Booking confirmed!");
      setFormData({
        userName: "",
        phoneNumber: "",
        date: "",
        eventType: "",
        venueId: "",
      });
      navigate("/payment");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Error Occurred!";
      toast({
        title: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <div className="manage-date">
      <div className="calendar">
        <div className="calendar-header">
          <button
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1,
                  1
                )
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
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1,
                  1
                )
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
      <div className="contact">
        <form onSubmit={handleSubmit} className="booking-form">
          <h2 style={{ color: "#ff6347" }}>Book Venue</h2>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="c">Contact:</label>
            <input
              type="text"
              id="c"
              name="phoneNumber"
              value={formData.phoneNumber}
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
          <div className="form-group">
            <label htmlFor="event">Event Type</label>
            <select
              id="event"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="">Choose event type</option>
              <option value="Birthday Event">Birthday Event</option>
              <option value="Charity Event">Charity Event</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Cultural Event">Cultural Event</option>
              <option value="Education Event">Education Event</option>
              <option value="Public Event">Public Event</option>
              <option value="Wedding">Wedding</option>
            </select>
          </div>
          <button type="submit" className="manage" disabled={!formData.date}>
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageDate;
