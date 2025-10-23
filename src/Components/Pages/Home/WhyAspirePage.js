






// import React from "react";
// import { FaGraduationCap } from "react-icons/fa";
// import "./WhyAspirePage.scss";

// export default function WhyAspirePage() {
//   const aspireImg =
//     "https://aspirecolleges.edu.pk/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-26-at-7.41.58-PM.jpeg"; // 🔗 replace with your actual image URL

//   return (
//     <section className="why-aspire-page">
//       <div className="content">
//         <div className="text-side">
//           <h3 className="section-title">WHY ASPIRE?</h3>
//           <h1 className="main-heading">
//             <span className="gold">WE HAVE MANY SPECIAL</span>
//             <br />
//             <span className="red">THINGS FOR YOU</span>
//           </h1>
//           <p className="description">
//             Aspire is the first group of colleges that covers about 33% course
//             including 2 monthly tests and send-ups. Provides continuous
//             4-month sessions leading to regular classes, meaning no wastage of
//             time. Teaches special lessons on manners and etiquettes for
//             personality grooming, and facilitates mentoring sessions for high
//             achievement in board exams.
//           </p>
//         </div>

//         <div className="ribbon-section">
//           <div className="ribbon">
//             <FaGraduationCap className="icon" />
//             <span>Academic Excellence</span>
//           </div>
//         </div>

//         <div className="image-side">
//           <div className="card">
//             <img src={aspireImg} alt="Academic Excellence" />
//             <p>
//               The institution focuses on delivering quality education, rigorous
//               curriculum, and innovative teaching methods to ensure students
//               receive a well-rounded education.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











import React, { useState } from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLightbulb,
  FaUniversity,
  FaRunning,
} from "react-icons/fa";
import "./WhyAspirePage.scss";

export default function WhyAspirePage() {
  const features = [
    {
      title: "Academic Excellence",
      icon: <FaGraduationCap />,
      img: "https://www.mhmproperties.com/wp-content/uploads/2023/10/college-student.jpg",
      desc: "Dillangzo Language Academy focuses on delivering quality education, rigorous curriculum, and innovative teaching methods to ensure students excel academically.",
    },
    {
      title: "Expert Faculty",
      icon: <FaChalkboardTeacher />,
      img: "https://www.whu.edu/fileadmin/_processed_/7/6/csm_2_Header_5c31248a9a.jpg",
      desc: "Our highly qualified and passionate instructors guide students with dedication, mentorship, and linguistic expertise.",
    },
    {
      title: "Innovative Learning",
      icon: <FaLightbulb />,
      img: "https://etimg.etb2bimg.com/thumb/122203642.cms?width=400&height=300",
      desc: "We integrate digital tools and creative methodologies that make learning interactive, engaging, and effective.",
    },
    {
      title: "Vibrant Campus Life",
      icon: <FaUniversity />,
      img: "https://plus.unsplash.com/premium_photo-1691962725001-8e9157a933cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eSUyMGxpZmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      desc: "A lively campus filled with clubs, events, and opportunities for leadership, teamwork, and fun experiences.",
    },
    {
      title: "Co-curricular Activities",
      icon: <FaRunning />,
      img: "https://mumsoftheshire.com.au/wp-content/uploads/2022/05/1-1-585x390.png",
      desc: "We believe in the all-round development of our students through sports, arts, and extracurricular excellence.",
    },
  ];

  const [active, setActive] = useState(features[0]);

  return (
    <section className="why-aspire-page">
      <div className="content">
        {/* LEFT SIDE */}
        <div className="text-side">
          <h3 className="section-title">WHY Dillangzo?</h3>
          <h1 className="main-heading">
            <span className="gold">WE HAVE MANY SPECIAL</span>
            <br />
            <span className="red">THINGS FOR YOU</span>
          </h1>
          <p className="description">
            Dillangzo Academy provide an environment where students can reach
            their highest potential through modern education, mentorship, and
            personal growth opportunities.
          </p>

          <div className="feature-boxes">
            {features.map((item) => (
              <div
                key={item.title}
                className={`feature-box ${
                  active.title === item.title ? "active" : ""
                }`}
                onClick={() => setActive(item)}
              >
                <div className="icon">{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="image-side">
          <div className="card slide-in">
            <img src={active.img} alt={active.title} />
            <p>{active.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
