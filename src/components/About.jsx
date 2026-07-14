import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { C, FONTS } from "../theme";

const HIGHLIGHTS = [
  "All-in-One Curriculum",
  "Learn from Industry Experts",
  "100% Practical Learning",
  "Master Tools & Platforms",
  "Career-Focused Training",
  "Campus Immersion",
  "AI & Automation Modules",
  "Certification & Internship",
  "Resume & LinkedIn Review",
  "Freelance & Agency Opportunities",
];

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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, revealed];
}

/* ---------------------------------------------------------
   Left: image, framed with an offset gold card behind it
--------------------------------------------------------- */
function ProgramImage({ revealed }) {
  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateX(0)" : "translateX(-16px)",
      }}
    >
      <div
        className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${C.deepPurple}, ${C.butter})` }}
        aria-hidden
      />
      <div
        className="relative rounded-3xl overflow-hidden aspect-[4/5]"
        style={{ border: `1px solid ${C.panelBorder}` }}
      >
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
          alt="Student learning digital marketing on a laptop"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, transparent 55%, rgba(28,27,27,0.55) 100%)` }}
        />
        <div
          className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ backgroundColor: `${C.ink}cc`, border: `1px solid ${C.panelBorder}33`, backdropFilter: "blur(6px)" }}
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 pc-pulse" style={{ backgroundColor: C.gold }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: C.gold }} />
          </span>
          <span
            className="text-[10.5px] tracking-[0.1em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: C.paper }}
          >
            LIVE COHORT IN SESSION
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Right: highlights as a verification checklist
--------------------------------------------------------- */
function HighlightRow({ text, i, revealed }) {
  return (
    <li
      className="flex items-center gap-3 py-3.5 transition-all duration-500"
      style={{
        borderTop: i === 0 ? "none" : `1px solid ${C.panelBorder}33`,
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(10px)",
        transitionDelay: `${i * 70}ms`,
      }}
    >
      <span
        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${C.deepPurple}, ${C.butter})` }}
      >
        <CheckCircle2 size={13} style={{ color: "#1C1D1C" }} strokeWidth={2.5} />
      </span>
      <span className="text-[14.5px]" style={{ color: C.paper, fontFamily: "'Inter', sans-serif" }}>
        {text}
      </span>
    </li>
  );
}

function HighlightsPanel({ revealed }) {
  const left = HIGHLIGHTS.slice(0, 5);
  const right = HIGHLIGHTS.slice(5);

  return (
    <div
      className="rounded-3xl p-7 sm:p-9 lg:p-10"
      style={{
        backgroundColor: C.ink,
        border: `1px solid ${C.panelBorder}`,
        boxShadow: "0 12px 30px -10px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span style={{ color: C.paper }}>Key</span>{" "}
          <span style={{ color: C.gold }}>Highlights</span>
        </h2>
        <span
          className="text-[11px] tracking-[0.12em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slateLight }}
        >
          {HIGHLIGHTS.length}/{HIGHLIGHTS.length} VERIFIED
        </span>
      </div>

      <div
        className="h-[3px] w-14 rounded-full mb-3"
        style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.butter})` }}
      />

      {/* verification progress bar */}
      <div className="h-1 w-full rounded-full overflow-hidden mb-7" style={{ backgroundColor: C.panel }}>
        <div
          className="h-full rounded-full transition-all duration-[1400ms] ease-out"
          style={{
            background: `linear-gradient(90deg, ${C.gold}, ${C.butter})`,
            width: revealed ? "100%" : "0%",
          }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-x-10">
        <ul>
          {left.map((h, i) => (
            <HighlightRow text={h} i={i} key={h} revealed={revealed} />
          ))}
        </ul>
        <ul>
          {right.map((h, i) => (
            <HighlightRow text={h} i={i} key={h} revealed={revealed} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Main export
--------------------------------------------------------- */
export default function AboutProgram() {
  const [ref, revealed] = useReveal();

  return (
    <section ref={ref} className="relative" style={{ backgroundColor: C.inkSoft }}>
      <style>{`
        ${FONTS}
        .ap * { box-sizing: border-box; }
        .pc-pulse { animation: pcPulse 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes pcPulse {
          0% { transform: scale(1); opacity: 0.75; }
          75%, 100% { transform: scale(2.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-pulse { animation: none !important; }
        }
      `}</style>

      <div className="ap px-5 sm:px-10 lg:px-14 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* left: image + about copy */}
          <div>
            <ProgramImage revealed={revealed} />

            <div className="mt-10 lg:mt-12">
              <span
                className="text-[11px] tracking-[0.18em]"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
              >
                ABOUT
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
              >
                The Program
              </h2>
              <div
                className="h-[3px] w-14 rounded-full mb-5"
                style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.butter})` }}
              />
              <p className="text-[15px] leading-relaxed max-w-md" style={{ color: C.slateLight }}>
                Digital marketing is the modern way of promoting brands, products,
                and services through online channels like search engines, social
                media, email, websites, and mobile apps. Unlike traditional
                marketing, it offers real-time data, global reach, and targeted
                customer engagement.
              </p>
            </div>
          </div>

          {/* right: highlights console */}
          <HighlightsPanel revealed={revealed} />
        </div>
      </div>
    </section>
  );
}