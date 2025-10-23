import React, { useState } from "react";
import "./SpanishLanguageCourse.scss";
import { Link } from "react-router-dom";

import { FaClock, FaUserGraduate, FaLanguage, FaCertificate } from "react-icons/fa";

export default function SpanishLanguageCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Introduction to Spanish Language",
      content:
        "Learn the basics of Spanish pronunciation, greetings, and everyday vocabulary. This module helps you become comfortable with simple Spanish expressions and sentence formation.",
    },
    {
      title: "Grammar and Sentence Structure",
      content:
        "Understand the rules of Spanish grammar including gender, tenses, and verb conjugations. Gain confidence in writing and speaking grammatically correct sentences.",
    },
    {
      title: "Listening and Speaking Practice",
      content:
        "Enhance your listening skills with native audio examples and speaking exercises to improve your accent and fluency in conversational Spanish.",
    },
    {
      title: "Cultural Insights and Advanced Vocabulary",
      content:
        "Learn about Spanish culture, festivals, and traditions while expanding your vocabulary for real-world communication.",
    },
  ];

  return (
    <section className="spanish-language-course">
      <div className="container">
        {/* Left Content */}
        <div className="content">
          <p className="label">Language Course</p>
          <h1 className="title">Spanish Language Course</h1>

          <div className="instructor">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div>
              <div className="name">Maria Fernandez</div>
              <div className="role">Spanish Language Instructor</div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873493/10_teze5q.png"
              alt="Spanish Course"
            />
          </div>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>Spanish Language Course</strong> is designed to help learners develop
              proficiency in one of the world’s most widely spoken languages. Whether you are
              starting from scratch or want to enhance your communication skills, this course covers
              all levels.
            </p>
            <p>
              Our expert instructors ensure a fun and engaging learning experience by combining
              grammar, speaking, and cultural understanding in a practical way.
            </p>

            <h3>Why Learn Spanish?</h3>
            <p>
              Spanish opens doors to global opportunities, from education and travel to business and
              cultural exchange. Mastering Spanish gives you access to 21 countries and over 500
              million speakers worldwide.
            </p>
          </div>

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
              <video controls poster="/">
                <source
                  src="https://videos.pexels.com/video-files/855998/855998-hd_1920_1080_25fps.mp4"
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
                  <FaLanguage /> <span>Language:</span> Spanish
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
