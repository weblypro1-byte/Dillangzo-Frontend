import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaLanguage,
  FaClock,
  FaFileAlt,
  FaCalendarCheck,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./DuolingoEnglishTestCourse.scss";

export default function DuolingoEnglishTestCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Introduction & Test Overview",
      content:
        "Understand the Duolingo English Test structure, scoring system, and timing. Focus on Listening & Reading comprehension techniques.",
    },
    {
      title: "Weeks 3–4: Speaking and Writing Skills",
      content:
        "Improve speaking fluency, pronunciation, and writing clarity. Practice with AI-based test simulations and sample questions.",
    },
    {
      title: "Weeks 5–6: Intensive Practice Sessions",
      content:
        "Work on question prediction, time management, and detailed feedback. Attempt mock tests under real exam conditions.",
    },
    {
      title: "Week 7: Final Preparation & Test Strategy",
      content:
        "Analyze mock test results, polish weak areas, and master the best test-taking strategies for achieving your target score.",
    },
  ];

  return (
    <section className="duolingo-course">
      <div className="container">
        {/* Left Section */}
        <div className="content">
          <span className="label">English Proficiency</span>
          <h1 className="title">Duolingo English Test Preparation</h1>

          <div className="instructor">
            <img
              src="https://st4.depositphotos.com/9998432/23741/v/450/depositphotos_237418842-stock-illustration-person-gray-photo-placeholder-woman.jpg"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Nazish</span>
              <span className="role"> Course Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873400/3_rrobxf.png"
              alt="Duolingo English Test"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              Our <strong>Duolingo English Test Preparation Course</strong> is
              designed to help students achieve their desired score through
              structured training and smart practice. You’ll gain confidence in
              reading, writing, listening, and speaking with real test-like
              exercises.
            </p>

            <h3>Interactive Online Learning</h3>
            <p>
              Enjoy an engaging learning experience with live classes, detailed
              feedback, and expert guidance. Practice using the official
              Duolingo interface to simulate the real test.
            </p>

            <h3>Comprehensive Skill Development</h3>
            <p>
              From grammar correction to fluency improvement, this course helps
              you excel in every aspect. You’ll also receive AI-evaluated mock
              tests and instructor-led feedback.
            </p>

            <h3>Guaranteed Improvement</h3>
            <p>
              Our proven methodology ensures measurable progress in your test
              scores. Join now to achieve your academic and migration goals with
              confidence.
            </p>
          </div>

          {/* Accordion Section */}
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

        {/* Sidebar Section */}
        <aside className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video
                controls
                poster="https://admin.edify.pk/uploads/0mjfn8u6as7pb6oygka2.webp"
              >
                <source
                  src="https://videos.pexels.com/video-files/3184465/3184465-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-body">
              <ul className="details">
                <li>
                  <FaLanguage /> <span>Language:</span> English
                </li>
                <li>
                  <FaClock /> <span>Duration:</span> 7 Weeks
                </li>
                <li>
                  <FaFileAlt /> Free Study Material
                </li>
                <li>
                  <FaCalendarCheck /> Flexible Schedule
                </li>
                <li>
                  <FaCertificate /> Certificate on Completion
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
