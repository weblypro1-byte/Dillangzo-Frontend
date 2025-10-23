// // src/Components/Pages/Home/BannerPage.jsx
// import React from "react";
// import "./BannerPage.scss";

// // Import your banner images
// import banner1 from "../../images/b1.webp";
// import banner2 from "../../images/b2.webp";
// import banner3 from "../../images/b3.webp";

// export default function BannerPage() {
//   return (
//     <section className="banner-page">
//       <div className="banner-row">
//         <img src={banner1} alt="Banner 1" className="banner-img" />
//         <img src={banner3} alt="Banner 3" className="banner-img" />
//         <img src={banner2} alt="Banner 2" className="banner-img" />
        
//       </div>
//     </section>
//   );
// }











// src/Components/Pages/Home/BannerPage.jsx
import React from "react";
import "./BannerPage.scss";

// Import your banner images
// import banner1 from "../../images/b1.webp";


export default function BannerPage() {
  const banners = [
{
    image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760859550/WhatsApp_Image_2025-10-19_at_11.45.31_AM_u8qsv9.jpg",
    title: "Academy Program",
  },
     {
    image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760852524/2_vebvyo.png",
    title: "Academy Program",
  },
    {
    image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1761103241/Purple_Modern_Coding_Class_Information_Instagram_Post_ruujor.png",
    title: "Academy Program",
  },
  ];

  return (
    <section className="banner-page">
      <div className="banner-row">
        {banners.map((item, index) => (
          <div className="banner-img" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="banner-text">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
