// import React from "react";
// import "./AdmissionRulesPage.scss";
// import { FaCheckCircle } from "react-icons/fa";

// export default function AdmissionRulesPage() {
//   const rules = [
//     "Concurrent admission at any other institution is not allowed.",
//     "Admission obtained on false documentation is liable to disciplinary action.",
//     "Students must be respectful to the faculty, administrative staff and fellow students.",
//     "Any political activity or indecent behavior in or around the campus is a punishable offense.",
//     "Students must carry ID cards on the campuses and at official functions.",
//     "All students are required to follow the dress code.",
//     "Students must clear their dues before appearing in mid-term and final examinations; failure to do so will prevent them from appearing.",
//     "In case a student does not maintain 3.0 CGPA in a semester, his/her fee scholarship will be terminated.",
//     "No makeup assignments, quizzes, and presentations are allowed after due dates unless permission is granted by the teacher.",
//     "Semester dues are non-refundable and non-transferable for any reason."
//   ];

//   return (
//     <section className="admission-rules-page">
//       <div className="container">
//         <div className="rules-content">
//           <div className="text-section">
//             <p className="overview">OVERVIEW</p>
//             <h2>Admission Rules & Regulations</h2>
//             <ul>
//               {rules.map((rule, index) => (
//                 <li key={index}>
//                   <FaCheckCircle className="icon" />
//                   {rule}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="image-section">
//             <div className="image-wrapper">
//               <img
//                 src="https://www.superiorcolleges.edu.pk/wp-content/uploads/2023/07/loving-life-in-campus1-1-1.jpg"
//                 alt="Admission Rules"
//               />
//               <div className="play-button">
//                 <span>&#9658;</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















import React, { useState } from "react";
import "./AdmissionRulesPage.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function AdmissionRulesPage() {
  const [showVideo, setShowVideo] = useState(false);

 const rules = [
  "Students may not be enrolled in any other language program during their active course at Dillangzo.",
  "All registration information must be accurate and genuine — false or incomplete documentation will result in cancellation of admission.",
  "Respect towards instructors, coordinators, and fellow learners is essential in all online classes and discussion forums.",
  "Any form of inappropriate behavior, offensive language, or political activity during classes will lead to disciplinary action.",
  "Each student will receive a unique digital ID — sharing or misuse of login credentials is strictly prohibited.",
  "Regular attendance is required to maintain enrollment and eligibility for certification.",
  "Assignments, quizzes, and speaking tasks must be submitted before deadlines unless prior permission is granted by the instructor.",
//   "Students must maintain consistent progress and a minimum performance standard to retain any scholarship or discount.",
  "Tuition fees must be cleared before assessments or certifications; unpaid dues may restrict access to classes or exams.",
  "All course fees are non-refundable and non-transferable once the course has commenced.",
];


  return (
    <section className="admission-rules-page">
      <div className="container">
        <div className="rules-content">
          <div className="text-section">
            <p className="overview">OVERVIEW</p>
            <h2>Admission Rules & Regulations</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>
                  <FaCheckCircle className="icon" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="image-section">
            <div className="image-wrapper">
              <img
                src="https://media.skilldeer.com/550x450/d3624f983a55b6ff8a5f7cf0ee2105f38bc11fc9.png"
                alt="Admission Rules"
              />
              <div className="play-button" onClick={() => setShowVideo(true)}>
                <span>&#9658;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== Video Modal ==== */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
  src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1796694334366045%2F&show_text=false&width=560&t=0"
  width="500"
  height="280"
  style={{ border: "none", overflow: "hidden" }}
  scrolling="no"
  frameBorder="0"
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  title="Facebook Video"
   >
</iframe>

            <button className="close-btn" onClick={() => setShowVideo(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
