import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ArabicLanguageCourse.scss";
import { FaClock, FaUserGraduate, FaLanguage, FaCertificate } from "react-icons/fa";

export default function ArabicLanguageCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Introduction to Arabic Language",
      content:
        "Learn the Arabic alphabet, basic sounds, and pronunciation. Build your vocabulary with greetings, numbers, and daily use phrases.",
    },
    {
      title: "Grammar and Sentence Formation",
      content:
        "Understand Arabic grammar, gender rules, sentence structures, and verb conjugations to form meaningful sentences.",
    },
    {
      title: "Speaking and Listening Skills",
      content:
        "Improve your listening and speaking through interactive dialogues, pronunciation drills, and real-life conversations.",
    },
    {
      title: "Reading and Writing in Arabic",
      content:
        "Master reading Arabic script and writing from right to left. Develop comprehension and fluency in reading short stories and articles.",
    },
    {
      title: "Cultural and Practical Learning",
      content:
        "Learn about Arabic culture, customs, and traditions to understand the language in real-life contexts.",
    },
  ];

  return (
    <section className="arabic-language-course">
      <div className="container">
        {/* Left Content */}
        <div className="content">
          <p className="label">Language Course</p>
          <h1 className="title">Arabic Language Course</h1>

          <div className="instructor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div>
              <div className="name">Waqas Ali</div>
              <div className="role">Arabic Language Instructor</div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873490/11_knlqzv.png"
              alt="Arabic Course"
            />
          </div>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>Arabic Language Course</strong> is designed to help learners
              develop reading, writing, speaking, and listening skills in Modern
              Standard Arabic (MSA). Whether you are a beginner or seeking to
              enhance your existing skills, this course provides a structured and
              immersive learning experience.
            </p>

            <h3>Why Learn Arabic?</h3>
            <p>
              Arabic is one of the world’s most influential languages — spoken by over
              400 million people across 20+ countries. Learning Arabic not only
              enhances communication but also opens doors to global opportunities in
              business, travel, and culture.
            </p>

            <h3>Learning Approach</h3>
            <p>
              Our program combines vocabulary building, grammar training, and
              real-life conversations. You’ll gain confidence in using Arabic for
              personal, academic, and professional growth.
            </p>
          </div>

          {/* Accordion Section */}
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
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="card">
            <div className="video-wrap">
              <video
                controls
                poster="/"
              >
                <source
                  src="https://videos.pexels.com/video-files/857218/857218-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="card-body">
              <ul className="details">
                <li>
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaUserGraduate /> <span>Level:</span> Beginner to Advanced
                </li>
                <li>
                  <FaLanguage /> <span>Language:</span> Arabic
                </li>
                <li>
                  <FaCertificate /> <span>Certificate:</span> Yes
                </li>
              </ul>
              <Link to="/application-form">
  <button className="enroll-btn">Enroll Now</button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
