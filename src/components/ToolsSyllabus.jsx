import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Video, Settings, BarChart2, MessageSquare, 
  Terminal, ShieldCheck, Layers, FileText 
} from "lucide-react";
import { C, FONTS } from "../theme";

const TOOLS = [
  { name: "ChatGPT", desc: "LLM & Prompt Logic" },
  { name: "CapCut", desc: "AI Video Editing" },
  { name: "Midjourney", desc: "Gen-AI Art Studio" },
  { name: "Canva", desc: "Brand Asset Layouts" },
  { name: "Leonardo.Ai", desc: "Concept Art Generation" },
  { name: "Runway", desc: "Generative Video Engine" }
];

const STRUCTURE = [
  {
    step: "01",
    title: "FOUNDATION",
    duration: "1 Month / 48 Hours",
    desc: "Learn content basics, storytelling & AI creative tools.",
    icon: Layers
  },
  {
    step: "02",
    title: "PRODUCTION",
    duration: "1 Month / 48 Hours",
    desc: "Create AI-powered videos, visuals & digital content.",
    icon: Video
  },
  {
    step: "03",
    title: "PORTFOLIO DEVELOPMENT",
    duration: "1 Month / 48 Hours",
    desc: "Build industry-ready projects & creative portfolio.",
    icon: FileText
  }
];

const SKILLS = [
  {
    id: "skill-1",
    num: "01",
    title: "AI Visual Generation",
    desc: "Create unique visuals, posters, thumbnails and social media creatives.",
    icon: Sparkles
  },
  {
    id: "skill-2",
    num: "02",
    title: "AI Video Production",
    desc: "Generate reels, promotional videos & cinematic edits.",
    icon: Video
  },
  {
    id: "skill-3",
    num: "03",
    title: "Creative Automation",
    desc: "Automate repetitive creative workflows using AI.",
    icon: Settings
  },
  {
    id: "skill-4",
    num: "04",
    title: "AI Content Strategy",
    desc: "Understand how AI enhances engagement and storytelling.",
    icon: BarChart2
  },
  {
    id: "skill-5",
    num: "05",
    title: "Prompt-Based Creativity",
    desc: "Turn ideas into powerful visual outputs through structured prompting.",
    icon: Terminal
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

export default function ToolsSyllabus() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      className="relative overflow-hidden border-b py-10 sm:py-14"
      style={{
        backgroundColor: C.inkSoft,
        borderColor: C.panelBorder,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        
        .tool-badge {
          background-color: ${C.panel}66;
          border: 1px solid ${C.panelBorder}33;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tool-badge:hover {
          background-color: ${C.panel};
          border-color: ${C.gold}44;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }
        
        .struct-card {
          background-color: ${C.panel}33;
          border: 1px solid ${C.panelBorder}22;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .struct-card:hover {
          background-color: ${C.panel}66;
          border-color: ${C.gold}33;
          transform: translateY(-4px);
        }

        .skill-row {
          border-bottom: 1px solid ${C.panelBorder}33;
          transition: all 0.3s ease;
        }
        .skill-row:hover {
          background-color: rgba(92, 73, 179, 0.04);
          border-bottom-color: ${C.gold}33;
        }
        
        .crosshair {
          position: absolute;
          color: ${C.gold};
          opacity: 0.3;
          font-family: monospace;
          font-size: 14px;
          pointer-events: none;
        }
      `}</style>

      {/* Background glow effects */}
      <div 
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full" 
        style={{
          background: `radial-gradient(circle, rgba(244, 185, 3, 0.05) 0%, transparent 70%)`,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* ================= PART 1: TOOLS OF THE FUTURE ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pb-10 border-b"
          style={{ borderColor: C.panelBorder }}
        >
          <div className="mb-6 text-center relative">
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-3" style={{ color: C.gold }}>
              // CREATIVE PIPELINE INTEGRATION
            </span>
            <h2
              className="text-3xl sm:text-[2.75rem] font-bold tracking-tight uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
            >
              Tools of the <span style={{ color: C.gold }}>Future</span>
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {TOOLS.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="tool-badge rounded-xl p-3.5 text-center flex flex-col gap-1 items-center cursor-pointer"
              >
                <span 
                  className="font-bold text-sm sm:text-base tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                >
                  {tool.name}
                </span>
                <span className="text-[10.5px] uppercase tracking-wider" style={{ color: C.slateLight }}>
                  {tool.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>


        {/* ================= PART 2: COURSE STRUCTURE ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-10 sm:py-12 border-b"
          style={{ borderColor: C.panelBorder }}
        >
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-3" style={{ color: C.slateLight }}>
              TIMELINE & PHASES
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
            >
              Course <span style={{ color: C.gold }}>Structure</span>
            </h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-4"
          >
            {STRUCTURE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="struct-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between min-h-[170px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-sm" style={{ color: C.gold }}>
                        {item.step}
                      </span>
                      <Icon size={16} style={{ color: C.slateLight }} strokeWidth={1.5} />
                    </div>
                    <h4 
                      className="text-base sm:text-lg font-bold tracking-tight mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                    >
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono tracking-wider uppercase block mb-3" style={{ color: C.slateLight }}>
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: C.slateLight }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>


        {/* ================= PART 3: WHAT YOU WILL LEARN ================= */}
        <div className="pt-10 sm:pt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 items-start">
          
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-3" style={{ color: C.slateLight }}>
              LEARNING OUTCOMES
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
            >
              What You <br />
              Will <span style={{ color: C.gold }}>Learn</span>
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed max-w-sm" style={{ color: C.slateLight }}>
              Direct the future of content using cutting-edge models. Master high-demand creative skills across multiple media pipelines.
            </p>
          </div>

          <div className="relative">
            <span className="crosshair -top-3.5 -right-3.5">+</span>
            <span className="crosshair -bottom-3.5 -left-3.5">+</span>

            <div className="flex flex-col">
              {SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                const isHovered = hoveredSkill === skill.id;
                
                return (
                  <div
                    key={skill.id}
                    className="skill-row py-3.5 px-2 flex gap-4 items-start cursor-pointer select-none"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="font-mono text-xs pt-1" style={{ color: isHovered ? C.gold : C.slateLight }}>
                      {skill.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon 
                          size={16} 
                          className="transition-transform duration-300"
                          style={{ 
                            color: isHovered ? C.gold : C.paper,
                            transform: isHovered ? "rotate(10deg)" : "none"
                          }} 
                        />
                        <h4 
                          className="text-[15px] sm:text-base font-semibold tracking-tight transition-colors duration-300"
                          style={{ 
                            fontFamily: "'Space Grotesk', sans-serif", 
                            color: isHovered ? C.gold : C.paper 
                          }}
                        >
                          {skill.title}
                        </h4>
                      </div>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isHovered ? "auto" : 0, 
                          opacity: isHovered ? 1 : 0,
                          marginTop: isHovered ? 8 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[13.5px] leading-relaxed" style={{ color: C.slateLight }}>
                          {skill.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>


        {/* ================= BOTTOM METRIC BAR ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: C.panelBorder }}
        >
          <div className="flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase" style={{ color: C.slateLight }}>
            <ShieldCheck size={14} style={{ color: C.gold }} />
            <span>Real-World Projects</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase" style={{ color: C.slateLight }}>
            <Sparkles size={14} style={{ color: C.gold }} />
            <span>Live Creative Workflows</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase" style={{ color: C.slateLight }}>
            <Layers size={14} style={{ color: C.gold }} />
            <span>Portfolio Development</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
