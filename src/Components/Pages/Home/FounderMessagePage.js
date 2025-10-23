import React from "react";
import "./FounderMessagePage.scss";
import founderImg from "../../images/f2.webp"; // adjust path as needed


export default function FounderMessagePage() {
  return (
    <section className="founder-message">
      <div className="container">
        <div className="text-content">
          <h2 className="section-title">Founder & Chairman's Message</h2>
          <p>
  At <span className="highlight">Dillangzo Language Academy</span>, our mission
  is to empower learners with linguistic excellence, cultural understanding, and
  global communication skills. We aim to prepare our students for international
  opportunities by helping them master languages that connect people across
  borders. Our programs encourage active participation in language clubs,
  conversation circles, and cultural exchange activities to enhance fluency,
  confidence, and cross-cultural awareness.
</p>
<p>
  We take pride in providing a supportive and immersive learning environment
  equipped with modern teaching tools and experienced instructors. Through
  interactive classrooms, multimedia resources, and personalized mentoring, we
  ensure that every student achieves proficiency and develops a lifelong passion
  for language learning. Dillangzo Language Academy is committed to shaping
  confident communicators ready to engage with the world.
</p>

          <h3 className="founder-name">Shama Faisal
</h3>
        </div>

       <div className="image-content">
      <img
        src={founderImg}
        alt="Founder speaking"
        className="founder-img"
      />
    </div>
      </div>
    </section>
  );
}
