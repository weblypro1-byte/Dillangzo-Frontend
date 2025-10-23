import React, { useState } from "react";
import "./IELTSAcademicCourse.scss";
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

export default function PTEAcademicCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Understanding PTE Structure",
      content:
        "Introduction to PTE test format and scoring criteria. Focused sessions on Listening and Reading tasks with effective note-taking techniques.",
    },
    {
      title: "Weeks 3–4: Writing and Speaking Mastery",
      content:
        "Develop structured essay writing, summarize written text, and practice speaking with fluency and pronunciation drills.",
    },
    {
      title: "Weeks 5–6: Advanced Practice and Feedback",
      content:
        "Mock tests and detailed feedback sessions. Time management strategies and real-exam environment simulations.",
    },
    {
      title: "Weeks 7–8: Final Mock Exams and Strategy",
      content:
        "Complete mock tests with personalized feedback. Learn test-day strategies, score improvement hacks, and confidence building.",
    },
  ];

  return (
    <section className="pte-academic-course">
      <div className="container">
        {/* Left Content */}
        <div className="content">
          <span className="label">English Proficiency</span>
          <h1 className="title">PTE Academic Course</h1>

          <div className="instructor">
            <img
              src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Nazish Faisal </span>
              <span className="role"> Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873396/5_kaolch.png"
              alt="PTE Academic"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              Our <strong>PTE Academic Course</strong> is designed to help you
              excel in all four modules — Speaking, Writing, Reading, and
              Listening — through a structured and targeted learning approach.
              The course focuses on exam strategies, question type analysis, and
              smart preparation methods to help you achieve your desired score.
            </p>

            <h3>Interactive Learning</h3>
            <p>
              Experience an engaging environment with expert trainers who
              provide personalized support, feedback, and practical exercises
              using real PTE questions and mock tests.
            </p>

            <h3>Skill-Based Practice</h3>
            <p>
              Get hands-on practice for each PTE section with AI-evaluated mock
              exams and detailed feedback. Improve your pronunciation, grammar,
              and vocabulary with instructor-led sessions.
            </p>

            <h3>Success-Oriented Training</h3>
            <p>
              From time management techniques to test-day tips, our program
              ensures you walk into your exam with confidence and clarity. Join
              us to elevate your PTE preparation journey.
            </p>
          </div>

          {/* Course Outline Section */}
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

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video
                controls
                poster="https://admin.edify.pk/uploads/toytsfj47uoc9vupgv3z_0a2261aced.webp"
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
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaFileAlt /> Free Notes & Practice Tests
                </li>
                <li>
                  <FaCalendarCheck /> Test Booking Assistance
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
