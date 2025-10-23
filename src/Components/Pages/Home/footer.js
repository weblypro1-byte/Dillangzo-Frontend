// import React from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
// import { Link } from "react-router-dom"; // ✅ import Link for navigation
// import "./FooterPage.scss";

// export default function FooterPage() {
//   return (
//     <footer className="footer-page">
//       <div className="container footer-container">
//         {/* === About Section === */}
//         <div className="footer-section about">
//           <div className="footer-logo">
//             <img
//               src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760757687/WhatsApp_Image_2025-10-18_at_8.09.48_AM_elxc1n.jpg"
//               alt="Dillangzo Logo"
//             />
//           </div>
//           <p>
//             Dillangzo Language Academy is a global online platform empowering
//             students with English proficiency and multilingual excellence to
//             thrive in today’s interconnected world.
//           </p>
//           <div className="social-icons">
//   <a href="https://www.facebook.com/people/Dillangzo-Academy/100089274288105/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
//     <FaFacebookF />
//   </a>
//   <a href="https://www.instagram.com/DillangzoAcademy" target="_blank" rel="noopener noreferrer">
//     <FaInstagram />
//   </a>
//   <a href="https://www.youtube.com/@dillangzoacademy" target="_blank" rel="noopener noreferrer">
//     <FaYoutube />
//   </a>
//   <a
//   href="https://wa.me/923258470098?text=Hi%20Shama%20Faisal%2C%20I%20recently%20visited%20your%20website%20and%20I%20want%20more%20details%20about%20the%20language%20course."
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FaWhatsapp />
// </a>

// </div>

//         </div>

//         {/* === Contact Info === */}
//         <div className="footer-section contact">
//           <h5>Contact Us</h5>
//           <p><FaEnvelope /> info@dillangzoacademy.com</p>
//           <p><FaPhoneAlt /> +92 300 1234567</p>
//           <p><FaMapMarkerAlt /> Online Academy – Available Worldwide</p>
//         </div>

//         {/* === Quick Links === */}
//         <div className="footer-section links">
//           <h5>Quick Links</h5>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/courses">Courses</Link></li>
//             <li><Link to="/admissions">Admissions</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* === Popular Courses === */}
//         <div className="footer-section courses">
//           <h5>Popular Courses</h5>
//           <ul>
//             <li><Link to="/courses/ielts">IELTS Academic</Link></li>
//             <li><Link to="/courses/PTEAcademicCourse">PTE Academic</Link></li>
//             <li><Link to="/courses/french-language">Web Development</Link></li>
//             <li><Link to="/courses/german-language">German Language</Link></li>
//             <li><Link to="/courses/turkish-language">Turkish Language</Link></li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//        <p>
//   © {new Date().getFullYear()} Dillangzo Language Academy | Developed by{" "}
//   <a 
//     href="https://rehman-portfolio-beige.vercel.app" 
//     target="_blank" 
//     rel="noopener noreferrer" 
//     style={{ color: "#b89b2e", textDecoration: "none", fontWeight: "600" }}
//   >
//     Weblypro
//   </a>
// </p>

//       </div>
//     </footer>
//   );
// }






import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* === Column 1: About Section === */}
        <div className="footer-col about">
          <img
            src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1761132150/New_Arrivals_Fashion_Brand_Website_Homepage_Banner_1_ykcaow.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="about-text">
            Dillangzo Academy is one of the fastest-growing education
            and career networks in World.
          </p>

          <div className="social-links">
            <a
              href="https://www.facebook.com/people/Dillangzo-Academy/100089274288105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/dillangzo.academy.ptd?igsh=emRhMHFraHdpNHBm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

           

            <a
              href="https://www.youtube.com/@dillangzoacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.tiktok.com/@dillangzoacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* === Column 2: Contact Info === */}
        <div className="footer-col contact">
          <h5>Contact With Us</h5>
          <ul>
            <li>
              <FaPhoneAlt /> +92 325 8470098
            </li>
            <li>
              <FaEnvelope /> dillanzo786@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt /> OFFICE 4 1st Floor Pak Plaza Pwd Main Road Islamabad

            </li>
          </ul>
        </div>

        {/* === Column 3: Languages === */}
        <div className="footer-col links">
          <h5>Languages</h5>
          <ul>
            <li><Link to="/courses/ielts">IELTS</Link></li>
            <li><Link to="/courses/PTEAcademicCourse">PTE</Link></li>
            <li><Link to="/courses/turkish-language">Turkish</Link></li>
            <li><Link to="/courses/arabic">Arabic</Link></li>
            <li><Link to="/courses/chinese-language">Chinese</Link></li>
          </ul>
        </div>

        {/* === Column 4: Useful Links === */}
        <div className="footer-col links">
          <h5>Useful Links</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/courses">Our Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/online-learning">Online Learning</Link></li>
          </ul>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Dillangzo Academy | Developed by{" "}
          <a
            href="https://rehman-portfolio-beige.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#eb0000ff",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Weblypro
          </a>
        </p>
      </div>
    </footer>
  );
}
