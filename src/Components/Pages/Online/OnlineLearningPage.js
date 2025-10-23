import React from "react";
import { motion } from "framer-motion";
import "./OnlineLearningPage.scss";

export default function OnlineLearningPage() {
  return (
    <section className="online-learning-page">
      <div className="content-container">
        {/* Image Section Animation */}
        <motion.div
          className="image-side"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/3/8/7/504387_shutterstock_16d76998306_487275.jpg"
            alt="Online Learning"
          />
        </motion.div>

        {/* Text Section Animation */}
        <motion.div
          className="text-side"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1>
            <span>Dillangzo</span> Language Academy
          </h1>
          <p className="intro">
            Welcome to <strong>Dillangzo International Language Academy</strong> — where global communication begins.
            We empower learners to master new languages with confidence, connecting cultures and creating opportunities worldwide.
          </p>

          <p>
            Our online learning system blends innovation and interaction — combining expert instructors,
            real-time sessions, and immersive digital tools. Whether you’re preparing for international exams
            or enhancing professional communication, Dillangzo offers flexible, world-class language education
            designed around your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
