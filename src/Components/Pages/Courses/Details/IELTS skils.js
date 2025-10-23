import React, { useState } from "react";
              import { Link } from "react-router-dom";

import "./IELTSLifeSkillsCourse.scss";import {
  FaLanguage,
  FaClock,
  FaFileAlt,
  FaCalendarCheck,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function IELTSLifeSkillsCourse() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const courseOutline = [
    {
      title: "Week 1–2: Introduction to IELTS Life Skills",
      content:
        "Understand the A1 and B1 test structure, tasks, and scoring. Build listening and speaking confidence through simple daily conversation activities.",
    },
    {
      title: "Weeks 3–4: Developing Listening & Speaking Skills",
      content:
        "Interactive sessions focusing on pronunciation, fluency, and comprehension. Practice identifying key information in dialogues and role-play tasks.",
    },
    {
      title: "Weeks 5–6: Real-Life Communication Practice",
      content:
        "Engage in simulated interviews and paired discussions. Learn strategies to express opinions, ask questions, and respond naturally.",
    },
    {
      title: "Weeks 7–8: Mock Tests and Final Preparation",
      content:
        "Perform complete mock tests under timed conditions. Instructor feedback and personalized improvement plan for exam success.",
    },
  ];

  return (
    <section className="ielts-life-skills-course">
      <div className="container">
        {/* ===== LEFT CONTENT ===== */}
        <div className="content">
          <span className="label">English Proficiency</span>
          <h1 className="title">IELTS Life Skills A1 & B1 Course</h1>

          <div className="instructor">
            <img
              src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
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
              src="https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjvug4umssqgc1shco4fz_2206548737.webp&w=2048&q=75"
              alt="IELTS Life Skills"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>IELTS Life Skills A1 & B1 Course</strong> focuses on
              helping candidates prove their English speaking and listening
              skills required for UK Visas and Immigration purposes. This course
              provides targeted training to build confidence for your test day.
            </p>

            <h3>Why Choose This Course?</h3>
            <p>
              Our expert instructors create an immersive and interactive
              learning environment that mirrors real-life conversations and test
              conditions. You'll master clear communication, pronunciation, and
              active listening skills.
            </p>

            <h3>Personalized Practice</h3>
            <p>
              Each session includes pair work, listening exercises, and mock
              speaking tasks that align perfectly with the A1/B1 test format.
              Get individual feedback and practical improvement tips.
            </p>

            <h3>Proven Success Methodology</h3>
            <p>
              We use Cambridge-approved practice material, real audio tasks, and
              performance evaluations to ensure steady progress and exam
              readiness.
            </p>
          </div>

          {/* ===== COURSE OUTLINE ===== */}
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

        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video
                controls
                poster="https://admin.edify.pk/uploads/jdwp1emi8hhfilmltclr_36163eefdf.webp"
              >
                <source
                  src="https://videos.pexels.com/video-files/3826677/3826677-uhd_2560_1440_24fps.mp4"
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
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaFileAlt /> Free Notes & Speaking Practice
                </li>
                <li>
                  <FaCalendarCheck /> Mock Test Facility
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
