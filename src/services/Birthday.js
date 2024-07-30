import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./birthday.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";

const Birthday = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };
  return (
    <div>
      <Navbar />

      <div className="birthday-parties-container">
        <header className="birthday-parties-header">
          <h1 className="heading1">Birthday Parties</h1>
        </header>

        <div className="birthday-parties-content">
          <div className="content-section1">
            <h2 className="heading2">What We Do</h2>
            <p className="paragraph1">
              At PartyPerfect, we specialize in creating memorable birthday
              parties that reflect the personality and preferences of the guest
              of honor. Our team handles everything from theme selection and
              venue decoration to entertainment and catering, ensuring a
              flawless event experience.
            </p>
            <p className="paragraph1">
              We believe that every birthday is a special occasion and should be
              celebrated with joy and excitement. From intimate gatherings to
              grand celebrations, we cater to all sizes and styles of events.
              Our goal is to bring your vision to life and make your celebration
              truly unforgettable.
            </p>
            <p className="paragraph1">
              Our experienced team is dedicated to providing exceptional service
              and attention to detail. We work closely with you to ensure that
              every aspect of the party is perfectly planned and executed,
              leaving you free to enjoy the event with your guests.
            </p>
          </div>
          <div className="content-section2">
            <h2 className="heading2">How We Do It</h2>
            <p className="paragraph2">
              Our process begins with understanding your vision and preferences.
              We then create a customized plan that includes all the necessary
              elements to bring your party to life. Our experienced coordinators
              manage every detail, providing a stress-free experience from start
              to finish.
            </p>
            <p className="paragraph2">
              We start by discussing your ideas and preferences during an
              initial consultation. This helps us to understand your
              expectations and plan accordingly. From there, we handle all the
              logistics, including vendor coordination, timeline management, and
              on-site setup.
            </p>
            <p className="paragraph2">
              On the day of the event, our team is on hand to ensure everything
              runs smoothly. We oversee the setup, manage the schedule, and
              address any last-minute details so you can focus on enjoying the
              celebration with your loved ones.
            </p>
          </div>
          <div className="content-section3">
            <h2 className="heading2">Additional Features</h2>
            <p className="paragraph3">
              We offer a range of additional features to enhance your party,
              including customized decorations, themed entertainment, photo
              booths, and more. Our goal is to ensure every detail is perfect
              and that your party is as unique as you are.
            </p>
            <p className="paragraph3">
              Our additional features include interactive games, live music, and
              customized party favors that align with your party theme. We
              strive to add special touches that make your event memorable and
              enjoyable for all your guests.
            </p>
            <p className="paragraph3">
              Whether you're looking for a whimsical, elegant, or modern theme,
              we can provide the creative elements that will make your party
              stand out. From personalized cake designs to custom entertainment
              options, we offer a variety of services to meet your needs.
            </p>
          </div>
        </div>

        <div className="recent-works">
          <h2 className="recent-works-heading">Our Recent Works</h2>
          <div className="recent-works-gallery">
            <div className="recent-work-item">
              <img
                src="./recent1.png"
                alt="Recent Work 1"
                className="recent-work-image"
              />
              <div className="recent-work-text">
                <h3>Work Title 1</h3>
                <h1>Description of recent work 1</h1>
              </div>
            </div>
            <div className="recent-work-item">
              <img
                src="./recent2.png"
                alt="Recent Work 2"
                className="recent-work-image"
              />
              <div className="recent-work-text">
                <h3>Work Title 2</h3>
                <h1>Description of recent work 2</h1>
              </div>
            </div>
            <div className="recent-work-item">
              <img
                src="./recen3.png"
                alt="Recent Work 3"
                className="recent-work-image"
              />
              <div className="recent-work-text">
                <h3>Work Title 3</h3>
                <h1>Description of recent work 3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="birthday-parties-pricing">
          <div className="service-heading">
            <h2 className="pricing-heading">Pricing Packages</h2>
            <div className="brr"></div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue decoration, basic catering, and entertainment.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Basic decorations</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Entertainment</li>
              </ul>
              <p className="card-price">$500</p>
              <button className="pay-btn" onClick={() => handlePay(500)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card2">
              <h3 className="card-title">Standard Package</h3>
              <p className="card-description">
                Includes all features of the Basic Package plus additional
                decorations and a photo booth.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Custom Decorations</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Entertainment</li>
                <li>✅ Photography</li>
              </ul>
              <p className="card-price">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card3">
              <h3 className="card-title">Premium Package</h3>
              <p className="card-description">
                Includes all features of the Standard Package plus a themed
                entertainment show and gourmet catering.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Themed Decorations</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Entertainment</li>
                <li>✅ Photography & Videography</li>
                <li>✅ Custom Party Favors</li>
              </ul>
              <p className="card-price" style={{ marginBottom: "20px" }}>
                $1200
              </p>
              <button className="pay-btn" onClick={() => handlePay(1200)}>
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

export default Birthday;
