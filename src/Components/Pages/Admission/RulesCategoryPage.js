import React from "react";
import { motion } from "framer-motion";
import "./RulesCategoriesPage.scss";
import { FaIdBadge, FaClipboardList, FaCalendarCheck } from "react-icons/fa";

export default function RulesCategoriesPage() {
  const cards = [
    {
      title: "Fine Rules and Regulations",
      icon: <FaIdBadge />,
      bgColor: "#2E2E2E", // dark gray
      iconBg: "#D4AF37", // gold
      textColor: "#fff",
    },
    {
      title: "General Discipline Rules and Regulations",
      icon: <FaClipboardList />,
      bgColor: "#C0C0C0", // silver
      iconBg: "#D4AF37",
      textColor: "#2E2E2E",
    },
    {
      title: "Leave Procedure",
      icon: <FaCalendarCheck />,
      bgColor: "#D4AF37", // gold
      iconBg: "#2E2E2E", // dark gray
      textColor: "#fff",
    },
  ];

  return (
    <section className="rules-categories-page">
      <div className="rules-container">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="rule-card"
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transition: { type: "spring", stiffness: 180 },
            }}
          >
            <motion.div
              className="icon"
              style={{ backgroundColor: card.iconBg }}
              whileHover={{
                rotate: [0, 8, -8, 0],
                transition: { duration: 0.6 },
              }}
            >
              {card.icon}
            </motion.div>
            <h3>{card.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
