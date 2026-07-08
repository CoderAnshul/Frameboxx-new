import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import WhyAPCC from "../components/WhyAPCC";
import CurriculumOverview from "../components/CurriculumOverview";
import CareersHighlights from "../components/CareersHighlights";
import ToolsSyllabus from "../components/ToolsSyllabus";
import CreativeWorkflow from "../components/CreativeWorkflow";
import Footer from "../components/Footer";
import { C } from "../theme";

export default function AiHomepage() {
  const curriculumRef = useRef(null);
  const navigate = useNavigate();

  const handleViewCurriculum = () => {
    curriculumRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookDemo = () => {
    // Navigate to homepage and scroll to demo form
    navigate("/", { state: { scrollToForm: true } });
  };

  return (
    <div style={{ backgroundColor: C.inkSoft, minHeight: "100vh" }}>
      {/* Hero section containing navbar and live dashboard */}
      <Hero
        currentMode="ai"
        onToggleMode={() => navigate("/")}
        onViewCurriculum={handleViewCurriculum}
        onBookDemo={handleBookDemo}
      />

      <WhyAPCC />
      <div ref={curriculumRef}>
        <CurriculumOverview />
      </div>
      <CareersHighlights />
      <ToolsSyllabus />
      <CreativeWorkflow />
      <Footer />
    </div>
  );
}
