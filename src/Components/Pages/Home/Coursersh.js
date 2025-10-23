import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AcademyCourses.scss";

const englishCourses = [
  {
    category: "English Proficiency",
    title: "IELTS Academic Course",
    description:
      "Prepare for university studies with our comprehensive IELTS Academic Course. Learn test strategies and improve your skills.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873403/1_sgpnyj.png",
    rating: 5,
    link: "/courses/ielts",
  },
  {
    category: "International Language",
    title: "Turkish Language Course",
    description:
      "Learn Turkish from native speakers and experience one of the most influential languages bridging Europe and Asia.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873424/6_gpucdy.png",
    rating: 5,
    link: "/courses/turkish-language",
  },
  {
    category: "Professional Skill Development",
    title: "Web Development Course",
    description:
      "Master full-stack web development with HTML, CSS, and JavaScript. Build responsive, dynamic websites and gain practical skills.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1761013674/Red_and_Yellow_Bold_Typographic_Youtube_Thumbnail_zwqmx0.png",
    rating: 5,
    link: "/courses/french-language",
  },
];

export default function AcademyCourses() {
  const navigate = useNavigate();
  const handleEnroll = (link) => navigate(link);

  // 👇 Scroll animation logic that repeats
  useEffect(() => {
    const cards = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view"); // remove when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="academy-courses-section py-5">
      <div className="container">
        <p className="section-subtitle">Top Courses</p>
        <h2 className="section-title">Our Courses</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {englishCourses.map((course, idx) => (
            <div key={idx} className="col">
              <div className="course-card shadow-lg rounded-4 overflow-hidden">
                <div className="image-wrapper">
                  <img src={course.img} alt={course.title} />
                  <div className="rating">
                    {[...Array(course.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
                <div className="content">
                  <p className="category">{course.category}</p>
                  <h5 className="title">{course.title}</h5>
                  <p className="description">{course.description}</p>
                  <button
                    className="btn-enroll"
                    onClick={() => handleEnroll(course.link)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

