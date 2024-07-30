import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleMouseEnter = (setDropdown) => {
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    setDropdown(false);
  };

  const navigate = useNavigate();
  const submit1 = (path) => {
    navigate(path);
  };

  return (
    <div id="btns">
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
        <div
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter(setServiceDropdown)}
          onMouseLeave={() => handleMouseLeave(setServiceDropdown)}
        >
          <button className="b1" onClick={() => submit1("/service")}>
            Service
          </button>
          {serviceDropdown && (
            <div className="dropdown">
              <button onClick={() => submit1("/birthday")}>
                Birthday Events
              </button>
              <button onClick={() => submit1("/charity")}>
                Charity Events
              </button>
              <button onClick={() => submit1("/corporate")}>
                Corporate Events
              </button>
              <button onClick={() => submit1("/cultural")}>
                Cultural Events
              </button>
              <button onClick={() => submit1("/education")}>
                Education Events
              </button>
              <button onClick={() => submit1("/publicevents")}>
                Public Events
              </button>
              <button onClick={() => submit1("/sports")}>Sports Events</button>
              <button onClick={() => submit1("/wedding")}>Wedding</button>
            </div>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter(setBlogDropdown)}
          onMouseLeave={() => handleMouseLeave(setBlogDropdown)}
        >
          <button className="b1" onClick={() => submit1("/venue")}>
            Venue
          </button>
          {/* {blogDropdown && (
            <div className="dropdown">
              <button onClick={() => submit1("/blog/subblog1")}>
                subblog1
              </button>
              <button onClick={() => submit1("/blog/subblog2")}>
                Subblog 2
              </button>
              <button onClick={() => submit1("/blog/subblog3")}>
                Subblog 3
              </button>
            </div>
          )} */}
        </div>
        <div>
          <button className="b1" onClick={() => submit1("/contact")}>
            Contact
          </button>
        </div>
      </div>
      <div
        className="dropdown-container"
        onMouseEnter={() => handleMouseEnter(setAuth)}
        onMouseLeave={() => handleMouseLeave(setAuth)}
      >
        <div className="auth">
          <div onClick={() => submit1("/home")}>
            <button className="b1">Login</button>
          </div>
          {auth && (
            <div className="dropdown">
              <button onClick={() => submit1("/home")} className="log">
                Login as user
              </button>
              <button onClick={() => submit1("/admin-login")} className="log">
                Login as admin
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
