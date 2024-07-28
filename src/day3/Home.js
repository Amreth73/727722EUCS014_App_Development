import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  const submit1 = (path) => {
    navigate(path);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./dine1.png",
    "./dine2.png",
    "./dine3.png",
    "./dine4.png",
    "./dine5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div
          className="slider"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        >
          <div className="overlay">
            <h1>Perfect Party</h1>
            <p>Contact us at: info@perfectparty.com</p>
            <p>Phone: +91 9865236003</p>
          </div>
        </div>
      </div>
      <div className="content">
        <section ref={(el) => (sectionsRef.current[0] = el)} className="intro">
          <h2>Welcome to Perfect Party</h2>
          <p>
            At Perfect Party, we turn your dream events into reality. Whether
            it’s a birthday celebration, a wedding, a corporate event, or any
            other special occasion, our dedicated team is here to make it
            unforgettable.
          </p>
        </section>
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="services"
        >
          <h2>Our Services</h2>
          <ul>
            <li>
              <h3>Event Planning</h3>
              <p>
                From concept to execution, we handle all aspects of event
                planning to ensure your event is seamless and stress-free.
              </p>
            </li>
            <li>
              <h3>Catering</h3>
              <p>
                Our gourmet catering services offer a variety of cuisines to
                delight your guests’ palates.
              </p>
            </li>
            <li>
              <h3>Decorations</h3>
              <p>
                Transform your venue with our bespoke decoration services,
                tailored to match your theme and preferences.
              </p>
            </li>
            <li>
              <h3>Entertainment</h3>
              <p>
                From live bands to DJs, we provide top-notch entertainment to
                keep your guests engaged and entertained.
              </p>
            </li>
            <li>
              <h3>Photography and Videography</h3>
              <p>
                Capture the moments that matter with our professional
                photography and videography services.
              </p>
            </li>
          </ul>
        </section>
        <div className="background-container">
          <div className="overlay1">
            <h1>FIND THE PERFECT VENUE</h1>
            <p id="mass">
              Check out our collection of iconic venues available for your
              event.
            </p>
            <button id="search">Search Venues</button>
          </div>
        </div>
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="testimonials"
        >
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <p>
              “Perfect Party made our wedding day truly special. Their attention
              to detail and dedication to making everything perfect was
              incredible.”
            </p>
            <p>- Sarah & John</p>
          </div>
          <div className="testimonial">
            <p>
              “Our corporate event was a huge success thanks to the team at
              Perfect Party. They handled everything professionally and with a
              smile.”
            </p>
            <p>- Mark, CEO of XYZ Corp</p>
          </div>
        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} className="cta">
          <h2>Ready to Plan Your Perfect Event?</h2>
          <p>
            Contact us today to start planning your unforgettable event with
            Perfect Party.
          </p>
          <button onClick={() => submit1("/contact")}>Get in Touch</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
