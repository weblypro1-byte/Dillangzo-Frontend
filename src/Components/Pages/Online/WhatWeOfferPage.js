import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaVideo, FaUsers, FaWhatsapp, FaYoutube, FaLaptop } from "react-icons/fa";
import "./WhatWeOfferPage.scss";

const offers = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Google Classrooms (Video)",
    description: "Interactive virtual classes powered by Google Classroom — structured, accessible, and flexible for every learner."
  },
  {
    icon: <FaVideo />,
    title: "Zoom Classrooms / Feedback Sessions (Video)",
    description: "Live sessions that encourage collaboration, personalized mentoring, and real-time feedback from instructors."
  },
  {
    icon: <FaUsers />,
    title: "Connecting Teachers, Parents & Learners (Video)",
    description: "Bridging communication via WhatsApp, Facebook, and other platforms — ensuring everyone stays informed and engaged."
  },
  {
    icon: <FaWhatsapp />,
    title: "Sharing Work via WhatsApp, Portal & GDrive (Video)",
    description: "Effortless content sharing through integrated digital channels for seamless learning and collaboration."
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Learning (Video)",
    description: "Access to curated video content by expert educators to enhance classroom learning and revision."
  },
  {
    icon: <FaLaptop />,
    title: "Video Lessons by TSS Team (Video)",
    description: "Professionally produced video lectures offering top-quality guidance from certified language instructors."
  }
];

export default function WhatWeOfferPage() {
  return (
    <section className="what-we-offer-page">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.h1>

      <div className="offer-grid">
        {offers.map((offer, index) => (
          <motion.div
            className="offer-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon-box">{offer.icon}</div>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
