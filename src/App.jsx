import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GraphicsInfo from "./pages/GraphicsInfo";
import VideoInfo from "./pages/VideoInfo";
import ContentInfo from "./pages/ContentInfo";
import WebInfo from "./pages/WebInfo";
import AppInfo from "./pages/AppInfo";
import UIInfo from "./pages/UIInfo";
import InfluencerInfo from "./pages/InfluencerInfo";
import MetaAndGoogleAdsInfo from "./pages/MetaAndGoogleAdsInfo";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FF80]">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/services/graphics" element={<GraphicsInfo />} />
          <Route path="/services/video" element={<VideoInfo />} />
          <Route path="/services/content" element={<ContentInfo />} />
          <Route path="/services/web" element={<WebInfo />} />
          <Route path="/services/app" element={<AppInfo />} />
          <Route path="/services/ui" element={<UIInfo />} />
          <Route path="/services/influencer" element={<InfluencerInfo />} />
          <Route path="/services/meta" element={<MetaAndGoogleAdsInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
