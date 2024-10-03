import React from "react";
import heroImage from "../images/hero-img.webp";
import trustpilotIcon from "../images/trustpilot_icon.png";

import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-wrapper">
        <h2 className="hero-header">
          Elevating thriving interactive experience with your things, every
          single day
        </h2>
        <p className="hero-para">
          The inexpensive plans to make your place smart, installed within 60
          days of service demand. We are opening your way towards a futuristic
          world of technology.
        </p>
        <div className="hero-btn-wrapper">
          <button className="btn btn-smart">Start living smart</button>
          <li className="link-learn">
            Learn More{" "}
            <span>
              <i className="fa-solid fa-arrow-down-long"></i>
            </span>
          </li>
        </div>
        <div className="hero-star-wrapper">
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>2,500+ reviews on</p>
          <img src={trustpilotIcon} alt="trustpilot-icon" />
        </div>
      </div>
      <img className="hero-img" src={heroImage} alt="hero-image" />
    </div>
  );
};

export default Hero;
