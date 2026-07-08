import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import { C } from "../theme";
import About from "../components/About";
import Learning from "../components/Learning";
import Gallery from "../components/Gallery";
import TestimonialsReel from "../components/Testimonials";
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
      <div ref={curriculumRef}>
        <Learning />
      </div>
      <Gallery/>
      <TestimonialsReel/>
      <Footer />
    </div>
  );
}
