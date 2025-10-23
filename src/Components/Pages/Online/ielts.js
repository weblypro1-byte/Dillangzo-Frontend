import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IELTSAcademicCourse.scss";
import {
  FaLanguage,
  FaClock,
  FaFileAlt,
  FaCalendarCheck,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function IELTSAcademicCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseOutline = [
    {
      title: "Week 1–2: Building a Strong Foundation",
      content:
        "Introduction to IELTS format and scoring. Focus on Listening and Reading skills. Vocabulary building and time management strategies.",
    },
    {
      title: "Weeks 3–4: Enhanced Skills and Development",
      content:
        "Intensive Writing and Speaking practice. Grammar polishing and feedback sessions. Real exam sample analysis.",
    },
    {
      title: "Weeks 5–6: Advanced Practices and Refinement",
      content:
        "Mock tests and error correction. Advanced vocabulary and pronunciation drills. Mastering coherence and cohesion in writing.",
    },
    {
      title: "Weeks 7–8: Final Preparation and Exam Readiness",
      content:
        "Full-length mock exams under timed conditions. Last-minute revision, test-day strategy sessions, and confidence building.",
    },
  ];

  return (
    <section className="ielts-academic-course">
      <div className="container">
        {/* Left Content */}
        <div className="content">
          <span className="label">English Proficiency</span>
          <h1 className="title">IELTS Academic Course</h1>

          <div className="instructor">
            <img
              src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
              alt="Instructor"
              className="instructor-avatar"
            />
            <div className="instructor-info">
              <span className="name">Nazish Faisal</span>
              <span className="role"> Instructor</span>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873403/1_sgpnyj.png"
              alt="IELTS Academic"
            />
          </figure>

          <div className="about">
            <h2>About This Course</h2>
            <p>
              Achieve your IELTS goals with our intensive preparation course. This
              IELTS Academic programme is designed to strategically guide you through
              each section of the exam with practical exam techniques and an immersive
              learning environment so you arrive fully prepared and confident on test day.
            </p>

            <h3>Engage and Collaborate</h3>
            <p>
              In our dynamic classroom setting, you’ll benefit from collaborative
              learning, fostering positive interactions with instructors and peers.
              This supportive environment enhances your learning experience and provides
              invaluable exposure to various perspectives which contribute to your success.
            </p>

            <h3>Personalized Feedback</h3>
            <p>
              Receive targeted feedback on speaking and writing. Our faculty will provide
              tailored guidance to help you refine skills and increase your score.
            </p>

            <h3>Join and Master the IELTS Exam</h3>
            <p>
              Embark on your journey to mastering IELTS with guided practice, mock tests,
              and strategy sessions. Our course equips you with the confidence and competence to excel.
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
                  <FaFileAlt /> Free Notes
                </li>
                <li>
                  <FaCalendarCheck /> Test Booking Facility
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
