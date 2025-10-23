import React from "react";
import { Link } from "react-router-dom";

import "./AdmissionsPage.scss";

export default function AdmissionsPage() {
  return (
    <section className="admissions-page">
      {/* stripes placed behind the content */}
      <div className="stripes">
        <span className="stripe s1" />
        <span className="stripe s2" />
        <span className="stripe s3" />
      </div>

      <div className="admissions-content">
        <h2>ADMISSIONS OPEN</h2>
        <p className="subtitle">Join Dillangzo and be a part of progressing future</p>
<Link to="/application-form">
               <button className="enroll-btn">Enroll Now</button>
             </Link>      </div>
    </section>
  );
}
