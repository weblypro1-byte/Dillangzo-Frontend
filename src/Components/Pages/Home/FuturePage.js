import React from "react";
import "./FuturePage.scss";
import { FaUsers, FaBuilding, FaChalkboardTeacher, FaSitemap } from "react-icons/fa";

export default function FuturePage() {
  return (
    <section className="future-page">
      <div className="overlay"></div>

      <div className="future-content">
        <h1 className="future-title">Your Future Starts</h1>
        <p className="future-description">
          Your future begins at Dillangzo International Language Academy, where we empower you to reach new heights. 
          Join us in shaping a brighter tomorrow through education that inspires, transforms, 
          and leads to success.
        </p>

        <div className="stats-container">
          <div className="stat-box">
            <FaUsers className="icon" />
            <h2>250,000</h2>
            <p>HAPPY STUDENTS</p>
          </div>
          <div className="stat-box">
            <FaBuilding className="icon" />
            <h2>127+</h2>
            <p>Dillangzo CAMPUSES</p>
          </div>
          <div className="stat-box">
            <FaChalkboardTeacher className="icon" />
            <h2>3,000+</h2>
            <p>TEACHERS</p>
          </div>
          <div className="stat-box">
            <FaSitemap className="icon" />
            <h2>50+</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
