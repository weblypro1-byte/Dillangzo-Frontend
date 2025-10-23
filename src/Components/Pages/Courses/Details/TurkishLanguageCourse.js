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
import "./TurkishLanguageCourse.scss";

export default function TurkishLanguageCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Introduction to Turkish Language & Alphabet",
      content:
        "Learn the Turkish alphabet, pronunciation, and essential greetings. Gain a basic understanding of sentence formation and vocabulary.",
    },
    {
      title: "Weeks 3–4: Grammar & Sentence Building",
      content:
        "Develop a strong foundation in Turkish grammar, verb conjugations, and everyday expressions for communication.",
    },
    {
      title: "Weeks 5–6: Listening & Speaking Skills",
      content:
        "Engage in interactive speaking activities, listening comprehension, and roleplays to build fluency and confidence.",
    },
    {
      title: "Weeks 7–8: Reading, Writing & Cultural Insights",
      content:
        "Enhance reading and writing skills through short passages, dialogues, and exposure to Turkish culture and customs.",
    },
  ];

  return (
    <section className="turkish-course">
      <div className="container">
        {/* Left Section */}
        <div className="content">
          <span className="label">Language Program</span>
          <h1 className="title">Turkish Language Course</h1>

          <div className="instructor">
            <img
              src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757765491/HR_rgauuh.png"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Zain Ul Abdeen</span>
              <span className="role">Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873424/6_gpucdy.png"
              alt="Turkish Language"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>Turkish Language Course</strong> is designed for
              beginners and intermediate learners who want to master the Turkish
              language through structured lessons, interactive speaking
              sessions, and cultural learning.
            </p>

            <h3>Interactive Lessons</h3>
            <p>
              Classes are engaging and conversation-focused, ensuring that you
              learn to speak confidently in real-life scenarios.
            </p>

            <h3>Grammar Simplified</h3>
            <p>
              Our expert instructors make grammar easy to understand with
              practical examples and guided practice.
            </p>

            <h3>Cultural Learning</h3>
            <p>
              Get familiar with Turkish customs, food, and traditions as part of
              your learning journey to enhance both language and cultural
              understanding.
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
                poster="https://admin.edify.pk/uploads/2rjwlakzue38vm7h4n2f.webp"
              >
                <source
                  src="https://videos.pexels.com/video-files/3190140/3190140-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-body">
              <ul className="details">
                <li>
                  <FaLanguage /> <span>Language:</span> Turkish
                </li>
                <li>
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaFileAlt /> Study Material Included
                </li>
                <li>
                  <FaCalendarCheck /> Interactive Live Classes
                </li>
                <li>
                  <FaCertificate /> Certificate on Completion
                </li>
              </ul>
<Link to="/application-form">
  <button className="enroll-btn">Enroll Now</button>
</Link>            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
