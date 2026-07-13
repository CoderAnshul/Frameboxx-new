import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Calendar, Layers, Briefcase, 
  Terminal, ShieldCheck, Cpu, ChevronRight 
} from "lucide-react";
import { C, FONTS } from "../theme";

const LEARNING_OBJECTIVES = [
  "Create content specifically for Instagram, YouTube, Facebook and other digital platforms",
  "Understand platform-based content behavior and audience engagement",
  "Write structured scripts for short-form content",
  "Shoot and compose mobile-first videos",
  "Edit high-retention videos",
  "Use AI tools to accelerate production",
  "Publish optimized content"
];

const PLATFORMS = [
  "Instagram (Reels)",
  "YouTube (Shorts)",
  "Facebook (Reels & Videos)"
];

const SPECS = [
  { label: "Aspect Ratio", val: "9:16 (Vertical)" },
  { label: "Resolution", val: "1080 × 1920 (Full HD)" },
  { label: "Format", val: "MP4" },
  { label: "Frame Rate", val: "30 fps" }
];

const TIMELINE = [
  {
    week: "Week 1–2",
    phase: "Foundations",
    topics: ["Content basics", "Platform understanding", "Manual scripting"]
  },
  {
    week: "Week 3–4",
    phase: "AI Introduction",
    topics: ["ChatGPT usage", "Canva basics", "Idea → script refinement"]
  },
  {
    week: "Week 5–6",
    phase: "Production Basics",
    topics: ["Mobile shooting", "CapCut editing", "Subtitles & pacing"]
  },
  {
    week: "Week 7–8",
    phase: "AI Visual Pipeline",
    topics: ["Leonardo AI", "Midjourney", "Kling", "Seedance", "Visual storytelling"]
  },
  {
    week: "Week 9–10",
    phase: "Structured Output",
    topics: [
      "Full video creation",
      "Ai Audio creation – Eleven Labs",
      "Hook optimization",
      "Content polishing",
      "Exporting video for various platforms"
    ]
  },
  {
    week: "Week 11–12",
    phase: "FINAL PROJECT",
    topics: ["Daily production", "Faculty mentoring & Reviews", "Final submission"]
  }
];

const TOOLS = [
  { category: "Content & Scripting", list: ["ChatGPT"] },
  { category: "Design & Visuals", list: ["Canva", "Midjourney", "Leonardo AI", "Kling", "Seedance"] },
  { category: "Video Creation & Editing", list: ["CapCut"] }
];

const PORTFOLIO = [
  "2–3 high-quality short-form videos",
  "1 personal branding video",
  "1 AI-assisted storytelling project"
];

const PLACEMENTS = [
  {
    domain: "Digital & Social Media Agencies",
    roles: ["Social media marketing agencies", "Content production studios"]
  },
  {
    domain: "Media & Production Houses",
    roles: ["YouTube channels", "OTT support teams (assist roles)"]
  },
  {
    domain: "Brands & Startups",
    roles: ["In-house content teams", "Marketing departments"]
  },
  {
    domain: "Freelancing Platforms",
    roles: ["Instagram content creation", "YouTube editing gigs", "Brand collaboration content"]
  }
];

const TABS = [
  {
    id: "overview",
    num: "01",
    label: "Syllabus Overview",
    sub: "Objective, Platforms & Delivery specs"
  },
  {
    id: "roadmap",
    num: "02",
    label: "Academic Roadmap",
    sub: "12-Week progression & hour breakups"
  },
  {
    id: "outcomes",
    num: "03",
    label: "Tools & Careers",
    sub: "Tech-stack, Portfolio & Placement"
  }
];

const tabTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
};

