import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./service.css";

const Service = () => {
  const navigate = useNavigate();
  const submit1 = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="ser-img">
        <h3>Welcome to</h3>
        <h1>Event Services</h1>
      </div>
      <div className="event-services">
        <div className="service-section fade-in">
          <h2>Event Management Services</h2>
          <p>
            As a leading provider of event management services, we understand
            the intricacies involved in organising and executing a flawless
            event. Our experienced event managers will work closely with you to
            understand your vision, goals, and requirements, ensuring every
            aspect of your event is meticulously planned and executed to
            perfection. From venue selection and logistics coordination to
            vendor management and budgeting, we'll take care of every detail,
            allowing you to enjoy a stress-free and seamless event experience.
          </p>
        </div>
        <div className="service-section fade-in">
          <h2>Event Planning Services</h2>
          <p>
            At Events by PartyPerfect, we pride ourselves on our comprehensive
            event planning services. Our skilled planners will collaborate with
            you to create a personalised event blueprint that captures your
            vision and exceeds your expectations. Whether you're envisioning an
            elegant gala, a themed party, or a charity fundraiser, our team will
            curate a detailed plan, encompassing every element of your event,
            including décor, entertainment, catering, and more. Our goal is to
            transform your ideas into a reality and deliver a truly memorable
            experience for you and your guests.
          </p>
        </div>
        <div className="service-section fade-in">
          <h2>Event Production Services</h2>
          <p>
            When it comes to event production, we excel in delivering top-tier
            services that leave a lasting impression. Our expert production team
            possesses the technical expertise and creative flair needed to bring
            your event to life. From staging and lighting design to audio-visual
            production and special effects, we utilise cutting-edge technology
            and innovative techniques to create a visually stunning and
            immersive atmosphere. We ensure that every aspect of your event
            production is executed flawlessly, leaving a lasting impact on your
            guests.
          </p>
        </div>
        <div className="service-section fade-in">
          <h2>Corporate Event Services</h2>
          <p>
            Events by Party perfect specialises in providing corporate event
            services that align with your business objectives and reinforce your
            brand image. Whether you're planning a product launch, a conference,
            or a team-building event, we understand the unique requirements of
            corporate gatherings. Our dedicated team will work closely with you
            to design and execute an event that engages your audience,
            strengthens relationships, and promotes your company's message. With
            our meticulous planning and attention to detail, you can trust us to
            deliver a seamless corporate event experience that reflects your
            organization's professionalism and success.
          </p>
        </div>
      </div>

      <div className="service-heading">
        <h1>Our Services</h1>
        <div className="border"></div>
      </div>
      <div className="whole">
        <div className="card-container">
          <div className="card">
            <img src="./service1.png" alt="Event" className="card-image" />
            <h2 className="card-title">Birthday Parties</h2>
            <p className="card-description">
              Celebrate your special day with our expert planning services,
              covering everything from decorations to catering for a stress-free
              and unforgettable event.
            </p>
            <button
              className="card-button"
              onClick={() => submit1("/birthday")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service5.png" alt="Event" className="card-image" />
            <h2 className="card-title">Corporate Events</h2>
            <p className="card-description">
              Our corporate events service offers tailored planning and seamless
              execution for conferences, seminars, and corporate gatherings,
              ensuring a professional and memorable experience.
            </p>
            <button
              className="card-button"
              onClick={() => submit1("/corporate")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service3.png" alt="Event" className="card-image" />
            <h2 className="card-title">Weddings</h2>
            <p className="card-description">
              Expertly planned weddings with personalized touches, seamless
              coordination, and unforgettable moments, ensuring your special day
              is stress-free and extraordinary.
            </p>
            <button className="card-button" onClick={() => submit1("/wedding")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service4.png" alt="Event" className="card-image" />
            <h2 className="card-title">Public Events</h2>
            <p className="card-description">
              Expertly planned weddings with personalized touches, seamless
              coordination, and unforgettable moments, ensuring your special day
              is stress-free and extraordinary.
            </p>
            <button
              className="card-button"
              onClick={() => submit1("/publicevents")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="whole">
        <div className="card-container">
          <div className="card">
            <img src="./service6.png" alt="Event" className="card-image" />
            <h2 className="card-title">Educational Events</h2>
            <p className="card-description">
              Educational Events: Expertly organized conferences, workshops, and
              seminars that inspire learning, foster networking, and promote
              knowledge sharing in a dynamic environment.
            </p>
            <button
              className="card-button"
              onClick={() => submit1("/education")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service7.png" alt="Event" className="card-image" />
            <h2 className="card-title">Charity Events</h2>
            <p className="card-description">
              Organize impactful charity events with us, from concept to
              execution, ensuring seamless planning, engaging experiences, and
              maximum fundraising success for your cause.
            </p>
            <button className="card-button" onClick={() => submit1("/charity")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service8.png" alt="Event" className="card-image" />
            <h2 className="card-title">Sports Events</h2>
            <p className="card-description">
              Organize seamless sports events with our expert management
              services, offering coordination, logistics, and support for
              tournaments, matches, and athletic competitions.
            </p>
            <button className="card-button" onClick={() => submit1("/sports")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="./service10.png" alt="Event" className="card-image" />
            <h2 className="card-title">Cultural Events</h2>
            <p className="card-description">
              Organizing vibrant cultural events that celebrate diversity,
              heritage, and traditions through music, dance, art, and
              performances, creating unforgettable experiences for all
              attendees.
            </p>
            <button
              className="card-button"
              onClick={() => submit1("/cultural")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service;
