import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaMapMarkerAlt, FaPhone, FaEnvelope,  } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import './ApplicationForm.scss';
import { message } from "antd"; // ✅ Add this import at the top

const DillangzoAcademyForm = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    gender: '',
    
    // Contact Information
    email: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    address: '',
    city: '',
    nationality: 'Pakistan',
    
    // Language Preferences
    languagesToLearn: [],
    preferredSchedule: '',
    currentLevel: '',
    
    // Additional Information
    hearAbout: ''
  });

  const nationalities = [
    'Pakistan', 'India', 'China', 'Turkey', 'Germany', 
    'Saudi Arabia', 'USA', 'UK', 'UAE', 'Other'
  ];

  const languages = [
    'German',
    'Turkish',
    'English',
    'Arabic',
    'Chinese',
    'French',
    'Spanish',
    'Japanese',
    'Korean',
    'Russian'
  ];

  const proficiencyLevels = [
    'Beginner',
    'Elementary',
    'Intermediate',
    'Upper Intermediate',
    'Advanced',
    'Native'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedLanguages = checked 
        ? [...formData.languagesToLearn, value]
        : formData.languagesToLearn.filter(language => language !== value);
      
      setFormData(prev => ({
        ...prev,
        languagesToLearn: updatedLanguages
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Stops page reload immediately
  
    try {
      const response = await fetch("https://dillangzo-backend.vercel.app/api/dillangzoForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        message.success("✅ Form submitted successfully to DILLANGZO Academy!");
        // ✅ Reset form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: null,
          gender: '',
          email: '',
          phoneNumber: '',
          alternatePhoneNumber: '',
          address: '',
          city: '',
          nationality: 'Pakistan',
          languagesToLearn: [],
          preferredSchedule: '',
          currentLevel: '',
          hearAbout: ''
        });
      } else {
        message.error("❌ Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("❌ Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="dillangzo-form-container">
      {/* Academy Contact Header */}
      <div className="academy-contact-header">
        <div className="academy-contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <strong>Office #4, 1st Floor, Pak Plaza</strong>
              <span>Main PWD Double Road, Block D, Islamabad</span>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <strong>Phone: 0092 341 13 18 185</strong>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <strong>Email: Dillangzoacademy@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="form-header">
        <h1>DILLANGZO ACADEMY</h1>
        <p>Application for Admission</p>
        <p className="academy-tagline">Learn German, Turkish, English, Arabic & More!</p>
        <p className="form-instruction">Please complete each section correctly</p>
      </div>

      <form onSubmit={handleSubmit} className="academy-form">
        {/* Basic Information */}
        <section className="form-section">
          <h2>Basic Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <DatePicker
                selected={formData.dateOfBirth}
                onChange={(date) => setFormData(prev => ({ ...prev, dateOfBirth: date }))}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select your date of birth"
                className="date-picker block-letters"
                required
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={50}
                maxDate={new Date()}
              />
            </div>

            <div className="form-group">
              <label>Gender *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>Male</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  <span>Female</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleInputChange}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="form-section">
          <h2>Contact Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="+92 300 1234567"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
              <input
                type="tel"
                id="alternatePhoneNumber"
                name="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}
                onChange={handleInputChange}
                placeholder="Optional alternate number"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Nationality *</label>
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
                className="block-letters"
              >
                {nationalities.map(nationality => (
                  <option key={nationality} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Full Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your complete address"
                className="block-letters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="Your city"
                className="block-letters"
              />
            </div>
          </div>
        </section>

        {/* Language Learning Preferences */}
        <section className="form-section">
          <h2>Language Learning Preferences</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label className="languages-label">Which languages do you want to learn? *</label>
              <div className="languages-grid">
                {languages.map(language => (
                  <label key={language} className="language-checkbox">
                    <input
                      type="checkbox"
                      value={language}
                      checked={formData.languagesToLearn.includes(language)}
                      onChange={handleInputChange}
                    />
                    <span className="language-name">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="currentLevel">Current Proficiency Level *</label>
              <select
                id="currentLevel"
                name="currentLevel"
                value={formData.currentLevel}
                onChange={handleInputChange}
                required
                className="block-letters"
              >
                <option value="">Select your level</option>
                {proficiencyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredSchedule">Preferred Schedule</label>
              <select
                id="preferredSchedule"
                name="preferredSchedule"
                value={formData.preferredSchedule}
                onChange={handleInputChange}
                className="block-letters"
              >
                <option value="">Select preferred time</option>
                <option value="Morning">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening">Evening (6 PM - 9 PM)</option>
                <option value="Weekend">Weekend Classes</option>
                <option value="Flexible">Flexible Timing</option>
              </select>
            </div>

            
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Register for Language Course
          </button>
          <p className="form-note">
            We'll contact you within 24 hours to discuss your language learning journey!
          </p>
        </div>
      </form>

      {/* Academy Footer */}
     
     
    </div>
  );
};

export default DillangzoAcademyForm;