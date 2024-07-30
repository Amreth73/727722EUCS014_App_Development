import React from "react";
import Navbar from "../day3/Navbar";
import Footer from "../day3/Footer";
import "./wedding.css";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../day3/PriceProvider";
const Wedding = () => {
  const navigate = useNavigate();
  const { setPrice } = usePrice();
  const handlePay = (price) => {
    setPrice(price);
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />

      <div className="wedding-parties-container6">
        <header className="wedding-parties-header6">
          <h1 className="heading16">Wedding Events</h1>
        </header>

        <div className="wedding-parties-content6">
          <div className="content-section16">
            <h2 className="heading26">What We Do</h2>
            <p className="paragraph16">
              At PartyPerfect, we specialize in crafting unforgettable wedding
              events that reflect the couple’s unique style and preferences. Our
              team manages everything from theme selection and venue decoration
              to entertainment and catering, ensuring a seamless and elegant
              celebration.
            </p>
            <p className="paragraph16">
              We believe that every wedding is a once-in-a-lifetime occasion and
              should be celebrated with grandeur and sophistication. Whether
              it’s an intimate ceremony or a grand reception, we cater to all
              types of wedding celebrations. Our goal is to bring your vision to
              life and create memories that will last a lifetime.
            </p>
            <p className="paragraph16">
              Our dedicated team ensures exceptional service and meticulous
              attention to detail. We collaborate closely with you to ensure
              that every aspect of the wedding is flawlessly planned and
              executed, allowing you to enjoy your special day with your loved
              ones.
            </p>
          </div>
          <div className="content-section26">
            <h2 className="heading26">How We Do It</h2>
            <p className="paragraph26">
              Our process starts with understanding your vision and preferences.
              We then create a bespoke plan that includes all the essential
              elements to make your wedding day extraordinary. Our experienced
              coordinators oversee every detail, providing a stress-free
              experience from start to finish.
            </p>
            <p className="paragraph26">
              We begin with an initial consultation to discuss your ideas and
              preferences. This helps us to understand your expectations and
              plan accordingly. From there, we handle all logistics, including
              vendor coordination, timeline management, and on-site setup.
            </p>
            <p className="paragraph26">
              On the wedding day, our team is present to ensure everything runs
              smoothly. We manage the setup, oversee the schedule, and address
              any last-minute details, so you can focus on enjoying your
              celebration with your loved ones.
            </p>
          </div>
          <div className="content-section36">
            <h2 className="heading26">Additional Features</h2>
            <p className="paragraph36">
              We offer a range of additional features to elevate your wedding,
              including customized decorations, themed entertainment, photo
              booths, and more. Our aim is to ensure every detail is perfect and
              that your wedding is as unique as you are.
            </p>
            <p className="paragraph36">
              Our additional features include interactive games, live music, and
              customized wedding favors that align with your theme. We strive to
              add special touches that make your event memorable and enjoyable
              for all your guests.
            </p>
            <p className="paragraph36">
              Whether you’re looking for a classic, modern, or romantic theme,
              we can provide the creative elements that will make your wedding
              stand out. From personalized cake designs to custom entertainment
              options, we offer a variety of services to meet your needs.
            </p>
          </div>
        </div>

        <div className="recent-works6">
          <h2 className="recent-works-heading6">Our Recent Works</h2>
          <div className="recent-works-gallery6">
            <div className="recent-work-item6">
              <img
                src="./wed1.png"
                alt="Recent Work 1"
                className="recent-work-image6"
              />
              <div className="recent-work-text6">
                <h3>Work Title 1</h3>
                <h1>Description of recent work 1</h1>
              </div>
            </div>
            <div className="recent-work-item6">
              <img
                src="./wed2.png"
                alt="Recent Work 2"
                className="recent-work-image6"
              />
              <div className="recent-work-text6">
                <h3>Work Title 2</h3>
                <h1>Description of recent work 2</h1>
              </div>
            </div>
            <div className="recent-work-item6">
              <img
                src="./wed3.png"
                alt="Recent Work 3"
                className="recent-work-image6"
              />
              <div className="recent-work-text6">
                <h3>Work Title 3</h3>
                <h1>Description of recent work 3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="wedding-parties-pricing6">
          <div className="service-heading6">
            <h2 className="pricing-heading6">Pricing Packages</h2>
            <div className="brr6"></div>
          </div>
          <div className="pricing-cards6">
            <div className="pricing-card16">
              <h3 className="card-title6">Basic Package</h3>
              <p className="card-description6">
                Includes venue decoration, basic catering, and entertainment.
              </p>
              <ul className="ulist6">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Decorations</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Entertainment</li>
              </ul>
              <p className="card-price6">$500</p>
              <button className="pay-btn" onClick={() => handlePay(500)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card26">
              <h3 className="card-title6">Standard Package</h3>
              <p className="card-description6">
                Includes all features of the Basic Package plus additional
                decorations and a photo booth.
              </p>
              <ul className="ulist6">
                <li>✅ Venue Setup</li>
                <li>✅ Custom Decorations</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Entertainment</li>
                <li>✅ Photography</li>
              </ul>
              <p className="card-price6">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card36">
              <h3 className="card-title6">Premium Package</h3>
              <p className="card-description6">
                Includes all features of the Standard Package plus a themed
                entertainment show and gourmet catering.
              </p>
              <ul className="ulist6">
                <li>✅ Venue Setup</li>
                <li>✅ Themed Decorations</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Entertainment</li>
                <li>✅ Photography & Videography</li>
                <li>✅ Custom Wedding Favors</li>
              </ul>
              <p className="card-price6" style={{ marginBottom: "20px" }}>
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

export default Wedding;
