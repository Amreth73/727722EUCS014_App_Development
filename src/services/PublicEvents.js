import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./publicevent.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const PublicEvents = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };
  return (
    <div>
      <Navbar />

      <div className="public-events-container3">
        <header className="public-events-header3">
          <h1 className="heading13">Public Events</h1>
        </header>

        <div className="public-events-content3">
          <div className="content-section13">
            <h2 className="heading23">What We Do</h2>
            <p className="paragraph13">
              At PartyPerfect, we specialize in organizing exceptional public
              events that leave a lasting impression. From large-scale community
              festivals to corporate gatherings, our team ensures every detail
              is handled with precision. We take care of event planning,
              logistics, and execution, providing a seamless experience for all
              attendees.
            </p>
            <p className="paragraph13">
              We understand the importance of creating engaging and impactful
              public events. Whether it’s a product launch, community event, or
              public exhibition, our aim is to deliver events that resonate with
              your audience and meet your goals.
            </p>
            <p className="paragraph13">
              Our dedicated team works closely with clients to tailor each event
              to their needs, ensuring that every aspect is carefully planned
              and executed. We focus on creating memorable experiences for all
              participants.
            </p>
          </div>
          <div className="content-section23">
            <h2 className="heading23">How We Do It</h2>
            <p className="paragraph23">
              Our approach begins with a thorough understanding of your event
              objectives. We develop a customized strategy that includes venue
              selection, logistics, and coordination. Our team manages every
              aspect of the event, ensuring a smooth and successful execution.
            </p>
            <p className="paragraph23">
              We start by discussing your vision and requirements during an
              initial consultation. This helps us design a comprehensive plan
              that aligns with your goals. From planning to execution, we handle
              all the details to deliver a successful event.
            </p>
            <p className="paragraph23">
              On event day, our team oversees all operations to ensure
              everything goes as planned. We manage the setup, schedule, and any
              last-minute adjustments so you can focus on the event itself.
            </p>
          </div>
          <div className="content-section33">
            <h2 className="heading23">Additional Features</h2>
            <p className="paragraph33">
              We offer a range of additional features to enhance your public
              event, including custom stage designs, live entertainment, and
              interactive activities. Our goal is to create a unique and
              engaging experience for attendees.
            </p>
            <p className="paragraph33">
              Our additional features can include immersive experiences,
              professional photography, and customized event materials. We
              strive to make your event stand out and provide a memorable
              experience for all guests.
            </p>
            <p className="paragraph33">
              Whether you're hosting a large public festival or a corporate
              event, we offer a variety of services to meet your needs and
              exceed your expectations.
            </p>
          </div>
        </div>

        <div className="recent-works3">
          <h2 className="recent-works-heading3">Our Recent Works</h2>
          <div className="recent-works-gallery3">
            <div className="recent-work-item3">
              <img
                src="./recent16.png"
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
                src="./recent17.png"
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
                src="./recent18.png"
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

        <div className="public-events-pricing3">
          <div className="service-heading3">
            <h2 className="pricing-heading3">Pricing Packages</h2>
            <div className="brr3"></div>
          </div>
          <div className="pricing-cards3">
            <div className="pricing-card13">
              <h3 className="card-title3">Basic Package</h3>
              <p className="card-description3">
                Includes venue setup, basic event coordination, and standard
                amenities.
              </p>
              <ul className="ulist13">
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
              <ul className="ulist13">
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
              <ul className="ulist13">
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

export default PublicEvents;
