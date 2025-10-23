import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaClock,
  FaLaptopCode,
  FaServer,
  FaChevronDown,
  FaChevronUp,
  FaRupeeSign,
} from "react-icons/fa";
import "./WebDevelopmentCourse.scss";

export default function WebDevelopmentCourse() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const courseOutline = [
    {
      title: "Module 1: HTML5 Fundamentals",
      content:
        "Understand structure, tags, and semantics. Build your first webpage from scratch using HTML5.",
    },
    {
      title: "Module 2: CSS3 Styling & Layouts",
      content:
        "Master CSS styling, layouts (Flexbox, Grid), media queries, and create modern responsive designs.",
    },
    {
      title: "Module 3: JavaScript Essentials",
      content:
        "Learn DOM manipulation, functions, events, ES6+ syntax, and dynamic interactivity for your pages.",
    },
    {
      title: "Module 4: PHP & MySQL Integration",
      content:
        "Connect your frontend to a backend. Learn PHP basics, form handling, database CRUD, and user login systems.",
    },
  ];

  return (
    <section className="webdev-course">
      <div className="container">
        <div className="content">
          <span className="label">IT & Technology</span>
          <h1 className="title">Web Development Course</h1>

          <div className="instructor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Hassan Shabbir</span>
              <span className="role"> Senior Web Development Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1761013674/Red_and_Yellow_Bold_Typographic_Youtube_Thumbnail_zwqmx0.png"
              alt="Web Development Course"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              Build a professional career in web development by mastering{" "}
              <strong>HTML, CSS, JavaScript, and PHP</strong>. This course helps
              you create dynamic and responsive websites — from design to
              deployment.
            </p>

            <h3>Hands-on Practice</h3>
            <p>
              Work on real-world projects, develop coding logic, and learn how
              to build modern web applications from scratch.
            </p>

            <h3>Career Path</h3>
            <p>
              This course prepares you to start freelancing or apply for
              front-end and back-end developer roles in the IT industry.
            </p>
          </div>

          {/* COURSE OUTLINE */}
          <div className="course-outline">
            <h2>Course Outline</h2>
            {courseOutline.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video controls poster="https://cdn.pixabay.com/photo/2023/01/19/10/16/coding-7726709_960_720.jpg">
                <source
                  src="https://videos.pexels.com/video-files/853460/853460-hd_1280_720_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-body">
              <ul className="details">
                <li>
                  <FaLaptopCode /> <span>Technology:</span> Web Development
                </li>
                <li>
                  <FaClock /> <span>Duration:</span> 3 Months
                </li>
                <li>
                  <FaServer /> <span>Projects:</span> 3 Live Projects
                </li>
                <li>
                  <FaRupeeSign /> <span>Course Fee:</span> Rs. 25,000
                </li>
              </ul>

             <Link to="/application-form">
               <button className="enroll-btn">Enroll Now</button>
             </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
