import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import { C } from "../theme";
import About from "../components/About";
import Learning from "../components/Learning";
import Gallery from "../components/Gallery";
import TestimonialsReel from "../components/Testimonials";
import AiHomepage from "./AiHomepage";
import BrandCollaboration from "../components/BrandCollaboration";
import Footer from "../components/Footer";

export default function Homepage() {
  const curriculumRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewCurriculum = () => {
    curriculumRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookDemo = () => {
    const formElement = document.querySelector('input[placeholder="Your full name"]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      formElement.focus();
    }
  };

  useEffect(() => {
    if (location.state?.scrollToForm) {
      // Clear location state so it doesn't scroll again on refresh
      navigate(location.pathname, { replace: true, state: {} });
      // Scroll to the form
      setTimeout(() => {
        const formElement = document.querySelector('input[placeholder="Your full name"]');
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "center" });
          formElement.focus();
        }
      }, 100);
    }
  }, [location, navigate]);

  return (
    <div style={{ backgroundColor: C.inkSoft, minHeight: "100vh" }}>
      {/* Hero section containing navbar and live dashboard */}
      
      <Hero
        currentMode="marketing"
        onToggleMode={() => navigate("/ai")}
        onViewCurriculum={handleViewCurriculum}
        onBookDemo={handleBookDemo}
      />
      <WhySection />
      <About/>
      <div ref={curriculumRef} id="digital-marketing-curriculum">
        <Learning />
      </div>
      <Gallery/>
      <TestimonialsReel/>

      {/* Separation Section */}
      <div className="relative py-16 flex flex-col items-center justify-center overflow-hidden">
        {/* Line divider */}
        <div className="w-full max-w-7xl px-5 sm:px-10 flex items-center gap-4">
          <div className="h-[1px] flex-1" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ borderColor: C.panelBorder, backgroundColor: C.panel }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot" style={{ backgroundColor: C.gold }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: C.gold }} />
            </span>
            <span style={{ fontSize: "11px", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em", color: C.paper }}>
              AI CONTENT CREATION TRACK
            </span>
          </div>
          <div className="h-[1px] flex-1" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>

      <AiHomepage isNested={true} />
      <Footer />
    </div>
  );
}
