
























// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./GallerySliderPage.scss";

// export default function GallerySliderPage() {
//   const slides = [
//     {
//       video: "https://www.youtube.com/embed/tgbNymZ7vqY",
//       title: "DILLANGZO LANGUAGE ACADEMY – GLOBAL COMMUNICATION EVENTS",
//     },
//     {
//       video: "https://www.youtube.com/embed/ysz5S6PUM-U",
//       title: "INTERNATIONAL CULTURAL DAY 2024",
//     },
//     {
//       video: "https://www.youtube.com/embed/ScMzIvxBSi4",
//       title: "LANGUAGE EXCELLENCE PROGRAM",
//     },
//     {
//       video: "https://www.youtube.com/embed/sBws8MSXN7A",
//       title: "STUDENT EXCHANGE & LINGUISTIC EXPOSURE",
//     },
//     {
//       video: "https://www.youtube.com/embed/Zv11L-ZfrSg",
//       title: "GLOBAL SPEECH AND DEBATE CONTEST",
//     },
//   ];

//   return (
//     <section className="gallery-slider">
//       <h2 className="section-heading">DILLANGZO ACADEMY Voice</h2>

//       {/* Divider with FA icon */}
//       <div className="divider">
//         <span className="divider-icon">
//           <i className="fa-solid fa-school"></i>
//         </span>
//       </div>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         centeredSlides
//         slidesPerView={1.3}
//         spaceBetween={40}
//         grabCursor
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="custom-swiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="slide-card">
//             <div className="slide-inner">
//               <div className="video-container">
//                 <iframe
//                   src={slide.video}
//                   title={slide.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="slide-overlay">
//                 <h3>{slide.title}</h3>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }























import React, { useRef, useState } from "react";
  import "./AboutUs.scss";

import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ReelSection = () => {
  const videos = [
    { id: 1, src: "https://res.cloudinary.com/dzhbhcteg/video/upload/v1761124398/WhatsApp_Video_2025-10-20_at_21.22.53_7f9b5d53_q83fng.mp4" },
    { id: 2, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1760881491/WhatsApp_Video_2025-10-14_at_7.12.13_PM_ca6o1f.mp4" },
    { id: 3, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1760881497/WhatsApp_Video_2025-10-14_at_7.12.12_PM_acbe0d.mp4" },
    {    id: 4, src: "https://res.cloudinary.com/dzhbhcteg/video/upload/v1761124379/WhatsApp_Video_2025-10-20_at_21.22.54_d7676d76_wcjiu8.mp4" },
    {    id: 5, src: "https://res.cloudinary.com/dzhbhcteg/video/upload/v1761124376/WhatsApp_Video_2025-10-20_at_21.22.54_c812b15c_yedrhc.mp4" },
{id:6, src:"https://res.cloudinary.com/du3tkzdhe/video/upload/v1760881461/WhatsApp_Video_2025-10-14_at_7.12.10_PM_y3izgc.mp4"}
  ];

  const videoRefs = useRef([]);
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(videos.map(() => false));
  const [isMuted, setIsMuted] = useState(videos.map(() => false)); // Volume ON

  const togglePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          if (video.paused) {
            video.play();
            setIsPlaying((prev) => prev.map((_, j) => j === i));
          } else {
            video.pause();
            setIsPlaying((prev) => prev.map(() => false));
          }
        } else {
          video.pause();
        }
      }
    });
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted((prev) => prev.map((muted, i) => (i === index ? !muted : muted)));
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="reel-section">
      <div className="reel-header">
        <h2>Our Students opinions</h2>
        <div className="slider-buttons">
          <button onClick={scrollLeft} className="slide-btn">
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight} className="slide-btn">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="reel-container" ref={sliderRef}>
        {videos.map((video, index) => (
          <div className="reel-card" key={video.id}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              muted={isMuted[index]}
              loop
              playsInline
              className="reel-video"
            />
            <div className="video-overlay">
              <h3>{video.title}</h3>
              <div className="controls">
                <button onClick={() => togglePlay(index)} className="ctrl-btn">
                  {isPlaying[index] ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={() => toggleMute(index)} className="ctrl-btn">
                  {isMuted[index] ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelSection;