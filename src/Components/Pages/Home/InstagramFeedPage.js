




// import React from "react";
// import "./InstagramFeedPage.scss";

// const images = [
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/438172646_753949923550773_8576723921727088966_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/441139265_752778700334562_3500905679221352429_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/438160302_751603703785395_5143518272028381495_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/440962267_749866760625756_3422290210258480595_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/440962267_749866760625756_3422290210258480595_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/440962267_749866760625756_3422290210258480595_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/440962267_749866760625756_3422290210258480595_nfull.jpg" },
//   { src: "https://aspirecolleges.edu.pk/wp-content/uploads/sb-instagram-feed-images/440962267_749866760625756_3422290210258480595_nfull.jpg" },
// ];

// export default function InstagramFeedPage() {
//   return (
//     <section className="instagram-feed">
//       <div className="container">
//         <div className="feed-title">
//           <h2>Check out our Instagram</h2>
//         </div>

//         <div className="feed-header">
//           <img
//             src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760757687/WhatsApp_Image_2025-10-18_at_8.09.48_AM_elxc1n.jpg"
//             alt="Aspire Colleges"
//             className="feed-logo"
//           />
//           <div className="feed-info">
//             <h3>Aspire Colleges</h3>
//             <h4>@DILLANGZOACADEMY</h4>
//           </div>
//         </div>

//         <div className="feed-grid">
//           {images.map((item, index) => (
//             <div key={index} className="feed-item">
//               <img src={item.src} alt={`post-${index}`} />
//               <div className="overlay">
//                 <i className="fa-brands fa-instagram"></i>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="feed-footer">
//           <button className="follow-btn">
//             <i className="fa-brands fa-instagram"></i> Follow on Instagram
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


















import React from "react";
import "./HeroSection.scss";

const languages = [
  { name: "English", icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png" },
  { name: "Spanish", icon: "https://cdn-icons-png.flaticon.com/512/197/197593.png" },
  { name: "German", icon: "https://cdn-icons-png.flaticon.com/512/197/197571.png" },
  { name: "French", icon: "https://cdn-icons-png.flaticon.com/512/197/197560.png" },
  { name: "Italian", icon: "https://cdn-icons-png.flaticon.com/512/197/197626.png" },
  { name: "Arabic", icon: "https://cdn-icons-png.flaticon.com/512/197/197604.png" },
  { name: "Turkish", icon: "https://cdn-icons-png.flaticon.com/512/197/197518.png" },
  { name: "Portuguese", icon: "https://cdn-icons-png.flaticon.com/512/197/197463.png" },
  { name: "Japanese", icon: "https://cdn-icons-png.flaticon.com/512/197/197604.png" },
  { name: "Chinese", icon: "https://cdn-icons-png.flaticon.com/512/197/197375.png" },
];

const LanguagesSection = () => {
  return (
    <section className="languages-section">
      <div className="content">
        <h1>
          Join millions of learners <br /> breaking the language barrier every day
        </h1>

        <div className="languages">
          {languages.map((lang, i) => (
            <button className="lang-btn" key={i}>
              <img src={lang.icon} alt={lang.name} className="flag-icon" />
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-image">
        <img
          src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1760859527/WhatsApp_Image_2025-10-19_at_12.35.05_PM_mopgzb.jpg"
          alt="Footer visual"
        />
      </div>

      {/* Flaticon Attribution */}
      <div className="attribution">
        <a href="https://www.flaticon.com/free-icons/germany" title="germany icons"></a>
        <a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons"></a>
        <a href="https://www.flaticon.com/free-icons/spain" title="spain icons"></a>
        <a href="https://www.flaticon.com/free-icons/flags" title="flags icons"></a>
        <a href="https://www.flaticon.com/free-icons/turkey" title="turkey icons"></a>
        <a href="https://www.flaticon.com/free-icons/saudi-arabia" title="saudi arabia icons"></a>
      </div>
    </section>
  );
};

export default LanguagesSection;