




// import React from "react";
// import { FaStar } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./FeaturedCourses.scss";

// const englishCourses = [
//   {
//     category: "English Proficiency",
//     title: "IELTS Academic Course",
//     description:
//       "Prepare for university studies with our comprehensive IELTS Academic Course. Learn test strategies and improve your skills.",
//     img: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjdwp1emi8hhfilmltclr_36163eefdf.webp&w=640&q=75",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "PTE Academic",
//     description:
//       "Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and achieve your study abroad goals.",
//     img: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Ftoytsfj47uoc9vupgv3z_0a2261aced.webp&w=640&q=75",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "IELTS Life Skills (A1/B1)",
//     description:
//       "Attain practical language competence with IELTS Life Skills A1/B1. Develop essential communication skills for life abroad.",
//     img: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjvug4umssqgc1shco4fz_2206548737.webp&w=2048&q=75",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "TOEFL iBT Preparation",
//     description:
//       "Master the TOEFL iBT test with expert-led classes and practice sessions designed to boost your reading, writing, speaking, and listening skills.",
//     img: "https://images.pexels.com/photos/5905717/pexels-photo-5905717.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "Duolingo English Test",
//     description:
//       "Achieve your target score in the Duolingo English Test with our adaptive training modules and real-time feedback sessions.",
//     img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "PTE Core Preparation",
//     description:
//       "Enhance your language proficiency with targeted lessons focusing on PTE Core tasks, scoring techniques, and real exam simulations.",
//     img: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",
//     rating: 5,
//     link: "#",
//   },
// ];

// const internationalLanguages = [
//   {
//     category: "International Language",
//     title: "Turkish Language Course",
//     description:
//       "Learn Turkish from native speakers and experience one of the most influential languages bridging Europe and Asia.",
//     img: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "International Language",
//     title: "Chinese Language Course",
//     description:
//       "Master Mandarin Chinese and unlock opportunities across global business, culture, and technology sectors.",
//     img: "https://images.pexels.com/photos/4218708/pexels-photo-4218708.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "International Language",
//     title: "German Language Course",
//     description:
//       "Gain fluency in German with interactive lessons focusing on grammar, vocabulary, and real-life communication.",
//     img: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//   category: "International Language",
//   title: "French Language Course",
//   description:
//     "Develop fluency in French through immersive lessons in speaking, listening, reading, and writing — ideal for study, travel, or career growth.",
//   img: "https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg",
//   rating: 5,
//   link: "#",
// },
// {
//   category: "International Language",
//   title: "Spanish Language Course",
//   description:
//     "Speak Spanish confidently with our structured course focusing on pronunciation, conversational skills, and cultural immersion.",
//   img: "https://images.pexels.com/photos/5940830/pexels-photo-5940830.jpeg",
//   rating: 5,
//   link: "#",
// },
// {
//   category: "International Language",
//   title: "Arabic Language Course",
//   description:
//     "Learn Arabic from professional instructors. Build your vocabulary, master pronunciation, and explore rich Arabic culture and literature.",
//   img: "https://images.pexels.com/photos/5649358/pexels-photo-5649358.jpeg",
//   rating: 5,
//   link: "#",
// },

// ];

// export default function FeaturedCourses() {
//   return (
//     <section className="featured-courses-page py-5">
//       <div className="container">
//         {/* ===== English Courses ===== */}
//         <p className="section-subtitle">TOP COURSES</p>
//         <h2 className="section-title">Our Featured English Courses</h2>

//         <div className="row g-4 mb-5">
//           {englishCourses.map((course, idx) => (
//             <div key={idx} className="col-12 col-md-6 col-lg-4">
//               <div className="course-card shadow-lg rounded-4 overflow-hidden">
//                 <div className="image-wrapper">
//                   <img src={course.img} alt={course.title} />
//                   <div className="rating">
//                     {[...Array(course.rating)].map((_, i) => (
//                       <FaStar key={i} className="star" />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="content">
//                   <p className="category">{course.category}</p>
//                   <h5 className="title">{course.title}</h5>
//                   <p className="description">{course.description}</p>
//                   <a href={course.link} className="btn-enroll">
//                     Enroll Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ===== International Languages ===== */}
//         <p className="section-subtitle">LANGUAGE LEARNING</p>
//         <h2 className="section-title">Other Top International Languages</h2>

