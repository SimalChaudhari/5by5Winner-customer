import React from "react";
import HeroSection from "../components/HeroSection";
import StepsSection from "../components/StepsSection";
import YouTubeSection from "../components/YouTubeSection";
import CallToActionSection from "../components/CallToActionSection";
import TrustSection from "../components/TrustSection";
import FAQSection from "../components/FAQSection";
import PaymentSection from "../components/PaymentSection";

function Home() {
  return (
    <div>
      <div className="relative bg-theme-gradient overflow-hidden min-h-screen">
        {/* Decorative Dots */}
        <div className="absolute inset-0">
          <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
          <div className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-30 top-60 left-60 animate-ping"></div>
          <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
          <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
        </div>

        <HeroSection />
      </div>
      {/* Sections */}
      <StepsSection />
      <YouTubeSection />
      <CallToActionSection />
      <TrustSection />
      <FAQSection />
      <PaymentSection />
    </div>
  );
}

export default Home;
