import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const submit1 = (path) => {
    navigate(path);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./dine7.png",
    "./dine1.png",
    "./dine2.png",
    "./dine4.png",
    "./dine5.png",
    "./dine8.jpg",
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
            entry.target.classList.add("animate-slideIn");
          } else {
            entry.target.classList.remove("animate-slideIn");
          }
        });
      },
      { threshold: 0.2 }
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
    <div id="whole-home" style={{ color: "yellow" }}>
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
        <div ref={(el) => (sectionsRef.current[0] = el)} className="intro">
          <h2>Welcome to Perfect Party</h2>
          <div className="con-img">
            <p
              ref={textRef}
              className={`animated-text ${isVisible ? "animate" : ""}`}
            >
              At Perfect Party, we turn your dream events into reality. Whether
              it’s a birthday celebration, a wedding, a corporate event, or any
              other special occasion, our dedicated team is here to make it
              unforgettable. We pride ourselves on crafting unique and
              personalized experiences tailored to your vision. From the moment
              you contact us, we dive into understanding your goals and
              preferences, ensuring that every detail is meticulously planned
              and executed. Our expertise spans across various aspects of event
              management, including venue selection, decoration, catering, and
              entertainment. With a focus on creativity and precision, we
              transform your ideas into stunning realities, creating events that
              captivate and impress.
            </p>
            <img
              src="./home1.png"
              ref={imageRef}
              className={`animated-image ${isVisible ? "animate" : ""}`}
              alt="Event"
            />
          </div>
          <div className="con-img">
            <img
              src="./home2.png"
              ref={imageRef}
              className={`animated-image ${isVisible ? "animate" : ""}`}
              alt="Event"
            />
            <p
              ref={textRef}
              className={`animated-text ${isVisible ? "animate" : ""}`}
            >
              We understand that every event is a reflection of your personality
              and desires. That's why we work closely with you to understand
              your needs and preferences, ensuring that every aspect of your
              event is tailored to your vision. From the initial planning stages
              to the final execution, our team is committed to delivering a
              seamless and stress-free experience. We offer a comprehensive
              range of services, including venue selection, decoration,
              catering, and entertainment, all meticulously designed to suit
              your requirements and exceed your expectations. Our expertise
              extends to handling all the intricate details, allowing you to
              relax and enjoy your event, knowing that everything is being
              managed with precision and care. With our dedication to excellence
              and personalized service.
            </p>
          </div>
          <div className="con-img">
            <p
              ref={textRef}
              className={`animated-text ${isVisible ? "animate" : ""}`}
            >
              Here's an expanded version of the paragraph: Our team of
              experienced professionals is passionate about bringing your ideas
              to life. With years of experience in the event management
              industry, we have the expertise to handle events of all sizes and
              complexities. Whether you’re planning an intimate gathering, a
              grand celebration, or an elaborate corporate function, we ensure
              that every aspect is meticulously organized and executed with
              precision. Our attention to detail and commitment to excellence
              guarantee that every event is not only smoothly run but also
              unforgettable, leaving a lasting impression on your guests. From
              the initial concept to the final execution.
            </p>
            <img
              src="./home3.png"
              ref={imageRef}
              className={`animated-image ${isVisible ? "animate" : ""}`}
              alt="Event"
            />
          </div>
          <div className="con-img">
            <img
              src="./home4.png"
              ref={imageRef}
              className={`animated-image ${isVisible ? "animate" : ""}`}
              alt="Event"
            />
            <p
              ref={textRef}
              className={`animated-text ${isVisible ? "animate" : ""}`}
            >
              Here's an expanded version of the paragraph: Our team of
              experienced professionals is passionate about bringing your ideas
              to life. With years of experience in the event management
              industry, we have the expertise to handle events of all sizes and
              complexities. Whether you’re planning an intimate gathering, a
              grand celebration, or an elaborate corporate function, we ensure
              that every aspect is meticulously organized and executed with
              precision. Our attention to detail and commitment to excellence
              guarantee that every event is not only smoothly run but also
              unforgettable, leaving a lasting impression on your guests. From
              the initial concept to the final execution.
            </p>
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="services">
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
        </div>
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
        <div
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
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)} className="cta">
          <h2>Ready to Plan Your Perfect Event?</h2>
          <p>
            Contact us today to start planning your unforgettable event with
            Perfect Party.
          </p>
          <button onClick={() => submit1("/contact")}>Get in Touch</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
