import React, { useState, useEffect } from "react";
import "./HeroSectionPage.scss";

export default function HeroSectionPage() {
  const slides = [
    { bg: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1761126998/1_ry79dp.png" },
    { bg: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1761130002/New_Arrivals_Fashion_Brand_Website_Homepage_Banner_ruumye.png" },
    { bg: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760628405/5_i9ouls.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
    >
      <div className="overlay"></div>
     

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
