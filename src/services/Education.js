import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./education.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const Education = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };
  return (
    <div>
      <Navbar />
      <div className="education-events-container3">
        <header className="education-events-header3">
          <h1 className="heading13">Education Events</h1>
        </header>

        <div className="education-events-content3">
          <div className="content-section13">
            <h2 className="heading23">What We Do</h2>
            <p className="paragraph13">
              At PartyPerfect, we specialize in organizing educational events
              that are engaging and informative. Our team handles everything
              from venue setup and interactive activities to expert speakers and
              catering, ensuring a successful and enriching experience for all
              attendees.
            </p>
            <p className="paragraph13">
              We understand the importance of creating a conducive learning
              environment. Whether it's a workshop, seminar, or conference, we
              cater to all types of educational gatherings, providing the
              necessary resources and support to make your event impactful.
            </p>
            <p className="paragraph13">
              Our dedicated team ensures that every detail is meticulously
              planned and executed, allowing you to focus on delivering valuable
              content while we take care of the logistics.
            </p>
          </div>
          <div className="content-section23">
            <h2 className="heading23">How We Do It</h2>
            <p className="paragraph23">
              We start by understanding your educational goals and objectives.
              Based on this, we create a tailored plan that includes all the
              necessary components to make your event a success. Our experienced
              coordinators manage every aspect, ensuring a smooth and efficient
              execution.
            </p>
            <p className="paragraph23">
              Our process begins with an initial consultation to discuss your
              needs and expectations. We then handle all logistics, including
              venue coordination, schedule management, and setup to create an
              optimal learning environment.
            </p>
            <p className="paragraph23">
              On the event day, our team ensures everything runs smoothly. We
              oversee the setup, manage the schedule, and address any issues
              that arise, so you can focus on delivering an impactful
              educational experience.
            </p>
          </div>
          <div className="content-section33">
            <h2 className="heading23">Additional Features</h2>
            <p className="paragraph33">
              We offer a range of additional features to enhance your
              educational event, including interactive workshops, expert guest
              speakers, and multimedia presentations. Our goal is to provide a
              comprehensive experience that maximizes learning and engagement.
            </p>
            <p className="paragraph33">
              Additional features include custom presentations, networking
              opportunities, and live streaming options. We aim to add value and
              make your event memorable for all participants.
            </p>
            <p className="paragraph33">
              Whether you need hands-on training sessions, panel discussions, or
              specialized equipment, we can provide the necessary resources to
              support your educational objectives and create a successful event.
            </p>
          </div>
        </div>

        <div className="recent-works3">
          <h2 className="recent-works-heading3">Our Recent Works</h2>
          <div className="recent-works-gallery3">
            <div className="recent-work-item3">
              <img
                src="./recent13.png"
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
                src="./recent14.png"
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
                src="./recent15.png"
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

        <div className="education-events-pricing3">
          <div className="service-heading3">
            <h2 className="pricing-heading3">Pricing Packages</h2>
            <div className="brr3"></div>
          </div>
          <div className="pricing-cards3">
            <div className="pricing-card13">
              <h3 className="card-title3">Basic Package</h3>
              <p className="card-description3">
                Includes venue setup, basic audiovisual equipment, and catering.
              </p>
              <ul className="ulist13">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Audiovisual Equipment</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Support</li>
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
                equipment and a guest speaker.
              </p>
              <ul className="ulist13">
                <li>✅ Venue Setup</li>
                <li>✅ Advanced Audiovisual Equipment</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Support</li>
                <li>✅ Guest Speaker</li>
              </ul>
              <p className="card-price3">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card33">
              <h3 className="card-title3">Premium Package</h3>
              <p className="card-description3">
                Includes all features of the Standard Package plus a full-day
                workshop and advanced multimedia options.
              </p>
              <ul className="ulist13">
                <li>✅ Venue Setup</li>
                <li>✅ Full Multimedia Setup</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Support</li>
                <li>✅ Multiple Guest Speakers</li>
                <li>✅ Customized Workshop</li>
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

export default Education;
