import React from "react";
import smartRoomImage from "../images/service section/smart-room.png";
import "../css/Service.css";

const Services = () => {
  return (
    <div className="container">
      <div className="service-section-header">
        <span className="sub-heading">services</span>
        <h2 className="secondary-heading">
          Transforming your boring place to smart
        </h2>
      </div>
      <div className="service-btn-container">
        <button className="service-btn service-btn-first">Room</button>
        <button className="service-btn">Appliances</button>
        <button className="service-btn">Security</button>
        <button className="service-btn">Desk</button>
        <button className="service-btn">Map</button>
        <button className="service-btn">Recognition</button>
      </div>
      <div className="smartroom-wrapper">
        <div className="smartroom-text-wrapper">
          <h2 className="content-heading">
            <span className="highlight">Smart Room</span>
          </h2>
          <p className="content-para">
            Our technology will provide you with the smart room that reduces
            your stress as well as task to maintain each things inside of it. We
            provide smart TV, home cinema, lighting, thermostats, and more to
            enhance your room.
          </p>
          <li className="smartroom-find-link">
            Find More<i className="fa-solid fa-arrow-right"></i>
          </li>
        </div>
        <img className="smart-room-img" src={smartRoomImage} alt="Smart Room" />
      </div>
    </div>
  );
};

export default Services;
