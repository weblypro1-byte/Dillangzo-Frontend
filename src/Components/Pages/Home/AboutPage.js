// import React from "react";
// import "./AboutPage.scss";

// export default function AboutPage() {
//   return (
//     <section className="about-page">
//       <div className="about-container">
//         {/* Left Text Section */}
//         <div className="about-content">
//           <h3 className="about-subtitle">ABOUT</h3>
//           <h1 className="about-title">
//             <span className="highlight-red">Aspire</span>{" "}
//             <span className="highlight-yellow">Group Of Colleges</span>
//           </h1>
//           <p>
//             ASPIRE is an educational institution that, <strong>in just 7 years</strong>, 
//             has expanded from 8 campuses to a comprehensive, multi-campus organization 
//             with over 250,000 students. Renowned for impactful research, exceptional 
//             student experiences and an inclusive atmosphere, we now rank among the 
//             <strong> top 3 colleges.</strong> Our significant growth is fueled by 
//             our commitment to actively contribute to local, national, and global communities.
//           </p>
//           <button className="read-more-btn">READ MORE</button>
//         </div>

//         {/* Right Image Section */}
//         <div className="about-image-section">
//           <div className="image-frame">
//             <img
//               src="https://aspirecolleges.edu.pk/wp-content/uploads/2023/12/campas-banner.jpg"
//               alt="Aspire College Building"
//             />
//           </div>
//           <div className="founded-card">
//             <div className="icon">🎓</div>
//             <p className="founded-text">FOUNDED IN</p>
//             <h2 className="founded-year">2016</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React from "react";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Left Text Section */}
       <div className="about-content">
  <h3 className="about-subtitle">ABOUT</h3>
  <h1 className="about-title">
    <span className="highlight-red">Dillangzo</span>{" "}
    <span className="highlight-yellow">International Language Academy</span>
  </h1>
  <p>
    <span className="highlight-yellow">Dillangzo International Language Academy</span> 
    is a leading institution dedicated to empowering students with world-class
    linguistic skills and cultural understanding. In a short span, we have grown
    into a dynamic language academy recognized for our innovative teaching methods,
    immersive learning environments, and commitment to excellence in global communication.
  </p>
  <p>
    Our academy offers a wide range of international language programs designed to help
    learners achieve fluency and confidence. With experienced instructors, interactive
    sessions, and a supportive atmosphere, we ensure every student develops both
    proficiency and a deeper appreciation for cultural diversity.
  </p>
  <button className="read-more-btn">READ MORE</button>
</div>

        {/* Right Image Section */}
        <div className="about-image-section">
          <div className="image-frame">
            <img
              src="https://www.towson.edu/news/images/honors-college-move-m.jpg"
              alt="Aspire College Building"
            />
          </div>

          <div className="founded-card">
            <div className="icon">🎓</div>
            <p className="founded-text">FOUNDED IN</p>
            <h2 className="founded-year">2016</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
