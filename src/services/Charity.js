import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./charity.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const Charity = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };
  return (
    <div>
      <Navbar />
      <div className="charity-events-container1">
        <header className="charity-events-header1">
          <h1 className="heading1">Charity Events</h1>
        </header>

        <div className="charity-events-content1">
          <div className="content-section1">
            <h2 className="heading2">Our Mission</h2>
            <p className="paragraph1">
              At PartyPerfect, our mission is to create and manage charity
              events that significantly impact the community. We are committed
              to organizing events that not only raise funds but also bring
              people together for a cause. Our dedicated team handles every
              detail, ensuring a seamless and impactful experience.
            </p>
            <p className="paragraph1">
              From intimate fundraisers to grand galas, our goal is to design
              events that resonate with your mission and engage attendees. We
              work closely with you to tailor every aspect of the event to your
              specific needs and objectives.
            </p>
            <p className="paragraph1">
              By combining creativity and meticulous planning, we strive to
              maximize the impact of your charity event and foster a spirit of
              giving in the community.
            </p>
          </div>
          <div className="content-section2">
            <h2 className="heading2">Our Approach</h2>
            <p className="paragraph2">
              We begin with a thorough consultation to understand your charity's
              goals and vision. Based on this, we develop a comprehensive plan
              that covers every aspect of the event. Our services include venue
              selection, event design, and guest management.
            </p>
            <p className="paragraph2">
              Our approach is hands-on and detail-oriented. We coordinate with
              vendors, manage timelines, and handle logistics to ensure a smooth
              execution of the event. Our team is dedicated to making sure that
              every detail aligns with your objectives.
            </p>
            <p className="paragraph2">
              On the day of the event, we oversee all operations to ensure that
              everything goes according to plan, allowing you to focus on
              connecting with your guests and celebrating your cause.
            </p>
          </div>
          <div className="content-section3">
            <h2 className="heading2">Features We Offer</h2>
            <p className="paragraph3">
              Our charity events come with a range of features designed to
              enhance your event and engage your audience. These include:
            </p>
            <ul className="ulist1">
              <li>🎨 Customized Event Decor</li>
              <li>🍽️ Gourmet Catering Options</li>
              <li>🎤 Live Entertainment and Performances</li>
              <li>📸 Professional Photography and Videography</li>
              <li>🎁 Customized Party Favors</li>
            </ul>
            <p className="paragraph3">
              We offer these features to add a special touch to your event and
              ensure that it stands out. Our goal is to create a memorable
              experience that leaves a lasting impression on your guests.
            </p>
          </div>
        </div>

        <div className="recent-works1">
          <h2 className="recent-works-heading1">Our Recent Charity Events</h2>
          <div className="recent-works-gallery1">
            <div className="recent-work-item1">
              <img
                src="./recent4.png"
                alt="Charity Event 1"
                className="recent-work-image1"
              />
              <div className="recent-work-text1">
                <h3>Annual Gala for Children’s Health</h3>
                <h1>A night of fundraising and entertainment</h1>
              </div>
            </div>
            <div className="recent-work-item1">
              <img
                src="./recent5.png"
                alt="Charity Event 2"
                className="recent-work-image1"
              />
              <div className="recent-work-text1">
                <h3>Food Drive for Local Families</h3>
                <h1>Community gathering for a cause</h1>
              </div>
            </div>
            <div className="recent-work-item1">
              <img
                src="./recent6.png"
                alt="Charity Event 3"
                className="recent-work-image1"
              />
              <div className="recent-work-text1">
                <h3>Benefit Concert for Animal Welfare</h3>
                <h1>Music and fundraising for animals</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="charity-events-pricing1">
          <div className="service-heading1">
            <h2 className="pricing-heading1">Our Pricing Packages</h2>
            <div className="brr1"></div>
          </div>
          <div className="pricing-cards1">
            <div className="pricing-card11">
              <h3 className="card-title1">Basic Support</h3>
              <p className="card-description1">
                Perfect for small-scale charity events with basic needs.
              </p>
              <ul className="ulist1">
                <li>✅ Event Planning and Coordination</li>
                <li>✅ Basic Decorations and Setup</li>
                <li>✅ Standard Catering Options</li>
                <li>✅ 2 Hours of Entertainment</li>
              </ul>
              <p className="card-price1">$500</p>
              <button className="pay-btn" onClick={() => handlePay(500)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card12">
              <h3 className="card-title1">Standard Support</h3>
              <p className="card-description1">
                Includes additional features for more complex events.
              </p>
              <ul className="ulist1">
                <li>✅ Comprehensive Event Management</li>
                <li>✅ Customized Decorations</li>
                <li>✅ Premium Catering Options</li>
                <li>✅ 4 Hours of Entertainment</li>
                <li>✅ Professional Photography</li>
              </ul>
              <p className="card-price1">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card13">
              <h3 className="card-title1">Premium Support</h3>
              <p className="card-description1">
                Ideal for high-profile charity events with extensive needs.
              </p>
              <ul className="ulist1">
                <li>✅ Full-Service Event Planning</li>
                <li>✅ Themed Decorations and Setup</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Entertainment</li>
                <li>✅ Photography & Videography</li>
                <li>✅ Custom Party Favors</li>
              </ul>
              <p className="card-price1" style={{ marginBottom: "20px" }}>
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

export default Charity;
