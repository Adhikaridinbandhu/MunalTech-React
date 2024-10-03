import React from "react";
import logo from "../images/munaltech-logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="munaltech-logo" className="munaltech-logo" />
      </a>
      <nav className="head-nav">
        <ul className="head-nav-list">
          <li>
            <a className="head-nav-link" href="#section-service">
              Services
            </a>
          </li>
          <li>
            <a className="head-nav-link" href="#section-how">
              How we Service
            </a>
          </li>
          <li>
            <a className="head-nav-link" href="#section-feature">
              Features
            </a>
          </li>
          <li>
            <a className="head-nav-link" href="#section-testimonial">
              Testimonials
            </a>
          </li>
        </ul>
        <button className="btn btn-pricing">Pricing plans</button>
      </nav>
    </header>
  );
};

export default Header;
