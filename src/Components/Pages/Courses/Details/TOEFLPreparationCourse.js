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
import "./TOEFLPreparationCourse.scss"; // ✅ Import SCSS

export default function TOEFLPreparationCourse() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const courseOutline = [
    {
      title: "Week 1–2: Introduction & Foundation",
      content:
        "Learn the complete TOEFL iBT structure, scoring system, and essential test-taking strategies. Build core listening and reading comprehension skills.",
    },
    {
      title: "Weeks 3–4: Reading and Listening Skills",
      content:
        "Master academic vocabulary and critical thinking through reading passages and listening exercises from real TOEFL materials.",
    },
    {
      title: "Weeks 5–6: Speaking & Writing Strategies",
      content:
        "Develop structured speaking and writing responses using proven templates. Get feedback on pronunciation, fluency, and essay organization.",
    },
    {
      title: "Weeks 7–8: Mock Tests & Exam Readiness",
      content:
        "Simulate the real TOEFL iBT exam under timed conditions. Receive detailed performance feedback and improvement tips before your final test.",
    },
  ];

  return (
    <section className="toefl-preparation-course">
      <div className="container">
        {/* ===== LEFT CONTENT ===== */}
        <div className="content">
          <span className="label">English Proficiency</span>
          <h1 className="title">TOEFL iBT Preparation Course</h1>

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
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873395/2_hyhdy0.png"
              alt="TOEFL Preparation"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>TOEFL iBT Preparation Course</strong> equips students
              with the skills and strategies required to achieve top scores in
              all four TOEFL sections: Reading, Listening, Speaking, and
              Writing. This program combines real test materials with targeted
              feedback and proven learning methods.
            </p>

            <h3>Personalized Coaching</h3>
            <p>
              Each student receives personalized attention with individual
              progress tracking, interactive speaking sessions, and essay review
              feedback from expert trainers.
            </p>

            <h3>Skill Enhancement</h3>
            <p>
              Learn academic English expressions, note-taking techniques, and
              analytical reading skills through intensive practice and real-time
              evaluation.
            </p>

            <h3>Confidence Building</h3>
            <p>
              Get fully prepared with our mock exams that simulate the actual
              TOEFL experience. Build confidence and time management skills for
              the test day.
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
                poster="https://admin.edify.pk/uploads/4r7n6ctkk82e5h9pgv6m_6dff19b25a.webp"
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
                  <FaFileAlt /> Free Practice Materials
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
