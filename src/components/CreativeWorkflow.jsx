import { motion } from "framer-motion";
import { 
  Image, Video, Terminal, Award, 
  Film, Mic, Share2, BookOpen 
} from "lucide-react";
import { C, FONTS } from "../theme";

const WORKFLOWS = [
  { 
    title: "AI Image Creation", 
    desc: "Create stunning visuals using AI-powered tools.", 
    icon: Image 
  },
  { 
    title: "AI Video Generation", 
    desc: "Produce cinematic videos and reels.", 
    icon: Video 
  },
  { 
    title: "Prompt Engineering", 
    desc: "Learn to generate better results through smart prompting.", 
    icon: Terminal 
  },
  { 
    title: "AI Branding & Design", 
    desc: "Design logos, posters & brand creatives using AI.", 
    icon: Award 
  },
  { 
    title: "Motion Graphics & Visual", 
    desc: "Create dynamic motion visuals with creative effects.", 
    icon: Film 
  },
  { 
    title: "AI Audio & Voice", 
    desc: "Generate voiceovers, sound effects & AI audio.", 
    icon: Mic 
  },
  { 
    title: "Social Media Automation", 
    desc: "Automate content workflows for digital platforms.", 
    icon: Share2 
  },
  { 
    title: "Digital Storytelling", 
    desc: "Blend creativity & AI for impactful storytelling.", 
    icon: BookOpen 
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

const cardHover = {
  hover: {
    y: -4,
    borderColor: `${C.gold}77`,
    backgroundColor: "rgba(92, 73, 179, 0.03)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5), 0 0 12px rgba(244, 185, 3, 0.02)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function CreativeWorkflow() {
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
        .wf-card {
          background-color: ${C.panel}33;
          border: 1px solid ${C.panelBorder}33;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Subtle background glow */}
      <div 
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full" 
        style={{
          background: `radial-gradient(circle, rgba(244, 185, 3, 0.04) 0%, transparent 70%)`,
          bottom: "-10%",
          right: "5%"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-8 text-center"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono block mb-2" style={{ color: C.gold }}>
            // MASTERING PRODUCTION PIPELINES
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
          >
            Master the <span style={{ color: C.gold }}>AI Creative Workflow</span>
          </h2>
        </motion.div>

        {/* Workflow Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {WORKFLOWS.map((wf, idx) => {
            const Icon = wf.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                className="wf-card rounded-2xl p-4 sm:p-5 flex flex-col gap-3 items-start cursor-pointer"
                variants={cardHover}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg border"
                  style={{ borderColor: C.panelBorder, backgroundColor: C.ink }}
                >
                  <Icon size={16} style={{ color: C.gold }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 
                    className="text-[13.5px] sm:text-[14px] font-bold tracking-tight mb-1 uppercase"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                  >
                    {wf.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] leading-relaxed" style={{ color: C.slateLight }}>
                    {wf.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
