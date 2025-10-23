





import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaHome,
  FaBookOpen,
  FaBriefcase,
  FaUsers,
  FaPhone,
  FaFacebookF,
FaTiktok ,
 FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeroNavbarPage.scss";

export default function HeroNavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="hero-navbar-page">
      {/* ===== Top Info Bar ===== */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-info">
            <div className="info-item hide-on-mobile">
              <FaMapMarkerAlt className="icon" />
              OFFICE 4 1st Floor Pak Plaza Pwd Main Road Islamabad
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              dillanzo786@gmail.com
            </div>
            <div className="info-item hide-on-mobile">
              <FaPhoneAlt className="icon" />
              +92 325 8470098
            </div>
          </div>

          {/* <button className="portal-btn">STUDENT PORTAL</button> */}

          <div className="social-icons">
            <a
              href="https://www.facebook.com/people/Dillangzo-Academy/100089274288105/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
                         href="https://www.tiktok.com/@dillangzoacademy"
                         target="_blank"
                                       rel="noreferrer">
                       
                         <FaTiktok /></a>
            <a
              href="https://www.instagram.com/dillangzo.academy.ptd?igsh=emRhMHFraHdpNHBm"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@dillangzoacademy"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1761132150/New_Arrivals_Fashion_Brand_Website_Homepage_Banner_1_ykcaow.png"
                alt="Dillangzo Academy"
              />
            </Link>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Our Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/online-learning">Online Learning</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="nav-actions">
            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <FaTimes className="close-icon" onClick={toggleMenu} />
          <ul>
            <li><Link to="/" onClick={toggleMenu}><FaHome /> Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}><FaUsers /> About Us</Link></li>
            <li><Link to="/courses" onClick={toggleMenu}><FaBookOpen /> Our Courses</Link></li>
            <li><Link to="/admissions" onClick={toggleMenu}><FaBookOpen /> Admissions</Link></li>
            <li><Link to="/online-learning" onClick={toggleMenu}><FaBriefcase /> Online learning</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}><FaPhone /> Contact Us</Link></li>
          </ul>
        </div>

        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    </div>
  );
}
