import { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { C, FONTS } from "../theme";

function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, revealed];
}

export default function BrandCollaboration() {
  const [ref, revealed] = useReveal();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative z-10 overflow-hidden py-16 sm:py-24"
    >
      <style>{`
        ${FONTS}
        .collab-section * { box-sizing: border-box; }
        
        .logo-glow {
          box-shadow: 0 10px 40px -10px rgba(244, 185, 3, 0.15);
          transition: all 0.5s ease;
        }
        .logo-glow:hover {
          box-shadow: 0 15px 50px -5px rgba(244, 185, 3, 0.25);
          transform: translateY(-2px);
        }

        .course-card {
          background-color: ${C.white};
          border: 1px solid ${C.panelBorder};
          box-shadow: 0 8px 30px -8px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .course-card:hover {
          border-color: ${C.gold}55;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .nav-btn {
          background-color: ${C.gold};
          color: #1C1D1C;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background-color: #e0aa03;
          box-shadow: 0 8px 20px -6px rgba(244, 185, 3, 0.4);
          transform: translateY(-1px);
        }
      `}</style>

      {/* Background Decorative Circles */}
      <div 
        className="pointer-events-none absolute rounded-full opacity-20" 
        style={{
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${C.gold}22 0%, transparent 70%)`,
          top: "10%",
          left: "-10%"
        }}
      />
      <div 
        className="pointer-events-none absolute rounded-full opacity-20" 
        style={{
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${C.gold}22 0%, transparent 70%)`,
          bottom: "10%",
          right: "-10%"
        }}
      />

      <div className="collab-section relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Card 1: Digital Marketing */}
          <div 
            className="course-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-700"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "150ms"
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" 
                  style={{ background: `linear-gradient(135deg, rgba(244,185,3,0.1), rgba(244,185,3,0.2))` }}
                >
                  <TrendingUp size={22} style={{ color: C.gold }} />
                </div>
                <div>
                  <span 
                    className="text-[10px] tracking-wider uppercase block"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
                  >
                    Track 01
                  </span>
                  <h3 
                    className="text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                  >
                    Digital Marketing Course
                  </h3>
                </div>
              </div>

              <p 
                className="text-sm leading-relaxed mb-6" 
                style={{ color: C.slateLight }}
              >
                Become a performance-driven marketer. Master advanced search engine optimization (SEO), design high-conversion social media campaigns, run data-backed pay-per-click (PPC) ads, and learn client management by deploying real marketing budgets.
              </p>
            </div>

            <button 
              onClick={() => scrollToSection("digital-marketing-curriculum")}
              className="nav-btn w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>See Curriculum</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: AI Content Creation */}
          <div 
            className="course-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-700"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "300ms"
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" 
                  style={{ background: `linear-gradient(135deg, rgba(244,185,3,0.1), rgba(244,185,3,0.2))` }}
                >
                  <Sparkles size={22} style={{ color: C.gold }} />
                </div>
                <div>
                  <span 
                    className="text-[10px] tracking-wider uppercase block"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
                  >
                    Track 02
                  </span>
                  <h3 
                    className="text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                  >
                    AI Content Creation Course
                  </h3>
                </div>
              </div>

              <p 
                className="text-sm leading-relaxed mb-6" 
                style={{ color: C.slateLight }}
              >
                Leverage generative AI to optimize creative workflows. Learn how to prompt like a professional, generate high-end text and graphics assets, build streamlined video editing pipelines, and curate engaging content optimized for modern social feeds.
              </p>
            </div>

            <button 
              onClick={() => scrollToSection("ai-curriculum")}
              className="nav-btn w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>See Curriculum</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
