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
import "./ChineseLanguageCourse.scss";

export default function ChineseLanguageCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Introduction to Mandarin & Tones",
      content:
        "Learn Pinyin, tones, and basic greetings. Understand pronunciation fundamentals and sentence structures used in daily conversation.",
    },
    {
      title: "Weeks 3–4: Vocabulary Building & Basic Grammar",
      content:
        "Expand your vocabulary with essential words and practice common sentence patterns for communication and comprehension.",
    },
    {
      title: "Weeks 5–6: Listening & Speaking Practice",
      content:
        "Engage in interactive sessions to improve pronunciation, tone recognition, and conversational fluency with native recordings.",
    },
    {
      title: "Weeks 7–8: Reading, Writing & Cultural Immersion",
      content:
        "Learn to read and write simplified Chinese characters and explore Chinese culture, festivals, and etiquette.",
    },
  ];

  return (
    <section className="chinese-course">
      <div className="container">
        {/* Left Section */}
        <div className="content">
          <span className="label">Language Program</span>
          <h1 className="title">Chinese Language Course</h1>

          <div className="instructor">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg"
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Waqas Ali</span>
              <span className="role">Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873486/8_ja1btl.png"
              alt="Chinese Language Course"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              The <strong>Chinese Language Course</strong> focuses on building a
              strong foundation in Mandarin, emphasizing pronunciation, tones,
              grammar, and practical vocabulary for daily use.
            </p>

            <h3>Interactive Learning</h3>
            <p>
              Classes combine listening, speaking, reading, and writing skills
              with interactive conversation practice to enhance your fluency.
            </p>

            <h3>Pronunciation & Tones</h3>
            <p>
              Special focus on tone training and phonetics to ensure accurate
              pronunciation and understanding in real conversations.
            </p>

            <h3>Cultural Integration</h3>
            <p>
              Experience Chinese culture through lessons on customs, festivals,
              and traditions, making your language learning more immersive.
            </p>
          </div>

          {/* Course Outline */}
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
                poster="https://admin.edify.pk/uploads/wk02d5z3vhy8sxt4lmeb.webp"
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
                  <FaLanguage /> <span>Language:</span> Chinese (Mandarin)
                </li>
                <li>
                  <FaClock /> <span>Duration:</span> 8 Weeks
                </li>
                <li>
                  <FaFileAlt /> Study Material & Audio Guides
                </li>
                <li>
                  <FaCalendarCheck /> Interactive Practice Sessions
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
