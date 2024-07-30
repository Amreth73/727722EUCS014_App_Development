// Stats.js
import React, { useEffect } from "react";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Statics.css";

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const formatNumber = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k+`;
    }
    return value.toString();
  };

  return (
    <div id="whole-anime" data-aos="zoom-in" className="stats-container">
      <div className="stats-grid">
        <div className="countdown-item">
          <span className="countdown-number">
            <CountUp
              end={15000}
              duration={12}
              separator=","
              formattingFn={formatNumber}
            />
          </span>
          <p className="countdown-label">Events Completed</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">
            <CountUp
              end={5000}
              duration={7}
              separator=","
              formattingFn={formatNumber}
            />
          </span>
          <p className="countdown-label">Happy Clients</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">
            <CountUp
              end={45}
              duration={4}
              separator=","
              formattingFn={formatNumber}
            />
          </span>
          <p className="countdown-label">Team Members</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">
            <CountUp
              end={15}
              duration={6}
              separator=","
              formattingFn={formatNumber}
            />
          </span>
          <p className="countdown-label">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
