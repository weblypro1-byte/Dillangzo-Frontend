

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Components
import Navbar from "./Components/Pages/Home/Navbar";
import BannerPage from "./Components/Pages/Home/BannerPage";
import AboutPage from "./Components/Pages/Home/AboutPage";
import FuturePage from "./Components/Pages/Home/FuturePage";
import WhyAspirePage from "./Components/Pages/Home/WhyAspirePage";
import FounderMessagePage from "./Components/Pages/Home/FounderMessagePage";
import GallerySliderPage from "./Components/Pages/Home/GallerySliderPage";
import EnquiryFormPage from "./Components/Pages/Contact/EnquiryFormPage";
import InstagramFeedPage from "./Components/Pages/Home/InstagramFeedPage";
import HeroSectionPage from "./Components/Pages/Home/HeroSectionPage";
import ContactInfoPage from "./Components/Pages/Contact/ContactInfoPage";
import ContactHeroPage from "./Components/Pages/Contact/ContactHeroPage";
import LocationPage from "./Components/Pages/Contact/LocationPage";
import AboutHeroPage from "./Components/Pages/About/AboutHeroPage";
import CoursesHeroPage from "./Components/Pages/Courses/CoursesHeroPage";
import Courses from "./Components/Pages/Courses/Courses";

import AdmissionsHeroPage from "./Components/Pages/Admission/AdmissionsHeroPage";
import AdmissionRulesPage from "./Components/Pages/Admission/AdmissionRulesPage";
import RulesCategoryPage from "./Components/Pages/Admission/RulesCategoryPage";
import AdmissionsPage from "./Components/Pages/Admission/AdmissionsPage";
import Footer from "./Components/Pages/Home/footer";
import OnlineLearningHeroPage from "./Components/Pages/Online/OnlineLearningHeroPage";
import OnlineLearningPage from "./Components/Pages/Online/OnlineLearningPage";
import WhatWeOfferPage from "./Components/Pages/Online/WhatWeOfferPage";
import Ielts from "./Components/Pages/Online/ielts";
import PTEAcademicCourse from "./Components/Pages/Courses/Details/PTEAcademicCourse";
import IELTSSkills from "./Components/Pages/Courses/Details/IELTS skils";

import TOEFLPage from "./Components/Pages/Courses/Details/TOEFLPreparationCourse";
import DuolingoEnglishTestCourse from "./Components/Pages/Courses/Details/DuolingoEnglishTestCourse";
import LanguageCertESOLSpeakingCourse 
  from "./Components/Pages/Courses/Details/LanguageCertESOLSpeakingCourse";
import TurkishLanguageCourse from "./Components/Pages/Courses/Details/TurkishLanguageCourse";
import ChineseLanguageCourse from "./Components/Pages/Courses/Details/ChineseLanguageCourse";
import GermanLanguageCourse from "./Components/Pages/Courses/Details/GermanLanguageCourse";
import FrenchLanguageCourse from "./Components/Pages/Courses/Details/📘 FrenchLanguageCourse";
import SpanishLanguageCourse from "./Components/Pages/Courses/Details/SpanishLanguageCourse";
import ArabicLanguageCourse from "./Components/Pages/Courses/Details/ArabicLanguageCourse";
import AboutUs from "./Components/Pages/About/Aboutpage";
import ScrollToTop from "./Components/ScrollToTop";
import Corevalue from "./Components/Pages/About/Corevalue";


import ApplicationForm from "./Components/Pages/Contact/ApplicationForm";
import Cou from "./Components/Pages/Home/Coursersh";
import ScrollToTopButton from './Components/ScrollToTopButton'
















function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ScrollToTopButton />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <HeroSectionPage />
              <BannerPage />
              <AboutPage />
              <FuturePage />
              <WhyAspirePage />
              <FounderMessagePage />
              <Cou/>
              <GallerySliderPage />
              <EnquiryFormPage />
              <InstagramFeedPage />
              
            </>
          }
        />

        {/* Individual Routes */}
        <Route path="/about" element={
          <>
          <AboutHeroPage/>
          <AboutPage />
                    <Corevalue/>

          <AboutUs />
          
          </>
          } />
        <Route path="/future" element={<FuturePage />} />
        <Route path="/why-aspire" element={<WhyAspirePage />} />
        <Route path="/founder-message" element={<FounderMessagePage />} />
        <Route path="/gallery" element={<GallerySliderPage />} />
        <Route path="/enquiry" element={<EnquiryFormPage />} />
        <Route path="/instagram" element={<InstagramFeedPage />} />

        <Route
  path="/contact"
  element={
    <>
      <ContactHeroPage />
      <ContactInfoPage />
      <LocationPage />
      {/* <ApplicationForm /> */}
    </>
  }
/>
<Route path="/courses" element={
  <>
  <CoursesHeroPage />
  <Courses />
  </>
  } />


  <Route path="/courses/ielts" element={<Ielts  />} />
<Route path="/courses/PTEAcademicCourse" element={<PTEAcademicCourse />} />

<Route path="/courses/IELTSSkills" element={<IELTSSkills />} />
<Route path="/courses/toefl" element={<TOEFLPage />} />
<Route path="/courses/duolingo" element={<DuolingoEnglishTestCourse />} />
<Route path="/courses/languagecert-esol-speaking" 
       element={<LanguageCertESOLSpeakingCourse />} />


<Route path="/courses/turkish-language" element={<TurkishLanguageCourse />} />

<Route path="/courses/chinese-language" element={<ChineseLanguageCourse />} />

<Route path="/courses/german-language" element={<GermanLanguageCourse />} />


<Route path="/courses/french-language" element={<FrenchLanguageCourse />} />

<Route path="/courses/arabic" element={<ArabicLanguageCourse />} />




<Route path="/courses/spanish" element={<SpanishLanguageCourse />} />





{/* <Route path="/courses/duolingo" element={<DuolingoPage />} />
<Route path="/courses/pte-core" element={<PTECorePage />} /> */} 



  <Route path="/admissions" element={
    <>
    <AdmissionsHeroPage />
    <AdmissionRulesPage />
    <RulesCategoryPage />
    <AdmissionsPage />
    </>
    } />



  




    <Route path="/online-learning" element={
      <>
      <OnlineLearningHeroPage />
      <OnlineLearningPage />
      <WhatWeOfferPage />
      </>
      } />


<Route path="/application-form" element={<ApplicationForm />} />

        {/* Fallback (404) */}
        <Route path="*" element={<h2 style={{ textAlign: "center", padding: "2rem" }}>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
















