import { motion } from "framer-motion";
import {
  PenTool, Terminal, Scissors, Compass,
  Layers, MessageSquare, Film, BookOpen, ChevronRight
} from "lucide-react";
import { C, FONTS } from "../theme";

const CAREERS = [
  { title: "AI Content Creator", icon: PenTool },
  { title: "Prompt Engineer", icon: Terminal },
  { title: "AI Video Editor", icon: Scissors },
  { title: "Creative Strategist", icon: Compass },
  { title: "Generative Designer", icon: Layers },
  { title: "Social Media AI Specialist", icon: MessageSquare },
  { title: "AI Motion Graphics Artist", icon: Film },
  { title: "Digital Storyteller", icon: BookOpen }
];

const HIGHLIGHTS = [
  "Latest AI Tools & Techniques",
  "Industry-Relevant Projects",
  "Hands-on Practical Training",
  "Portfolio Development",
  "Creative Mentorship",
  "Future-Ready Curriculum",
  "AI Integrated Learning",
  "Career Support & Guidance"
];

// Derived directly from CAREERS — powers the console readout, no invented copy.
const FEED = CAREERS.slice(0, 4).map(c => c.title.toLowerCase().replace(/\s+/g, "_"));

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

export default function CareersHighlights() {
  return (
    <section
      className="relative overflow-hidden border-t border-b py-20 sm:py-28"
      style={{
        backgroundColor: C.inkSoft,
        borderColor: `${C.panelBorder}33`,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }

        .career-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .career-card:hover {
          border-color: ${C.gold} !important;
          box-shadow: 0 12px 30px rgba(244, 185, 3, 0.08) !important;
        }
        .career-card:hover .career-icon-box {
          background-color: ${C.gold} !important;
          border-color: ${C.gold} !important;
        }
        .career-card:hover .career-icon {
          color: #1C1D1C !important;
        }

        .console-grid {
          background-image:
            linear-gradient(${C.panelBorder}1a 1px, transparent 1px),
            linear-gradient(90deg, ${C.panelBorder}1a 1px, transparent 1px);
          background-size: 26px 26px;
        }

        .console-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.18); }

        .blink-cursor {
          display: inline-block;
          width: 6px; height: 12px;
          background: ${C.gold};
          margin-left: 4px;
          animation: blink 1.1s steps(1) infinite;
          vertical-align: -2px;
        }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .blink-cursor { animation: none; opacity: 1; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.gold}0c 0%, transparent 70%)`,
          top: "-10%",
          right: "-5%"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* SECTION 1: CAREER ROSTER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pb-16 border-b"
          style={{ borderColor: `${C.panelBorder}33` }}
        >
          <motion.div variants={fadeInUp} className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-3" style={{ color: C.gold }}>
                // EVOLVING LANDSCAPE
              </span>
              <h2
                className="text-3xl sm:text-[2.75rem] font-bold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
              >
                Careers of the <span style={{ color: C.gold }}>Future</span>
              </h2>
            </div>
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: C.slateLight }}>
              {String(CAREERS.length).padStart(2, "0")} roles tracked
            </span>
          </motion.div>

          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {CAREERS.map((car, idx) => {
                const Icon = car.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="career-card group relative rounded-2xl p-4 sm:p-6 border flex flex-col justify-between overflow-hidden cursor-pointer"
                    style={{ 
                      borderColor: C.panelBorder, 
                      backgroundColor: C.panel,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.01)"
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div 
                        className="career-icon-box flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border transition-all duration-300"
                        style={{ borderColor: C.panelBorder, backgroundColor: "rgba(244, 185, 3, 0.05)" }}
                      >
                        <Icon size={15} className="career-icon transition-colors duration-300" style={{ color: C.gold }} />
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs font-bold" style={{ color: C.slateLight }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="my-0.5 sm:my-1">
                      <h3 
                        className="text-[13px] sm:text-[16px] font-bold tracking-tight transition-colors group-hover:text-yellow-600"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                      >
                        {car.title}
                      </h3>
                    </div>

                    {/* Interactive hover bg highlight */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at 100% 100%, rgba(244, 185, 3, 0.03) 0%, transparent 60%)`,
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: COURSE HIGHLIGHTS & CONSOLE */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 pt-16 sm:pt-24 items-stretch">

          {/* Left Column: Course Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-3" style={{ color: C.slateLight }}>
                SYLLABUS CORE
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
              >
                Course <span style={{ color: C.gold }}>Highlights</span>
              </h3>
            </motion.div>

            <motion.ul variants={staggerContainer} className="grid sm:grid-cols-2 gap-x-8">
              {HIGHLIGHTS.map((hl, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-baseline gap-3 py-3.5 border-b"
                  style={{ borderColor: C.panelBorder }}
                >
                  <span className="font-mono text-[11px]" style={{ color: C.gold }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] sm:text-[14.5px]" style={{ color: C.slateLight }}>
                    {hl}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Console signature element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border overflow-hidden flex flex-col"
            style={{ borderColor: `${C.panelBorder}33`, backgroundColor: `${C.panel}55` }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3 border-b shrink-0"
              style={{ borderColor: `${C.panelBorder}33` }}
            >
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="font-mono text-[10px] ml-2 tracking-wider" style={{ color: C.slateLight }}>
                apcc://curriculum.engine
              </span>
            </div>

            <div className="console-grid relative flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[380px] px-6 py-10">
              <motion.img
                src="/robot.png"
                alt="APCC AI Creative Robot"
                className="relative z-10 w-[190px] sm:w-[250px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 font-mono text-[10px] sm:text-[11px] leading-relaxed">
                {FEED.map((line, i) => (
                  <div key={i} style={{ color: i === FEED.length - 1 ? C.gold : C.slateLight }}>
                    &gt; loading_{line}
                    {i === FEED.length - 1 && <span className="blink-cursor" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM METRIC BAR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: `${C.panelBorder}33` }}
        >
          <div className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase" style={{ color: C.gold }}>
            144 Hours &bull; AI Integrated &bull; Project Based
          </div>
          <span
            className="text-[11px] tracking-[0.3em] font-mono uppercase"
            style={{ color: C.slateLight }}
          >
            Create the <span style={{ color: C.paper }}>Future</span> with AI.
          </span>
        </motion.div>

      </div>
    </section>
  );
}