// import React, { useState } from "react";
// import "./coreValues.scss";
// import {
//   FaAward,
//   FaHandshake,
//   FaUsers,
//   FaGlobeAmericas,
//   FaLightbulb,
//   FaBookOpen,
//   FaUserGraduate,
// } from "react-icons/fa";

// const CoreValues = () => {
//   const values = [
//     {
//       title: "Excellence",
//       icon: <FaAward />,
//       description:
//         "We strive for the highest standards in teaching, learning, and personal growth.",
//     },
//     {
//       title: "Integrity",
//       icon: <FaHandshake />,
//       description:
//         "We uphold honesty, transparency, and strong moral principles in everything we do.",
//     },
//     {
//       title: "Community Engagement",
//       icon: <FaUsers />,
//       description:
//         "We build strong connections with the community through collaboration and service.",
//     },
//     {
//       title: "Diversity & Inclusion",
//       icon: <FaGlobeAmericas />,
//       description:
//         "We embrace and celebrate the diversity of our students and staff, creating an inclusive and welcoming environment for all.",
//       active: true,
//     },
//     {
//       title: "Lifelong Learning",
//       icon: <FaBookOpen />,
//       description:
//         "We encourage continuous growth, curiosity, and pursuit of knowledge for life.",
//     },
//     {
//       title: "Innovation",
//       icon: <FaLightbulb />,
//       description:
//         "We foster creativity and forward-thinking to inspire progress and new ideas.",
//     },
//     {
//       title: "Student-Centred Approach",
//       icon: <FaUserGraduate />,
//       description:
//         "We prioritize our students’ needs, experiences, and success above all.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(
//     values.findIndex((v) => v.active)
//   );

//   return (
//     <section className="core-values">
//       <h2 className="core-values__title">Our Core Value</h2>
//       <div className="core-values__circle">
//         <div className="core-values__inner">
//           <p>{values[activeIndex].description}</p>
//         </div>

//         {values.map((val, i) => (
//           <div
//             key={i}
//             className={`core-values__item ${i === activeIndex ? "active" : ""}`}
//             style={{ "--i": i }}
//             onMouseEnter={() => setActiveIndex(i)}
//           >
//             <div className="icon">{val.icon}</div>
//             <span>{val.title}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CoreValues;





























import React, { useEffect, useRef } from "react";
import "./MissionVision.scss";

export default function MissionVisionPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;

          // Add animation class when visible
          if (isIntersecting) {
            target.classList.add("in-view");
          } else {
            // Remove class when out of view to re-trigger animation on scroll
            target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 } // adjust visibility trigger sensitivity
    );

    const nodes = el.querySelectorAll(".mv-card");
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="mv-page" ref={containerRef} aria-labelledby="mv-heading">
      <div className="mv-wrap">
        {/* Mission Section */}
        <section className="mv-card mv-mission" aria-labelledby="mission-title">
          <h2 id="mission-title" className="mv-title">OUR MISSION</h2>
          <p className="mv-text">
            Our mission at Dillangzo International Language Academy is to provide high-quality
            education and comprehensive support services that enable students to
            excel academically, develop critical thinking abilities, and
            cultivate essential life skills.
          </p>
        </section>

        {/* Divider */}
        <div className="mv-divider" aria-hidden="true">
          <span className="mv-divider-line" />
          <span className="mv-divider-peak" />
        </div>

        {/* Vision Section */}
        <section className="mv-card mv-vision" aria-labelledby="vision-title">
          <h2 id="vision-title" className="mv-title">OUR VISION</h2>
          <p className="mv-text">
            Our vision is to empower students to achieve their full potential
            and become future leaders in their chosen fields. We strive to
            create a dynamic and inclusive learning environment that fosters
            excellence, innovation, and personal growth.
          </p>
        </section>
      </div>
    </main>
  );
}
