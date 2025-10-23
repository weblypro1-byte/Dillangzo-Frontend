


import React, { useState } from "react";
import "./EnquiryFormPage.scss";

export default function EnquiryFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    startYear: "",
    studyLevel: "",
    terms: false,
    contactBy: false,
    updates: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://dillangzo-backend.vercel.app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Your enquiry has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          destination: "",
          startYear: "",
          studyLevel: "",
          terms: false,
          contactBy: false,
          updates: false,
        });
      } else {
        setMessage("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="enquiry-section">
      <div className="form-container">
        <div className="form-content">
          <h2>We Can Help You</h2>
          <p>
            Enter your details and one of our expert counsellors will reach out
            to you to connect you to the right course, university, or scholarship.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

          <div className="row">
  <input
    type="email"
    name="email"
    placeholder="Email address*"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>


            <div className="row">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                <option value="">Preferred Course</option>
                <option>IELTS</option>
<option>PTE</option>
<option>Turkish Language</option>
<option>Chinese Language</option>
<option>German Language</option>
<option>Arabic Language</option>
<option>French Language</option>
<option>Spanish Language</option>
              </select>
            </div>

            <div className="row">
              <select
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                required
              >
                <option value="">year</option>
                <option>2025</option>
                <option>2026</option>
              </select>

              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
              >
                <option value="">Preferred Study Level</option>
                <option>A1</option>
                <option>B1</option>
                <option>C1</option>
              </select>
            </div>

            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />{" "}
                I agree to the Terms and Admissions Rules*
              </label>
               <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />{" "}
                I agree to reply on Email*
              </label>
             
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Enquire Now"}
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>

        <div className="image-side">
          <img
            src="https://img.freepik.com/free-photo/beautiful-woman-staying-connected-with-internet_329181-3513.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Counsellor"
          />
        </div>
      </div>
    </section>
  );
}