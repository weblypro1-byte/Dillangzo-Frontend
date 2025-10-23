import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./ContactInfoPage.scss";

export default function ContactInfoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://dillangzo-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMsg("✅ Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMsg("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("⚠ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-info-page">
      {/* === Info Boxes === */}
      <div className="info-section">
        <div className="info-card">
          <div className="icon-wrapper">
            <FaMapMarkerAlt />
          </div>
          <h4>Address</h4>
          <p>OFFICE 4 1st Floor Pak Plaza Pwd Main Road Islamabad</p>
        </div>

        <div className="info-card">
          <div className="icon-wrapper">
            <FaPhoneAlt />
          </div>
          <h4>Phone Number</h4>
          <p>
            UAN: 03258470096
 <br />
            Mobile: 0325 8470098
 / 03258470096

          </p>
        </div>

        <div className="info-card">
          <div className="icon-wrapper">
            <FaEnvelope />
          </div>
          <h4>Email Address</h4>
          <p>dillanzo786@gmail.com</p>
        </div>
      </div>

      {/* === Contact Form === */}
      <div className="contact-container">
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMsg && <p className="form-message">{responseMsg}</p>}
        </div>

        <div className="contact-image">
          <img
            src="https://aspirecolleges.edu.pk/wp-content/uploads/2023/12/result-1.png"
            alt="Contact"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}