import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./sports.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const Sports = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />
      <div className="sports-events-container5">
        <header className="sports-events-header5">
          <h1 className="heading15">Sports Events</h1>
        </header>

        <div className="sports-events-content5">
          <div className="content-section15">
            <h2 className="heading25">What We Do</h2>
            <p className="paragraph15">
              At PartyPerfect, we excel in organizing exciting sports events
              that cater to various interests and skill levels. Our team handles
              every aspect, from venue selection and event planning to
              coordination and execution, ensuring a seamless experience for
              participants and spectators.
            </p>
            <p className="paragraph15">
              We understand that each sports event is unique, whether it’s a
              local tournament or a major competition. Our goal is to create a
              memorable and engaging experience, focusing on every detail to
              ensure a successful event.
            </p>
            <p className="paragraph15">
              With our expertise, we manage logistics, scheduling, and on-site
              operations, allowing you to enjoy the event while we take care of
              the rest.
            </p>
          </div>
          <div className="content-section25">
            <h2 className="heading25">How We Do It</h2>
            <p className="paragraph25">
              Our approach starts with understanding your vision for the sports
              event. We then develop a comprehensive plan that includes venue
              arrangements, equipment setup, and event management. Our team
              ensures everything runs smoothly from start to finish.
            </p>
            <p className="paragraph25">
              Initial consultations help us capture your event goals and
              preferences. We handle all logistical details, including vendor
              coordination, setup, and on-site management, ensuring a
              hassle-free experience for you.
            </p>
            <p className="paragraph25">
              On the event day, our team oversees every detail, ensuring a
              seamless execution so you can focus on enjoying the event with
              participants and attendees.
            </p>
          </div>
          <div className="content-section35">
            <h2 className="heading25">Additional Features</h2>
            <p className="paragraph35">
              We offer various additional features to enhance your sports event,
              such as live scoreboards, athlete tracking, and interactive fan
              zones. Our goal is to provide a complete experience that exceeds
              your expectations.
            </p>
            <p className="paragraph35">
              Our additional features include custom event branding, live
              streaming options, and on-site entertainment to keep participants
              and spectators engaged throughout the event.
            </p>
            <p className="paragraph35">
              Whether it’s a community fun run or a professional sports
              competition, we offer services that make your event stand out and
              provide an exceptional experience for everyone involved.
            </p>
          </div>
        </div>

        <div className="recent-works5">
          <h2 className="recent-works-heading5">Our Recent Works</h2>
          <div className="recent-works-gallery5">
            <div className="recent-work-item5">
              <img
                src="./sport1.png"
                alt="Recent Work 1"
                className="recent-work-image5"
              />
              <div className="recent-work-text5">
                <h3>Work Title 1</h3>
                <h1>Description of recent work 1</h1>
              </div>
            </div>
            <div className="recent-work-item5">
              <img
                src="./sport2.png"
                alt="Recent Work 2"
                className="recent-work-image5"
              />
              <div className="recent-work-text5">
                <h3>Work Title 2</h3>
                <h1>Description of recent work 2</h1>
              </div>
            </div>
            <div className="recent-work-item5">
              <img
                src="./sports.png"
                alt="Recent Work 3"
                className="recent-work-image5"
              />
              <div className="recent-work-text5">
                <h3>Work Title 3</h3>
                <h1>Description of recent work 3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="sports-events-pricing5">
          <div className="service-heading5">
            <h2 className="pricing-heading5">Pricing Packages</h2>
            <div className="brr5"></div>
          </div>
          <div className="pricing-cards5">
            <div className="pricing-card15">
              <h3 className="card-title5">Basic Package</h3>
              <p className="card-description5">
                Includes venue setup, basic equipment, and coordination.
              </p>
              <ul className="ulist15">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Equipment</li>
                <li>✅ Event Coordination</li>
                <li>✅ 4 Hours of Coverage</li>
              </ul>
              <p className="card-price5">$700</p>
              <button className="pay-btn" onClick={() => handlePay(700)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card25">
              <h3 className="card-title5">Standard Package</h3>
              <p className="card-description5">
                Includes all features of the Basic Package plus additional
                services and advanced equipment.
              </p>
              <ul className="ulist15">
                <li>✅ Venue Setup</li>
                <li>✅ Advanced Equipment</li>
                <li>✅ Full Event Coordination</li>
                <li>✅ 6 Hours of Coverage</li>
                <li>✅ Live Scoreboards</li>
              </ul>
              <p className="card-price5">$1000</p>
              <button className="pay-btn" onClick={() => handlePay(1000)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card35">
              <h3 className="card-title5">Premium Package</h3>
              <p className="card-description5">
                Includes all features of the Standard Package plus exclusive
                amenities and custom services.
              </p>
              <ul className="ulist15">
                <li>✅ Venue Setup</li>
                <li>✅ Custom Equipment</li>
                <li>✅ Premium Coordination</li>
                <li>✅ 8 Hours of Coverage</li>
                <li>✅ Live Streaming</li>
                <li>✅ Event Branding</li>
              </ul>
              <p className="card-price5">$1500</p>
              <button className="pay-btn" onClick={() => handlePay(1500)}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sports;
