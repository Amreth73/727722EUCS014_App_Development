import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./cultural.css";
import { useNavigate } from "react-router-dom";
const Cultural = () => {
  const navigate = useNavigate();
  const handlePay = (path) => {
    navigate("/payment");
  };
  return (
    <div>
      <Navbar />
      <div className="corporate-events-container">
        <header className="corporate-events-header">
          <h1 className="heading1">Corporate Events</h1>
        </header>

        <div className="corporate-events-content">
          <div className="content-section1">
            <h2 className="heading2">What We Do</h2>
            <p className="paragraph1">
              At PartyPerfect, we specialize in organizing exceptional corporate
              events that cater to your business needs. Our team manages
              everything from venue selection and branding to entertainment and
              catering, ensuring a seamless event experience.
            </p>
            <p className="paragraph1">
              We understand that corporate events are crucial for networking and
              business success. Whether it's a conference, seminar, or company
              retreat, we tailor our services to meet your specific requirements
              and make your event impactful.
            </p>
            <p className="paragraph1">
              Our dedicated team is committed to delivering outstanding service
              and meticulous attention to detail. We collaborate closely with
              you to ensure every element of the event is flawlessly executed,
              allowing you to focus on your objectives.
            </p>
          </div>
          <div className="content-section2">
            <h2 className="heading2">How We Do It</h2>
            <p className="paragraph2">
              Our approach begins with a thorough understanding of your
              corporate goals and preferences. We then create a customized plan
              that includes all the essential elements to bring your event to
              fruition. Our experienced coordinators handle every detail for a
              hassle-free experience.
            </p>
            <p className="paragraph2">
              We initiate the process with a detailed consultation to grasp your
              expectations and tailor our services accordingly. From there, we
              manage all aspects, including vendor coordination, timeline
              management, and on-site logistics.
            </p>
            <p className="paragraph2">
              On the event day, our team is on-site to ensure everything
              operates smoothly. We oversee the setup, manage the schedule, and
              address any last-minute details, so you can concentrate on
              achieving your event goals.
            </p>
          </div>
          <div className="content-section3">
            <h2 className="heading2">Additional Features</h2>
            <p className="paragraph3">
              We offer a variety of additional features to enhance your
              corporate event, including branded decorations, interactive
              sessions, and audiovisual equipment. Our aim is to ensure that
              every detail aligns with your business objectives.
            </p>
            <p className="paragraph3">
              Additional features include keynote speakers, live streaming
              options, and custom promotional materials. We strive to
              incorporate unique elements that will elevate your event and
              engage your audience effectively.
            </p>
            <p className="paragraph3">
              Whether you need a sophisticated setup, cutting-edge technology,
              or specialized catering, we provide creative solutions that match
              your corporate needs. From custom event designs to comprehensive
              support, we offer a range of services to ensure your event's
              success.
            </p>
          </div>
        </div>

        <div className="recent-works">
          <h2 className="recent-works-heading">Our Recent Works</h2>
          <div className="recent-works-gallery">
            <div className="recent-work-item">
              <img
                src="./recent10.png"
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
                src="./recent11.png"
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
                src="./recent12.png"
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

        <div className="corporate-events-pricing">
          <div className="service-heading">
            <h2 className="pricing-heading">Pricing Packages</h2>
            <div className="brr"></div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue setup, basic branding, and standard catering.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Branding</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Audiovisual Support</li>
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
                branding and a live streaming option.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Enhanced Branding</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Audiovisual Support</li>
                <li>✅ Live Streaming</li>
              </ul>
              <p className="card-price">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card3">
              <h3 className="card-title">Premium Package</h3>
              <p className="card-description">
                Includes all features of the Standard Package plus a keynote
                speaker and advanced technology support.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Premium Branding</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Audiovisual Support</li>
                <li>✅ Keynote Speaker</li>
                <li>✅ Advanced Technology Support</li>
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

export default Cultural;
