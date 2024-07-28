import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const navigate = useNavigate();
  // const submit1 = () => {
  //   navigate("/");
  // };
  // const submit2 = () => {
  //   navigate("/about");
  // };
  // const submit3 = () => {
  //   navigate("/contact");
  // };
  // const submit4 = () => {
  //   navigate("/home");
  // };
  const submit1 = (path) => {
    navigate(path);
  };
  return (
    <>
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
          <div>
            <button className="b1" onClick={() => submit1("/service")}>
              Service
            </button>
          </div>
          <div>
            <button className="b1" onClick={() => submit1("/blog")}>
              Blog
            </button>
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
      <br></br>
      <div> Contact Page</div>

      <Footer />
    </>
  );
};

export default Contact;