export default function CurriculumOverview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section
      className="relative border-t border-b py-16 sm:py-20"
      style={{
        backgroundColor: C.inkSoft,
        borderColor: C.panelBorder,
        fontFamily: "'Inter', sans-serif",
        overflow: "clip"
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        
        .studio-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .studio-layout {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 4rem;
          }
        }
        
        .tab-menu-item {
          border-bottom: 1px solid ${C.panelBorder}33;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tab-menu-item:hover {
          background-color: rgba(92, 73, 179, 0.04);
        }
        .tab-menu-item.active {
          border-left: 3px solid ${C.gold};
          background-color: ${C.panel}66;
        }
        
        .hud-card {
          background-color: ${C.panel}33;
          border: 1px solid ${C.panelBorder}33;
          transition: all 0.3s ease;
        }
        .hud-card:hover {
          border-color: ${C.gold}33;
          background-color: ${C.panel}55;
        }
        
        .crosshair {
          position: absolute;
          color: ${C.gold};
          opacity: 0.35;
          font-family: monospace;
          font-size: 14px;
          pointer-events: none;
        }
        
        .sticky-sidebar {
          position: relative;
        }
        @media (min-width: 1024px) {
          .sticky-sidebar {
            position: sticky;
            top: 30px;
            align-self: start;
          }
        }
        
        .glow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${C.gold};
          box-shadow: 0 0 10px ${C.gold};
        }
      `}</style>

      {/* Decorative glows */}
      <div 
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full" 
        style={{
          background: `radial-gradient(circle, ${C.gold}04 0%, transparent 70%)`,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* CROSSHAIRS */}
        <span className="crosshair -top-3.5 -left-3.5">+</span>
        <span className="crosshair -top-3.5 -right-3.5">+</span>
        <span className="crosshair -bottom-3.5 -left-3.5">+</span>
        <span className="crosshair -bottom-3.5 -right-3.5">+</span>

        {/* HERO TITLE HEADER */}
        <div className="mb-12 border-b pb-8" style={{ borderColor: C.panelBorder }}>
          <span className="text-[10px] tracking-[0.3em] font-mono block mb-2" style={{ color: C.gold }}>
            // ACADEMIC FRAMEWORK
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
          >
            APCC: AI-Powered <span style={{ color: C.gold }}>Content Creation</span>
          </h2>
        </div>

        {/* STUDIO LAYOUT SPLIT */}
        <div className="studio-layout items-start">
          
          {/* LEFT COLUMN: NAVIGATION CONSOLE TABS */}
          <div className="sticky-sidebar flex flex-col border rounded-2xl overflow-hidden" style={{ borderColor: C.panelBorder, backgroundColor: `${C.panel}22` }}>
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: C.panelBorder, backgroundColor: `${C.panel}44` }}>
              <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: C.slateLight }}>
                SELECT MODULE PANEL
              </span>
              <span className="font-mono text-[10px]" style={{ color: C.gold }}>
                v1.0.4
              </span>
            </div>
            
            <div className="flex flex-col">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-menu-item text-left p-5 flex items-start gap-4 cursor-pointer outline-none ${isActive ? "active" : ""}`}
                  >
                    <span 
                      className="font-mono text-xs font-bold pt-0.5" 
                      style={{ color: isActive ? C.gold : C.slateLight }}
                    >
                      {tab.num}
                    </span>
                    <div>
                      <h3 
                        className="text-sm sm:text-base font-bold tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: isActive ? C.paper : C.slateLight }}
                      >
                        {tab.label}
                      </h3>
                      <p className="text-[11px] mt-0.5" style={{ color: C.slateLight }}>
                        {tab.sub}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="px-5 py-4 border-t flex items-center gap-3 font-mono text-[10px]" style={{ borderColor: C.panelBorder }}>
              <span className="glow-dot" />
              <span style={{ color: C.slateLight }}>MODULE TYPE: 144 HOURS TRAINING</span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CONTENT STAGE */}
          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Objective */}
                  <div className="hud-card p-5 sm:p-6 rounded-2xl">
                    <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3.5" style={{ color: C.gold }}>
                      COURSE OBJECTIVE
                    </span>
                    <p className="text-[15px] sm:text-[16px] leading-relaxed mb-4" style={{ color: C.paper }}>
                      This program is designed to develop practical content creation skills using AI-assisted workflows for real-world digital platforms.
                    </p>
                    
                    <span className="font-mono text-[11px] tracking-wider uppercase block mb-3" style={{ color: C.slateLight }}>
                      Students will learn to:
                    </span>
                    <ul className="space-y-2.5">
                      {LEARNING_OBJECTIVES.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[13.5px] sm:text-[14px] leading-relaxed" style={{ color: C.slateLight }}>
                          <span className="font-mono text-[10px] pt-0.5" style={{ color: C.gold }}>&gt;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms & Specifications */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="hud-card p-5 rounded-xl">
                      <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: C.gold }}>
                        PLATFORMS COVERED
                      </span>
                      <ul className="space-y-2">
                        {PLATFORMS.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold" style={{ color: C.paper }}>
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: C.gold }} />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider block border-t pt-2 mt-3" style={{ borderColor: `${C.panelBorder}33`, color: C.slateLight }}>
                        Focus: Short-form + mobile-first content
                      </span>
                    </div>

                    <div className="hud-card p-5 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-2" style={{ color: C.gold }}>
                          CONTENT DELIVERY SPECIFICATIONS
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold uppercase block mb-3" style={{ color: C.paper }}>
                          Standard Format (All Platforms)
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] font-mono">
                        {SPECS.map((spec, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg border" style={{ borderColor: `${C.panelBorder}22`, backgroundColor: `${C.panel}33` }}>
                            <span className="block text-[10px]" style={{ color: C.slateLight }}>{spec.label}</span>
                            <span className="block font-semibold mt-0.5" style={{ color: C.gold }}>{spec.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "roadmap" && (
                <motion.div
                  key="roadmap"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Timeline Cards */}
                  <div className="hud-card p-5 sm:p-6 rounded-2xl">
                    <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-5" style={{ color: C.gold }}>
                      WEEK-WISE ACADEMIC FLOW
                    </span>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {TIMELINE.map((w, idx) => (
                        <div key={idx} className="p-3 border rounded-xl" style={{ borderColor: `${C.panelBorder}22`, backgroundColor: `${C.panel}33` }}>
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="font-mono text-xs sm:text-[13px] font-bold" style={{ color: C.gold }}>{w.week}</span>
                            <span className="text-xs sm:text-[13px] font-bold uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}>{w.phase}</span>
                          </div>
                          <ul className="space-y-0.5">
                            {w.topics.map((t, i) => (
                              <li key={i} className="text-xs sm:text-[13px] flex items-center gap-1.5" style={{ color: C.slateLight }}>
                                <ChevronRight size={8} style={{ color: C.gold }} />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Class Hours Breakup & Delivery Models */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="hud-card p-5 rounded-xl">
                      <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: C.gold }}>
                        CLASS BREAKUP (HOURS)
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase block mb-2" style={{ color: C.slateLight }}>
                        TOTAL STRUCTURE (3 MONTHS)
                      </span>
                      <div className="space-y-1.5 font-mono text-xs sm:text-[13px]">
                        {[
                          { col1: "Theory", col2: "60 hrs" },
                          { col1: "Practical", col2: "60 hrs" },
                          { col1: "Project Submission", col2: "24 hrs" }
                        ].map((row, idx) => (
                          <div key={idx} className="flex justify-between py-0.5 border-b" style={{ borderColor: `${C.panelBorder}11` }}>
                            <span style={{ color: C.slateLight }}>{row.col1}</span>
                            <span className="font-semibold" style={{ color: C.paper }}>{row.col2}</span>
                          </div>
                        ))}
                        <div className="flex justify-between pt-1.5 font-bold" style={{ color: C.gold }}>
                          <span>TOTAL</span>
                          <span>144 Hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="hud-card p-5 rounded-xl">
                      <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: C.gold }}>
                        WEEKLY DELIVERY MODEL
                      </span>
                      <div className="space-y-3 text-xs sm:text-[13px]">
                        <div>
                          <span className="font-bold uppercase block mb-1 text-xs sm:text-[13px]" style={{ color: C.paper }}>
                            Structure (Week 1–10)
                          </span>
                          <div className="pl-2 border-l" style={{ borderColor: C.gold }}>
                            <span className="block font-semibold" style={{ color: C.paper }}>1 Hour &rarr; Theory (Every Day)</span>
                            <span className="block font-semibold" style={{ color: C.paper }}>1 Hour &rarr; Practical (Every Day)</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-bold uppercase block mb-1 text-xs sm:text-[13px]" style={{ color: C.paper }}>
                            Structure (Week 11–12)
                          </span>
                          <div className="pl-2 border-l" style={{ borderColor: C.gold }}>
                            <span className="block font-semibold" style={{ color: C.paper }}>2 Hours &rarr; Project creation and reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "outcomes" && (
                <motion.div
                  key="outcomes"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Tools covered */}
                  <div className="hud-card p-5 sm:p-6 rounded-2xl">
                    <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: C.gold }}>
                      TOOLS & SOFTWARES COVERED
                    </span>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {TOOLS.map((tGroup, idx) => (
                        <div key={idx} className="p-3 border rounded-xl" style={{ borderColor: `${C.panelBorder}22`, backgroundColor: `${C.panel}33` }}>
                          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider block mb-2" style={{ color: C.slateLight }}>
                            {tGroup.category}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {tGroup.list.map((t) => (
                              <span key={t} className="text-xs sm:text-[13px] px-2.5 py-1 rounded border font-semibold" style={{ borderColor: C.panelBorder, backgroundColor: C.ink, color: C.paper }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio & Placement */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="hud-card p-5 rounded-xl">
                      <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3" style={{ color: C.gold }}>
                        PORTFOLIO OUTPUT
                      </span>
                      <ul className="space-y-2">
                        {PORTFOLIO.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold" style={{ color: C.paper }}>
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: C.gold }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hud-card p-5 rounded-xl">
                      <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-3.5" style={{ color: C.gold }}>
                        PLACEMENT INDUSTRIES
                      </span>
                      <div className="space-y-2">
                        {PLACEMENTS.map((p, idx) => (
                          <div key={idx} className="border-b pb-1.5 last:border-b-0" style={{ borderColor: `${C.panelBorder}11` }}>
                            <h4 className="text-xs sm:text-[13.5px] font-bold uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.gold }}>
                              {p.domain}
                            </h4>
                            <span className="text-[11px] sm:text-xs leading-tight block" style={{ color: C.slateLight }}>
                              {p.roles.join(", ")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
