import React from "react";
import "./LocationPage.scss";

export default function LocationPage() {
  return (
    <section className="location-page">
      <div className="map-container">
        <iframe
          title="Dillangzo Language Academy Islamabad Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3313.019108272474!2d73.150893!3d33.574406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzM2LjEiTiA3M8KwMDknNDUuMiJF!5e0!3m2!1sen!2spk!4v169●●●●●"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
