
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./AboutUs.scss";
import {
  FaAward,
  FaHandshake,
  FaUsers,
  FaGlobeAmericas,
  FaLightbulb,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";

// ✅ Define all values here (not inside another function)
const CORE_VALUES = [
  {
    id: 1,
    title: "Excellence",
    icon: <FaAward />,
    content:
      "We strive for the highest standards in teaching, learning, and personal growth.",
  },
  {
    id: 2,
    title: "Integrity",
    icon: <FaHandshake />,
    content:
      "We uphold honesty, transparency, and strong moral principles in everything we do.",
  },
  {
    id: 3,
    title: "Community Engagement",
    icon: <FaUsers />,
    content:
      "We build strong connections with the community through collaboration and service.",
  },
  {
    id: 4,
    title: "Diversity & Inclusion",
    icon: <FaGlobeAmericas />,
    content:
      "We embrace and celebrate the diversity of our students and staff, creating an inclusive and welcoming environment for all.",
  },
  {
    id: 5,
    title: "Lifelong Learning",
    icon: <FaBookOpen />,
    content:
      "We encourage continuous growth, curiosity, and pursuit of knowledge for life.",
  },
  {
    id: 6,
    title: "Innovation",
    icon: <FaLightbulb />,
    content:
      "We foster creativity and forward-thinking to inspire progress and new ideas.",
  },
  {
    id: 7,
    title: "Student-Centred Approach",
    icon: <FaUserGraduate />,
    content:
      "We prioritize our students’ needs, experiences, and success above all.",
  },
];

// ✅ Team data
const TEAM = [
  {
    id: 4,
    name: "Nazish",
    role: "English Language Expert",
    img: "https://st4.depositphotos.com/9998432/23259/v/450/depositphotos_232592296-stock-illustration-person-gray-photo-placeholder-woman.jpg",
  },
  {
    id: 1,
    name: "Zain-ul-Abdeen",
    role: "Turkish & German Language Specialists",
    img: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757765491/HR_rgauuh.png",
  },
  {
    id: 2,
    name: "Waqas Ali",
    role: "Arabic & Chinese Language Specialist",
    img: "https://cdn.vectorstock.com/i/500p/46/76/gray-male-head-placeholder-vector-23804676.jpg",
  },
  {
    id: 3,
    name: "Miss Zahra Ali",
    role: "Turkish Language Expert",
    img: "https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg",
  },
];

// ✅ Main Component
export default function AboutUs() {
  const [active, setActive] = useState(CORE_VALUES[0].id);
  const [, setAngleOffsets] = useState([]);

  useEffect(() => {
    const items = CORE_VALUES.length;
    const angles = CORE_VALUES.map((_, i) => -90 + (360 / items) * i);
    setAngleOffsets(angles);
  }, []);

  return (
    <div className="about-us-root">
      {/* DIRECTOR MESSAGE */}
      <section className="director-message floating-section">
        <div className="container">
          <div className="left">
            <h2>Director’s Message</h2>
            <h4>Ms. Nazish Faisal</h4>
            <p>
              It is my great pleasure to welcome you to{" "}
              <strong>Dillangzo International Language Academy</strong> — a
              place where passion for languages meets excellence in education.
              Our academy is dedicated to helping learners build confidence,
              fluency, and global communication skills that open doors to new
              opportunities.
            </p>
            <p>
              At Dillangzo, we believe that learning a language is more than
              just mastering grammar — it’s about connecting with people,
              cultures, and perspectives from around the world. Our experienced
              instructors and innovative teaching methods ensure that every
              student progresses with clarity, confidence, and enthusiasm.
            </p>
            <p>
              I invite you to become part of this vibrant learning community,
              where every student’s journey is valued and every achievement
              celebrated.
            </p>

            <div className="btn-group">
              <button
                className="book-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/923258470096?text=Hi%20Ms.%20Nazish%20Faisal%2C%20I%20hope%20you%20are%20fine.%20I%20recently%20visited%20your%20website%20and%20I%20want%20more%20details%20about%20the%20language%20course.",
                    "_blank"
                  )
                }
              >
                <FaWhatsapp className="icon" /> Book Appointment
              </button>

              <a href="tel:+923258470096" className="call-btn">
                <FaPhoneAlt className="icon" /> Voice Call
              </a>
            </div>
          </div>

          <div className="right">
            <img
              src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760879404/WhatsApp_Image_2025-10-19_at_6.09.52_PM_rvwpxu.jpg"
              alt="Director Nazish Faisal"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES CIRCLE */}
      {/* CORE VALUES CIRCLE */}
<section className="core-values">
  <h2 className="core-values__title">Our Core Values</h2>
  <div className="core-values__circle">
    <div className="core-values__inner">
      <p>{CORE_VALUES.find((v) => v.id === active)?.content}</p>
    </div>

    {CORE_VALUES.map((val, i) => (
      <div
        key={val.id}
        className={`core-values__item ${val.id === active ? "active" : ""}`}
        style={{ "--i": i }}
        onMouseEnter={() => setActive(val.id)}
      >
        <div className="icon">{val.icon}</div>
        <span>{val.title}</span>
      </div>
    ))}
  </div>
</section>


      {/* CORE TEAM */}
      <section className="core-team">
        <div className="container">
          <h2 className="section-title">Our Academic Team</h2>
          <div className="team-grid">
            {TEAM.map((t) => (
              <div className="team-card" key={t.id}>
                <div className="team-photo">
                  <img src={t.img} alt={t.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h4>{t.name}</h4>
                  <p className="role">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
