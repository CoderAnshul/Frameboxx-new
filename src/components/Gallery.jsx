import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Radio } from "lucide-react";

import { C, FONTS } from "../theme";

import img1 from "../assets/bundle/1.jpeg";
import img2 from "../assets/bundle/2.jpeg";
import img3 from "../assets/bundle/3.jpeg";
import img4 from "../assets/bundle/4.jpeg";
import img5 from "../assets/bundle/5.jpeg";
import img6 from "../assets/bundle/6.jpeg";
import img7 from "../assets/bundle/7.jpeg";
import img8 from "../assets/bundle/8.jpeg";
import img9 from "../assets/bundle/9.jpeg";

const IMAGES = [
  { src: img1, label: "Computer Lab", tag: "LAB · GROUND FLOOR" },
  { src: img2, label: "Computer Lab", tag: "LAB · GROUND FLOOR" },
  { src: img3, label: "Wall of Fame", tag: "STUDENT WORK" },
  { src: img4, label: "Classroom Session", tag: "LIVE CLASS" },
  { src: img5, label: "Classroom Session", tag: "LIVE CLASS" },
  { src: img6, label: "Discussion Area", tag: "STUDENT LOUNGE" },
  { src: img7, label: "Counseling Desk", tag: "RECEPTION AREA" },
  { src: img8, label: "Animation Studio", tag: "LAB · FIRST FLOOR" },
  { src: img9, label: "Creative Lounge", tag: "COLLABORATION ZONE" },
];

const AUTOPLAY_MS = 4800;

/* ---------------------------------------------------------
   Slide transition variants — direction-aware
--------------------------------------------------------- */
const variants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 }),
};

export default function ClassroomsGallery() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const total = IMAGES.length;
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  const go = useCallback(
    (dir) => {
      setIndex(([i]) => [(i + dir + total) % total, dir]);
    },
    [total]
  );

  const jump = (i) => {
    setIndex(([cur]) => [i, i > cur ? 1 : -1]);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, go]);

  useEffect(() => {
    const el = sectionRef.current;
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

  const current = IMAGES[index];

  return (
    <>
      <style>{`
        ${FONTS}
        .gallery-section * { box-sizing: border-box; }

        .fade-up { opacity: 0; }
        .in-view .fade-up { animation: galFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes galFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gal-arrow {
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.25s ease, border-color 0.25s ease;
        }
        .gal-arrow:hover { transform: scale(1.08); border-color: ${C.gold}b3; background-color: ${C.gold}1e; }
        .gal-arrow:active { transform: scale(0.96); }

        .gal-thumb {
          transition: border-color 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
          opacity: 0.55;
        }
        .gal-thumb:hover { opacity: 0.85; transform: translateY(-2px); }
        .gal-thumb.active { opacity: 1; border-color: ${C.gold}; }

        .gal-dot {
          transition: width 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease, opacity 0.35s ease;
        }

        .gal-frame-shell {
          scrollbar-width: none;
        }
        .gal-frame-shell::-webkit-scrollbar { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .gal-arrow, .gal-thumb, .gal-dot { animation: none !important; transition: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`gallery-section relative overflow-hidden py-20 sm:py-28 ${revealed ? "in-view" : ""}`}
        style={{ backgroundColor: C.inkSoft }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(560px circle at 90% 0%, ${C.gold}0f, transparent 60%), radial-gradient(480px circle at 0% 100%, ${C.gold}0d, transparent 55%)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
          {/* ---- Header ---- */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <div className="fade-up flex items-center justify-center gap-2.5 mb-3">
              <Radio size={13} style={{ color: C.gold }} />
              <span
                className="text-[11px] tracking-[0.18em]"
                style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
              >
                ON CAMPUS · LIVE TOUR
              </span>
            </div>
            <h2
              className="fade-up font-bold leading-[1.02] tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: C.paper,
                fontSize: "clamp(2rem, 4.2vw, 2.9rem)",
                animationDelay: "0.06s",
              }}
            >
              Our classrooms <span style={{ color: C.gold }}>&amp;</span> labs
            </h2>
          </div>

          {/* ---- Main frame ---- */}
          <div
            className="fade-up relative rounded-2xl overflow-hidden"
            style={{
              animationDelay: "0.12s",
              border: `1px solid ${C.panelBorder}33`,
              boxShadow: "0 30px 70px -25px rgba(0,0,0,0.65)",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/8]" style={{ backgroundColor: C.ink }}>
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 32 }, opacity: { duration: 0.35 } }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -80) go(1);
                    else if (info.offset.x > 80) go(-1);
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={current.src}
                    alt={current.label}
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* slide counter */}
              <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-5 flex items-end justify-end gap-3 z-10">
                <span
                  className="shrink-0 text-[11px] tracking-wide px-2.5 py-1 rounded-full"
                  style={{
                    color: C.gold,
                    border: `1px solid ${C.gold}55`,
                    backgroundColor: "rgba(0,0,0,0.35)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* arrows */}
              <button
                aria-label="Previous image"
                onClick={() => go(-1)}
                className="gal-arrow absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  border: `1px solid ${C.gold}55`,
                }}
              >
                <ChevronLeft size={18} style={{ color: C.paper }} />
              </button>
              <button
                aria-label="Next image"
                onClick={() => go(1)}
                className="gal-arrow absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  border: `1px solid ${C.gold}55`,
                }}
              >
                <ChevronRight size={18} style={{ color: C.paper }} />
              </button>
            </div>
          </div>

          {/* ---- Dots ---- */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => jump(i)}
                className="gal-dot rounded-full"
                style={{
                  height: 6,
                  width: i === index ? 26 : 6,
                  backgroundColor: i === index ? C.gold : `${C.gold}40`,
                }}
              />
            ))}
          </div>

          {/* ---- Thumbnail filmstrip ---- */}
          <div className="gal-frame-shell flex gap-3 mt-7 overflow-x-auto pb-1 -mx-1 px-1">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => jump(i)}
                className={`gal-thumb shrink-0 rounded-lg overflow-hidden ${i === index ? "active" : ""}`}
                style={{
                  width: 92,
                  height: 62,
                  border: `1.5px solid ${i === index ? C.gold : "rgba(255,255,255,0.1)"}`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}