//         <div className="row g-4">
//           {internationalLanguages.map((course, idx) => (
//             <div key={idx} className="col-12 col-md-6 col-lg-4">
//               <div className="course-card shadow-lg rounded-4 overflow-hidden">
//                 <div className="image-wrapper">
//                   <img src={course.img} alt={course.title} />
//                   <div className="rating">
//                     {[...Array(course.rating)].map((_, i) => (
//                       <FaStar key={i} className="star" />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="content">
//                   <p className="category">{course.category}</p>
//                   <h5 className="title">{course.title}</h5>
//                   <p className="description">{course.description}</p>
//                   <a href={course.link} className="btn-enroll">
//                     Enroll Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// src/Components/Pages/Courses/FeaturedCourses.js
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedCourses.scss";

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
    category: "English Proficiency",
    title: "PTE Academic",
    description:
      "Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and achieve your study abroad goals.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873396/5_kaolch.png",
    rating: 5,
    link: "/courses/PTEAcademicCourse",
  },
  {
    category: "English Proficiency",
    title: "IELTS Life Skills (A1/B1)",
    description:
      "Attain practical language competence with IELTS Life Skills A1/B1. Develop essential communication skills for life abroad.",
    img: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjvug4umssqgc1shco4fz_2206548737.webp&w=2048&q=75",
    rating: 5,
    link: "/courses/IELTSSkills",
  },
  {
    category: "English Proficiency",
    title: "TOEFL iBT Preparation",
    description:
      "Master the TOEFL iBT test with expert-led classes and practice sessions designed to boost your reading, writing, speaking, and listening skills.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873395/2_hyhdy0.png",
    rating: 5,
    link: "/courses/toefl",
  },
  {
    category: "English Proficiency",
    title: "Duolingo English Test",
    description:
      "Achieve your target score in the Duolingo English Test with our adaptive training modules and real-time feedback sessions.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873400/3_rrobxf.png",
    rating: 5,
    link: "/courses/duolingo",
  },
  {
    category: "English Proficiency",
    title: "Language Cert",
    description:
      "Enhance your language proficiency with targeted lessons focusing on PTE Core tasks, scoring techniques, and real exam simulations.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873401/4_zio61n.png",
    rating: 5,
    link: "/courses/languagecert-esol-speaking",
  },
];

const internationalLanguages = [
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
    category: "International Language",
    title: "Chinese Language Course",
    description:
      "Master Mandarin Chinese and unlock opportunities across global business, culture, and technology sectors.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873486/8_ja1btl.png",
    rating: 5,
    link: "/courses/chinese-language",
  },
  {
    category: "International Language",
    title: "German Language Course",
    description:
      "Gain fluency in German with interactive lessons focusing on grammar, vocabulary, and real-life communication.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873482/7_z21bgs.png",
    rating: 5,
    link: "/courses/german-language",
  },
  {
    category: "Professional Skill Development",
  title: "Web Development Course",
  description:
    "Master full-stack web development with HTML, CSS, JavaScript Build responsive, dynamic websites and gain the skills ",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1761013674/Red_and_Yellow_Bold_Typographic_Youtube_Thumbnail_zwqmx0.png",
    rating: 5,
    link: "/courses/french-language",
  },
  {
    category: "International Language",
    title: "Spanish Language Course",
    description:
      "Speak Spanish confidently with our structured course focusing on pronunciation, conversational skills, and cultural immersion.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873493/10_teze5q.png",
    rating: 5,
    link: "/courses/spanish",
  },
  {
    category: "International Language",
    title: "Arabic Language Course",
    description:
      "Learn Arabic from professional instructors. Build your vocabulary, master pronunciation, and explore rich Arabic culture and literature.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760873490/11_knlqzv.png",
    rating: 5,
    link: "/courses/arabic",
  },
];

export default function FeaturedCourses() {
  const navigate = useNavigate();

  const handleEnroll = (link) => {
    navigate(link);
  };

  return (
    <section className="featured-courses-page py-5">
      <div className="container">
        {/* ===== English Courses ===== */}
        <p className="section-subtitle">TOP COURSES</p>
        <h2 className="section-title">Our Featured English Courses</h2>

        <div className="row g-4 mb-5">
          {englishCourses.map((course, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
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

        {/* ===== International Languages ===== */}
        <p className="section-subtitle">LANGUAGE LEARNING</p>
        <h2 className="section-title">Top International Languages & Computer Courses</h2>

        <div className="row g-4">
          {internationalLanguages.map((course, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
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
