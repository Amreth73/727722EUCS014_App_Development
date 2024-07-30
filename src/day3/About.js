import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./about.css";
import Navbar from "./Navbar";

const About = () => {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);

  const handleMouseEnter = (setDropdown) => {
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    setDropdown(false);
  };

  const navigate = useNavigate();
  const submit1 = (path) => {
    navigate(path);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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

    const elements = document.querySelectorAll(
      ".translate-text, .how-it-works h2, .how-it-works h3, .how-it-works p"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="top">
      {/* <div id="btns">
        <div>
          <h2>Perfect party</h2>
        </div>
        <div className="nav-btn">
          <div>
            <button className="b1" onClick={() => submit1("/")}>
              Home
            </button>
          </div>
          <div>
            <button className="b1" onClick={() => submit1("/about")}>
              About
            </button>
          </div>
          <div
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter(setServiceDropdown)}
            onMouseLeave={() => handleMouseLeave(setServiceDropdown)}
          >
            <button className="b1" onClick={() => submit1("/service")}>
              Service
            </button>
            {serviceDropdown && (
              <div className="dropdown">
                <button onClick={() => submit1("/service/subservice1")}>
                  Subservice 1
                </button>
                <button onClick={() => submit1("/service/subservice2")}>
                  Subservice 2
                </button>
                <button onClick={() => submit1("/service/subservice3")}>
                  Subservice 3
                </button>
              </div>
            )}
          </div>
          <div
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter(setBlogDropdown)}
            onMouseLeave={() => handleMouseLeave(setBlogDropdown)}
          >
            <button className="b1" onClick={() => submit1("/blog")}>
              Blog
            </button>
            {blogDropdown && (
              <div className="dropdown">
                <button onClick={() => submit1("/blog/subblog1")}>
                  Subblog 1
                </button>
                <button onClick={() => submit1("/blog/subblog2")}>
                  Subblog 2
                </button>
                <button onClick={() => submit1("/blog/subblog3")}>
                  Subblog 3
                </button>
              </div>
            )}
          </div>
          <div>
            <button className="b1" onClick={() => submit1("/contact")}>
              Contact
            </button>
          </div>
        </div>
        <div className="auth">
          <div onClick={() => submit1("/home")}>
            <button className="b1">Register</button>
          </div>
          <div>
            <button className="b1 b2">Log out</button>
          </div>
        </div>
      </div> */}
      <Navbar />
      <div>
        <div className="main-img">
          <h3 className="translate-text">About</h3>
          <h1 className="translate-text">PartyPerfect Hospitality</h1>
        </div>
        <div className="about-content">
          <p className="translate-text">
            Welcome to PartyPerfect Hospitality! We specialize in creating
            unforgettable experiences for your special occasions. From intimate
            gatherings to grand celebrations, our team is dedicated to bringing
            your vision to life.
          </p>
          <p className="translate-text">
            Our services include event planning, catering, decoration, and more.
            We work closely with you to understand your preferences and ensure
            every detail is perfect.
          </p>
          <p className="translate-text">
            With years of experience in the industry, our expert team is
            committed to providing exceptional service and creating memories
            that last a lifetime.
          </p>
          <p className="translate-text">
            Contact us today to start planning your perfect party!
          </p>
          <p className="translate-text">
            At PartyPerfect Hospitality, we believe in the power of personalized
            service. Our goal is to make every event unique and tailored to your
            specific needs. From the initial consultation to the final
            execution, we are with you every step of the way. Let's make your
            next event a PartyPerfect event!
          </p>
        </div>
      </div>

      <div className="multi gr">
        <h1 style={{ color: "white" }}>Our Strengths</h1>
        <div className="imgs">
          <img src="./str1.png" alt="none" className="i" />
          <img src="./str2.png" alt="none" className="i" />
          <img src="./str3.png" alt="none" className="i" />
          <img src="./str4.png" alt="none" className="i" />
        </div>
      </div>
      <div className="br">
        <div className="brr"></div>
      </div>
      <div className="multi">
        <div className="imgs dis">
          <img src="./dis1.png" alt="none" className="i" />
          <img src="./dis2.png" alt="none" className="i" />
          <img src="./dis3.png" alt="none" className="i" />
          <img src="./dis4.png" alt="none" className="i" />
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <h3>LEARN: We want to get to know you</h3>
        <p>
          What is your business about? What are your challenges? What are the
          issues that your members or clients are dealing with? By thoroughly
          understanding your company’s leadership culture, how your organization
          operates and your long term strategic plans, we become a part of your
          team. Our model works best when we can become more than the “hired
          help” and can become strategic event management partners, so the first
          step for us is about getting to know you and your business.
        </p>

        <h3>BUILD: Let us do the heavy lifting.</h3>
        <p>
          Because we have taken the time to learn about your business and the
          goals of your event, you can rest assured that the event will be on
          target and in line with your objectives. Leave the planning and
          management to us. Let us look after the details and the heavy lifting
          that comes with planning a professional event. From our network of
          preferred vendors, industry connections and years of experience, we
          can deliver a full service event management experience. The Spark team
          is well equipped to deliver a world class event, each and every time.
          Your job is to run your business; our job is to run your event.
        </p>

        <h3>DELIVER: Sit back. Relax.</h3>
        <p>
          Finally, this is where our event management expertise comes into play.
          At our core, we love events. We love the on-site details, production
          plans, schedules, deadlines and to do lists that come along with
          managing an event. From meticulous management of facility details to
          AV, catering and on-site coordination, we ensure every detail is
          looked after. Managing your event using a strategic overall plan and a
          methodical management approach allows you to rest easy. Knowing that
          every last detail is looked after will allow you to focus on your
          attendees and stakeholders at the event. Let us look after the rest.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
