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
import "./GermanLanguageCourse.scss";

export default function GermanLanguageCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Introduction to German & Basic Grammar",
      content:
        "Learn the German alphabet, pronunciation rules, and everyday greetings. Introduction to basic grammar and sentence structure.",
    },
    {
      title: "Weeks 3–4: Vocabulary & Conversation Skills",
      content:
        "Build strong vocabulary for daily interactions, travel, and work. Engage in speaking sessions to develop natural fluency.",
    },
    {
      title: "Weeks 5–6: Reading & Writing Practice",
      content:
        "Read simple German texts, write short paragraphs, and practice comprehension exercises with guidance from expert instructors.",
    },
    {
      title: "Weeks 7–8: Listening & Exam Preparation",
      content:
        "Improve listening comprehension and prepare for Goethe/TELC exams through mock tests and exam-oriented training.",
    },
  ];

  return (
    <section className="german-language-course">
      <div className="container">
        {/* LEFT CONTENT */}
        <div className="content">
          <span className="label">Foreign Language</span>
          <h1 className="title">German Language Course</h1>

          <div className="instructor">
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-photo-placeholder-grey-600nw-2007531536.jpg"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Zain</span>
              <span className="role">Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873482/7_z21bgs.png"
              alt="German Language Course"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>German Language Course</strong> is ideal for learners
              who want to explore the German language for study, travel, or
              career growth. With practical lessons, expert guidance, and real
              conversational practice, you'll gain fluency and confidence in
              everyday German.
            </p>

            <h3>Interactive Learning</h3>
            <p>
              Our lessons include immersive conversations, pronunciation drills,
              and grammar exercises, making the learning experience engaging and
              effective.
            </p>

            <h3>Skill-Based Practice</h3>
            <p>
              Improve your listening, reading, speaking, and writing through
              structured modules designed according to CEFR standards (A1–B1).
            </p>

            <h3>Success-Oriented Training</h3>
            <p>
              Prepare for internationally recognized exams such as Goethe
              Zertifikat and TELC with mock exams, feedback, and expert
              strategies.
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
              <video
                controls
                poster="https://admin.edify.pk/uploads/9rhk8lsqjw0y6z7x8y5c_8cbad3b6ce.webp"
              >
                <source
                  src="https://videos.pexels.com/video-files/3195390/3195390-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-body">
              <ul className="details">
                <li>
                  <FaLanguage /> <span>Language:</span> German
                </li>
                <li>
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaFileAlt /> Free Notes & Worksheets
                </li>
                <li>
                  <FaCalendarCheck /> Goethe / TELC Exam Guidance
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
