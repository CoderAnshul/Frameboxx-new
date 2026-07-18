import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import WhyAPCC from "../components/WhyAPCC";
import CurriculumOverview from "../components/CurriculumOverview";
import CareersHighlights from "../components/CareersHighlights";
import ToolsSyllabus from "../components/ToolsSyllabus";
import CreativeWorkflow from "../components/CreativeWorkflow";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import TestimonialsReel from "../components/Testimonials";
import { C } from "../theme";

export default function AiHomepage({ isNested = false }) {
  const curriculumRef = useRef(null);
  const navigate = useNavigate();

  const handleViewCurriculum = () => {
    curriculumRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookDemo = () => {
    if (isNested) {
      const formElement = document.querySelector('input[placeholder="Your full name"]');
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "center" });
        formElement.focus();
        return;
      }
    }
    // Navigate to homepage and scroll to demo form
    navigate("/", { state: { scrollToForm: true } });
  };

  return (
    <div style={{ backgroundColor: C.inkSoft, minHeight: isNested ? "auto" : "100vh" }}>
      {/* Hero section containing navbar and live dashboard */}
      <Hero
        currentMode="ai"
        onToggleMode={() => navigate("/")}
        onViewCurriculum={handleViewCurriculum}
        onBookDemo={handleBookDemo}
        hideNavbar={isNested}
      />

      <WhyAPCC />
      
      <CareersHighlights />
      <ToolsSyllabus />
      <CreativeWorkflow />
       <Gallery/>
      <TestimonialsReel/>
      {!isNested && <Footer />}
    </div>
  );
}
