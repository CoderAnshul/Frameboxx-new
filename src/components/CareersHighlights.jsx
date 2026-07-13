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

        .career-row {
          position: relative;
          border-color: ${C.panelBorder}22;
        }
        .career-row--even:hover { background-color: rgba(244, 185, 3, 0.04); }
        .career-row--even:hover .career-icon-box {
          border-color: ${C.gold}55;
          background-color: ${C.gold};
        }
        .career-row--even:hover .career-icon {
          color: ${C.ink} !important;
        }
        .career-row--even:hover .career-chevron {
          transform: translateX(4px);
          color: ${C.gold} !important;
        }

        .career-row--odd:hover { background-color: rgba(92, 73, 179, 0.05); }
        .career-row--odd:hover .career-icon-box {
          border-color: ${C.deepPurple}77;
          background-color: ${C.deepPurple};
        }
        .career-row--odd:hover .career-icon {
          color: ${C.paper} !important;
        }
        .career-row--odd:hover .career-chevron {
          transform: translateX(4px);
          color: ${C.deepPurple} !important;
        }

        .career-row:focus-visible {
          outline: 1px solid ${C.gold};
          outline-offset: -1px;
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
          background: `radial-gradient(circle, ${C.deepPurple}0c 0%, transparent 70%)`,
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

          <div className="border-t" style={{ borderColor: `${C.panelBorder}22` }}>
            {CAREERS.map((car, idx) => {
              const Icon = car.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  tabIndex={0}
                  className={`career-row ${idx % 2 === 0 ? "career-row--even" : "career-row--odd"} grid grid-cols-[2.5rem_2.5rem_1fr_1.25rem] sm:grid-cols-[3.5rem_3rem_1fr_1.5rem] items-center gap-4 sm:gap-6 px-2 sm:px-3 py-5 border-b cursor-pointer transition-colors duration-300 outline-none`}
                >
                  <span className="font-mono text-xs sm:text-sm" style={{ color: C.slateLight }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="career-icon-box flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all duration-300"
                    style={{ borderColor: `${C.panelBorder}33`, backgroundColor: "transparent" }}
                  >
                    <Icon size={16} strokeWidth={1.5} className="career-icon transition-colors duration-300" style={{ color: idx % 2 === 0 ? C.gold : "#8B7AE5" }} />
                  </div>
                  <span
                    className="text-[14.5px] sm:text-base font-semibold tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                  >
                    {car.title}
                  </span>
                  <ChevronRight
                    size={18}
                    className="career-chevron justify-self-end transition-all duration-300"
                    style={{ color: C.slateLight }}
                  />
                </motion.div>
              );
            })}
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
                  style={{ borderColor: `${C.panelBorder}22` }}
                >
                  <span className="font-mono text-[11px]" style={{ color: idx % 2 === 0 ? C.gold : "#8B7AE5" }}>
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