import { Wand2, ClipboardCheck, Lightbulb } from "lucide-react";
import { C, FONTS } from "../theme";

export default function WhyAPCC() {
  return (
    <section
      className="relative overflow-hidden border-t"
      style={{
        backgroundColor: C.inkSoft,
        borderColor: "rgba(255,255,255,0.06)",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        .aww-card {
          position: relative;
          background-color: ${C.panel}44;
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aww-card:hover {
          background-color: ${C.panel}99;
          border-color: ${C.gold}55;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(245, 193, 49, 0.03);
        }
        .aww-card:hover .icon-container {
          background-color: ${C.gold}22 !important;
          border-color: ${C.gold} !important;
          transform: scale(1.05) rotate(5deg);
        }
        .aww-glow-bg {
          pointer-events: none;
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245, 193, 49, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          top: -250px;
          left: -250px;
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

      {/* Decorative glows */}
      <div className="aww-glow-bg" style={{ top: "10%", left: "10%" }} />
      <div className="aww-glow-bg" style={{ bottom: "10%", right: "10%", background: `radial-gradient(circle, rgba(245, 193, 49, 0.03) 0%, transparent 70%)` }} />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_1.3fr] border-l border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        
        {/* Left Column: Heading & Paragraphs */}
        <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="relative">
            {/* Corner Crosshairs */}
            <span className="crosshair -top-2.5 -left-2.5">+</span>
            
            {/* Subtle category label */}
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono block mb-6" style={{ color: C.gold }}>
              // APCC PROGRAM INITIATIVE
            </span>

            <h2
              className="text-[10vw] sm:text-[44px] font-bold leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
            >
              The Future of
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${C.gold}, ${C.butter})` }}>
                Content Creation
              </span>
              <br />
              Starts Here
            </h2>

            <div className="mt-10 space-y-6">
              <p
                className="text-[14px] sm:text-[15px] leading-relaxed"
                style={{ color: "#c9c7c5" }}
              >
                AI is transforming the creative industry faster than ever before.
                From social media and branding to video production and digital
                storytelling, creators today need smarter workflows, stronger
                ideas and future-ready skills.
              </p>

              <p
                className="text-[14px] sm:text-[15px] leading-relaxed border-l-2 pl-4"
                style={{ color: "#c9c7c5", borderColor: C.gold }}
              >
                <span className="font-semibold" style={{ color: C.paper }}>
                  APCC — AI Powered Content Creation
                </span>{" "}
                is designed to equip aspiring creators, designers, editors and
                marketers with industry-relevant AI tools and creative techniques
                that redefine content creation.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t font-mono text-[10px] tracking-wider flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
            <span style={{ color: C.slateLight }}>CURRICULUM v1.0</span>
            <span style={{ color: C.gold }}>UID AFFILIATED</span>
          </div>
        </div>

        {/* Right Column: Why APCC Different Grid */}
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20 relative">
          {/* Corner Crosshairs */}
          <span className="crosshair -top-2.5 -right-2.5">+</span>
          <span className="crosshair -bottom-2.5 -left-2.5">+</span>

          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono block mb-3" style={{ color: C.slateLight }}>
              DIFFERENTIATORS
            </span>
            
            <h3
              className="text-xl sm:text-2xl font-semibold tracking-tight uppercase mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
            >
              What Makes APCC Different?
            </h3>

            <div className="grid gap-6">
              {/* Card 1 */}
              <div className="aww-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="icon-container flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#1e1d1c" }}
                >
                  <Wand2 size={24} style={{ color: C.gold }} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-[0.04em] uppercase font-mono" style={{ color: C.gold }}>
                    AI-FIRST CREATIVE LEARNING
                  </h4>
                  <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed" style={{ color: "#a5a3a1" }}>
                    Learn how modern creators use AI to accelerate creativity and production.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="aww-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="icon-container flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#1e1d1c" }}
                >
                  <ClipboardCheck size={24} style={{ color: C.gold }} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-[0.04em] uppercase font-mono" style={{ color: C.gold }}>
                    HANDS-ON PROJECTS
                  </h4>
                  <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed" style={{ color: "#a5a3a1" }}>
                    Work on practical assignments and build an impressive portfolio.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="aww-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="icon-container flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#1e1d1c" }}
                >
                  <Lightbulb size={24} style={{ color: C.gold }} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-[0.04em] uppercase font-mono" style={{ color: C.gold }}>
                    INDUSTRY-READY SKILLS
                  </h4>
                  <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed" style={{ color: "#a5a3a1" }}>
                    Develop creative workflows aligned with the future of digital media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
