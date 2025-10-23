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
import "./LanguageCertESOLSpeakingCourse.scss";

export default function LanguageCertESOLSpeakingCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Introduction to LanguageCert ESOL Speaking",
      content:
        "Understand the LanguageCert International ESOL Speaking test structure, assessment criteria, and question types.",
    },
    {
      title: "Weeks 2–3: Conversation Practice",
      content:
        "Develop communication skills through real-life roleplays, dialogues, and topic-based discussions.",
    },
    {
      title: "Weeks 4–5: Exam Strategy & Pronunciation",
      content:
        "Improve pronunciation, intonation, and fluency while learning strategies for each part of the exam.",
    },
    {
      title: "Week 6: Final Mock & Feedback",
      content:
        "Participate in a full mock test followed by detailed feedback and personalized improvement guidance.",
    },
  ];

  return (
    <section className="languagecert-course">
      <div className="container">
        {/* Left Section */}
        <div className="content">
          <span className="label">Speaking Course</span>
          <h1 className="title">LanguageCert International ESOL Speaking Course</h1>

          <div className="instructor">
            <img
              src="https://st4.depositphotos.com/9998432/23741/v/450/depositphotos_237418842-stock-illustration-person-gray-photo-placeholder-woman.jpg"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Nazish</span>
              <span className="role"> Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873401/4_zio61n.png"
              alt="LanguageCert Speaking"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>LanguageCert International ESOL Speaking Course</strong> helps learners gain confidence in speaking English fluently and naturally, following the exam’s official format.
            </p>

            <h3>Personalized Coaching</h3>
            <p>
              Receive one-on-one speaking feedback and corrections from certified instructors who guide you through every stage of your preparation.
            </p>

            <h3>Interactive Sessions</h3>
            <p>
              Engage in live roleplays, discussion tasks, and pronunciation exercises designed to improve real-world communication.
            </p>

            <h3>Result-Focused Training</h3>
            <p>
              Build confidence for the exam through mock tests and detailed assessments, ensuring you meet LanguageCert standards effectively.
            </p>
          </div>

          {/* Course Outline */}
          <div className="course-outline">
            <h2>Course Outline</h2>
            {courseOutline.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
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

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video
                controls
                poster="https://admin.edify.pk/uploads/8mjly5yilxjgvv6i3t9m.webp"
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
                  <FaClock /> <span>Duration:</span> 6 Weeks
                </li>
                <li>
                  <FaFileAlt /> Practice Material Included
                </li>
                <li>
                  <FaCalendarCheck /> Test Registration Support
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
