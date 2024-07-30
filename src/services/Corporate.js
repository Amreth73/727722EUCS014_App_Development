import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./corporate.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const Corporate = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />
      <div className="corporate-events-container3">
        <header className="corporate-events-header3">
          <h1 className="heading13">Corporate Events</h1>
        </header>

        <div className="corporate-events-content3">
          <div className="content-section13">
            <h2 className="heading23">What We Do</h2>
            <p className="paragraph13">
              At PartyPerfect, we excel in organizing exceptional corporate
              events that align with your company's vision and goals. From
              planning and logistics to execution, our team ensures every detail
              is meticulously handled to deliver a successful and professional
              event.
            </p>
            <p className="paragraph13">
              Whether you're hosting a conference, seminar, or team-building
              event, we tailor our services to meet your needs. Our focus is on
              creating a seamless experience that reflects your company's values
              and fosters positive engagement among attendees.
            </p>
            <p className="paragraph13">
              Our dedicated team is committed to providing high-quality service
              and support, ensuring that every aspect of your corporate event is
              executed flawlessly.
            </p>
          </div>
          <div className="content-section23">
            <h2 className="heading23">How We Do It</h2>
            <p className="paragraph23">
              Our process begins with understanding your event objectives and
              requirements. We then develop a customized plan that includes all
              necessary elements for a successful event. Our experienced
              coordinators handle all logistics, ensuring a smooth and
              stress-free experience.
            </p>
            <p className="paragraph23">
              We start with an initial consultation to discuss your goals and
              preferences. Based on this, we manage vendor coordination,
              timeline planning, and on-site setup to ensure everything runs
              smoothly.
            </p>
            <p className="paragraph23">
              On the event day, our team oversees the setup, manages the
              schedule, and addresses any last-minute details so you can focus
              on your event’s success.
            </p>
          </div>
          <div className="content-section33">
            <h2 className="heading23">Additional Features</h2>
            <p className="paragraph33">
              We offer a range of additional features to enhance your corporate
              event, including customized branding, interactive sessions, and
              professional entertainment. Our goal is to ensure every detail is
              perfect and your event is impactful.
            </p>
            <p className="paragraph33">
              Additional features include keynote speakers, interactive
              workshops, and customized event materials. We aim to provide
              elements that make your event memorable and engaging for all
              participants.
            </p>
            <p className="paragraph33">
              Whether you need high-tech presentations or personalized event
              activities, we offer a variety of services to meet your
              requirements and create a successful event.
            </p>
          </div>
        </div>

        <div className="recent-works3">
          <h2 className="recent-works-heading3">Our Recent Works</h2>
          <div className="recent-works-gallery3">
            <div className="recent-work-item3">
              <img
                src="./recent1.png"
                alt="Recent Work 1"
                className="recent-work-image3"
              />
              <div className="recent-work-text3">
                <h3>Work Title 1</h3>
                <h1>Description of recent work 1</h1>
              </div>
            </div>
            <div className="recent-work-item3">
              <img
                src="./recent2.png"
                alt="Recent Work 2"
                className="recent-work-image3"
              />
              <div className="recent-work-text3">
                <h3>Work Title 2</h3>
                <h1>Description of recent work 2</h1>
              </div>
            </div>
            <div className="recent-work-item3">
              <img
                src="./recent3.png"
                alt="Recent Work 3"
                className="recent-work-image3"
              />
              <div className="recent-work-text3">
                <h3>Work Title 3</h3>
                <h1>Description of recent work 3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="corporate-events-pricing3">
          <div className="service-heading3">
            <h2 className="pricing-heading3">Pricing Packages</h2>
            <div className="brr3"></div>
          </div>
          <div className="pricing-cards3">
            <div className="pricing-card13">
              <h3 className="card-title3">Basic Package</h3>
              <p className="card-description3">
                Includes venue decoration, basic catering, and entertainment.
              </p>
              <ul className="ulist3">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Decorations</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Entertainment</li>
              </ul>
              <p className="card-price3">$500</p>
              <button className="pay-btn" onClick={() => handlePay(500)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card23">
              <h3 className="card-title3">Standard Package</h3>
              <p className="card-description3">
                Includes all features of the Basic Package plus additional
                decorations and a photo booth.
              </p>
              <ul className="ulist3">
                <li>✅ Venue Setup</li>
                <li>✅ Custom Decorations</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Entertainment</li>
                <li>✅ Photography</li>
              </ul>
              <p className="card-price3">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card33">
              <h3 className="card-title3">Premium Package</h3>
              <p className="card-description3">
                Includes all features of the Standard Package plus a themed
                entertainment show and gourmet catering.
              </p>
              <ul className="ulist3">
                <li>✅ Venue Setup</li>
                <li>✅ Themed Decorations</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Entertainment</li>
                <li>✅ Photography & Videography</li>
                <li>✅ Custom Party Favors</li>
              </ul>
              <p className="card-price3" style={{ marginBottom: "20px" }}>
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

export default Corporate;
