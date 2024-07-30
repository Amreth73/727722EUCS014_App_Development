import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import ContactDetails from "./contactDetails";
// import GoogleMapComponent from "./GoogleMapComponent";
import NewsletterForm from "./NewsletterForm";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const submit1 = (path) => {
    navigate(path);
  };
  return (
    <>
      <Navbar />
      <div>
        <div id="contact">
          <h2>Get in Touch</h2>
          <div className="contact-container">
            <ContactForm />
            <ContactDetails />
          </div>
          <NewsletterForm />
          {/* <Footer /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
