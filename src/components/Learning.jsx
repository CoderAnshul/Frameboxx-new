import { useState, useEffect, useRef, useMemo } from "react";
import { Trophy, CheckCircle2, Sparkles } from "lucide-react";

import { C, FONTS } from "../theme";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const PHASES = [
  {
    lot: "LOT 01",
    hours: "100 HR",
    title: "Social Media & Content Marketing",
    items: [
      "Digital Marketing Fundamentals & Career Scope",
      "Social Media Strategy, Calendar & Engagement",
      "Facebook & Instagram Marketing",
      "Meta Ads (Facebook/Instagram) + Analytics",
      "Email Marketing & Canva for Creators",
    ],
  },
  {
    lot: "LOT 02",
    hours: "100 HR",
    title: "Advanced Digital Marketing & Growth",
    items: [
      "SEO Fundamentals & Strategy",
      "On-Page, Off-Page SEO, Technical SEO & Local SEO",
      "Google Ads & Paid Campaigns",
      "LinkedIn, Twitter (X) & YouTube Marketing",
      "Freelancing, Final Project & Career Prep",
    ],
  },
];

// Read top to bottom, start to finish.
const STEPS = [
  { title: "Start of the Course", tag: "ORIENTATION" },
  { title: "Introduction to Digital Marketing", tag: "FOUNDATIONS" },
  { title: "Fundamentals of Marketing Strategy", tag: "FOUNDATIONS" },
  { title: "Search Engine Optimization (SEO)", tag: "ORGANIC" },
  { title: "Social Media Marketing (SMM)", tag: "SOCIAL" },
  { title: "Content Creation", tag: "SOCIAL" },
  { title: "Search Engine Marketing (SEM)", tag: "PAID" },
  { title: "Content Marketing", tag: "SOCIAL" },
  { title: "Web Analytics & Reporting", tag: "DATA" },
  { title: "Marketing Automation & AI Tools", tag: "DATA" },
  { title: "Video Marketing", tag: "SOCIAL" },
  { title: "Influencer & Affiliate Marketing", tag: "GROWTH" },
  { title: "Local & E-Commerce Marketing", tag: "GROWTH" },
  { title: "Live Projects & Campaign Building", tag: "CAPSTONE" },
];

/* ---------------------------------------------------------
   LOT CARD — an auction listing, not a generic pricing card
--------------------------------------------------------- */
function LotCard({ phase, index }) {
  const [seats, setSeats] = useState(41 + index * 17);

  useEffect(() => {
    const t = setInterval(() => {
      setSeats((s) => s + (Math.random() < 0.4 ? 1 : 0));
    }, 4200 + index * 900);
    return () => clearInterval(t);
  }, [index]);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`lot-card lot-card--${isEven ? "even" : "odd"} relative rounded-2xl p-6 sm:p-8 flex flex-col`}
      style={{
        backgroundColor: `${C.panel}33`,
        border: `1px solid ${isEven ? C.gold + "33" : C.panelBorder + "33"}`,
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <span
            className="rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em]"
            style={{
              background: isEven
                ? `linear-gradient(135deg, ${C.gold}, ${C.butter})`
                : `linear-gradient(135deg, ${C.deepPurple}, #7A62E3)`,
              color: isEven ? C.ink : C.paper,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {phase.lot}
          </span>
          <span
            className="text-[11px] tracking-[0.14em]"
            style={{ color: C.slate, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {phase.hours}
          </span>
        </div>
        <span
          className="text-[10.5px] tracking-wide shrink-0"
          style={{ color: isEven ? C.gold : "#8B7AE5", fontFamily: "'JetBrains Mono', monospace" }}
        >
          {seats} bidding
        </span>
      </div>

      <h3
        className="text-2xl sm:text-[26px] font-semibold leading-tight mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
      >
        {phase.title}
      </h3>

      <ul className="space-y-3.5 flex-1">
        {phase.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2
              size={17}
              strokeWidth={2.2}
              className="mt-0.5 shrink-0"
              style={{ color: isEven ? C.gold : "#8B7AE5" }}
            />
            <span className="text-[14.5px] leading-relaxed" style={{ color: C.slateLight }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="lot-bar mt-7 h-[3px] w-full rounded-full overflow-hidden"
        style={{ backgroundColor: `${C.panelBorder}33` }}
      >
        <div
          className="lot-bar-fill h-full rounded-full"
          style={{
            background: isEven
              ? `linear-gradient(90deg, ${C.gold}, ${C.butter})`
              : `linear-gradient(90deg, ${C.deepPurple}, #7A62E3)`,
            width: isEven ? "35%" : "65%"
          }}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   TIMELINE ROW — one step of the ceremony, alternating
   left/right of a center spine. Pure CSS grid handles the
   alternation and the mobile collapse, no JS positioning.
 --------------------------------------------------------- */
function TimelineRow({ step, index, inView }) {
  const n = String(index + 1).padStart(2, "0");
  const side = index % 2 === 0 ? "left" : "right";
  const isEven = index % 2 === 0;

  return (
    <div
      className={`tl-row tl-row--${side}`}
      style={{ transitionDelay: inView ? `${0.08 + index * 0.06}s` : "0s" }}
    >
      <div className="tl-dot-col">
        <div className="tl-dot" style={{ borderColor: `${isEven ? C.gold : C.deepPurple}55` }}>
          <span style={{ color: isEven ? C.gold : "#8B7AE5", fontFamily: "'JetBrains Mono', monospace" }}>{n}</span>
        </div>
      </div>
      <div className="tl-card" style={{ borderColor: `${isEven ? C.gold + "15" : C.panelBorder + "33"}` }}>
        <span
          className="text-[10px] tracking-[0.16em]"
          style={{ color: isEven ? C.gold : "#8B7AE5", fontFamily: "'JetBrains Mono', monospace" }}
        >
          {step.tag}
        </span>
        <h4
          className="text-[15.5px] sm:text-[16.5px] font-semibold leading-snug mt-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
        >
          {step.title}
        </h4>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PODIUM — signature finale, sitting at the base of the spine
--------------------------------------------------------- */
function Podium({ inView }) {
  const confetti = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        left: Math.random() * 100,
        delay: (Math.random() * 3).toFixed(2),
        dur: (2.2 + Math.random() * 1.8).toFixed(2),
        size: 3 + Math.random() * 4,
        gold: Math.random() < 0.5,
      })),
    []
  );

  return (
    <div className={`podium-wrap ${inView ? "in-view" : ""} flex flex-col items-center text-center`}>
      <div className="podium relative flex items-center justify-center shrink-0" style={{ width: 140, height: 140 }}>
        <div className="podium-beam absolute inset-0 rounded-full" />
        <div className="podium-ring absolute inset-0 rounded-full" />
        {confetti.map((c, i) => (
          <span
            key={i}
            className="podium-confetti absolute rounded-sm"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.size,
              backgroundColor: c.gold ? C.gold : C.butter,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.dur}s`,
            }}
          />
        ))}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 84,
            height: 84,
            background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
            boxShadow: `0 0 44px ${C.gold}80`,
          }}
        >
          <Trophy size={34} strokeWidth={2} style={{ color: C.ink }} />
        </div>
      </div>
      <span
        className="text-[11px] tracking-[0.2em] mt-2"
        style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
      >
        ROUND 14 · CERTIFIED
      </span>
      <p className="text-[13.5px] max-w-[220px] mt-1.5" style={{ color: C.slate }}>
        Every round cleared. You're on the podium.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   LEARNING PATH — a ceremony you climb, not a chart you read
--------------------------------------------------------- */
function LearningPath() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`tl-wrap relative ${inView ? "in-view" : ""}`}>
      <div className="tl-spine-track absolute">
        <div className="tl-spine-fill absolute inset-0" />
      </div>

      <div className="relative">
        {STEPS.map((step, i) => (
          <TimelineRow key={i} step={step} index={i} inView={inView} />
        ))}
      </div>

      <div className="tl-podium-slot relative flex justify-center mt-2">
        <Podium inView={inView} />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   SECTION
--------------------------------------------------------- */
export default function Curriculum() {
  return (
    <>
      <style>{`
        ${FONTS}
        .curriculum-section * { box-sizing: border-box; }

        .lot-card { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, background-color 0.35s ease; }
        .lot-card:hover {
          transform: translateY(-6px);
          border-color: ${C.gold}55;
          background-color: rgba(92, 73, 179, 0.05);
        }
        .lot-bar-fill { width: 22%; transition: width 0.6s cubic-bezier(0.16,1,0.3,1); }
        .lot-card:hover .lot-bar-fill { width: 100%; }

        .fade-up { animation: curFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes curFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---------- Timeline ---------- */
        .tl-wrap { padding: 8px 0 0; }

        .tl-spine-track {
          top: 22px;
          bottom: 92px;
          left: 50%;
          width: 2px;
          background: ${C.panelBorder}33;
          transform: translateX(-1px);
        }
        .tl-spine-fill {
          background: linear-gradient(180deg, ${C.gold}, ${C.butter});
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s;
          box-shadow: 0 0 12px rgba(244, 185, 3, 0.5);
        }
        .in-view .tl-spine-fill { transform: scaleY(1); }

        .tl-row {
          display: grid;
          grid-template-columns: 1fr 56px 1fr;
          align-items: center;
          column-gap: 22px;
          min-height: 78px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .in-view .tl-row { opacity: 1; transform: translateY(0); }

        .tl-dot-col { grid-column: 2; display: flex; justify-content: center; }
        .tl-dot {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          border: 1.5px solid ${C.panelBorder}55;
          background: ${C.ink};
          box-shadow: 0 0 0 6px ${C.ink};
          position: relative;
          z-index: 2;
        }

        .tl-row--left .tl-card { grid-column: 1; text-align: right; }
        .tl-row--right .tl-card { grid-column: 3; text-align: left; }

        .tl-card {
          border-radius: 12px;
          padding: 12px 16px;
          background: ${C.panel}33;
          border: 1px solid ${C.panelBorder}33;
        }

        .tl-podium-slot { min-height: 40px; }

        .podium-wrap { opacity: 0.25; transform: translateY(10px) scale(0.94); transition: opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s; }
        .podium-wrap.in-view { opacity: 1; transform: translateY(0) scale(1); }

        .podium-beam {
          background: conic-gradient(from 0deg, transparent 0%, rgba(244, 185, 3, 0.18) 8%, transparent 16%, transparent 50%, rgba(244, 185, 3, 0.12) 58%, transparent 66%, transparent 100%);
          animation: spin 7s linear infinite;
        }
        .podium-ring {
          border: 1px solid ${C.panelBorder}44;
          animation: ringPulse 2.4s cubic-bezier(0,0,0.2,1) infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes ringPulse {
          0% { transform: scale(0.72); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .podium-confetti {
          top: -6px;
          animation-name: confettiFall;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(130px) rotate(240deg); opacity: 0; }
        }

        @media (max-width: 640px) {
          .tl-spine-track { left: 23px; transform: none; bottom: 128px; }
          .tl-row { grid-template-columns: 46px 1fr; column-gap: 14px; min-height: 64px; }
          .tl-dot-col { grid-column: 1; justify-content: flex-start; }
          .tl-row--left .tl-card, .tl-row--right .tl-card {
            grid-column: 2;
            text-align: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lot-card, .lot-bar-fill, .tl-row, .tl-spine-fill, .podium-wrap, .podium-beam, .podium-ring, .podium-confetti, .fade-up {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="curriculum-section relative overflow-hidden py-20 sm:py-28"
        style={{ backgroundColor: C.inkSoft }}
      >
        {/* ambient gold wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at 15% 0%, rgba(244, 185, 3, 0.07), transparent 60%), radial-gradient(500px circle at 100% 100%, rgba(244, 185, 3, 0.06), transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10">
          {/* ---- Curriculum header + lots ---- */}
          <div className="fade-up flex items-center gap-2.5 mb-4">
            <Sparkles size={14} style={{ color: C.gold }} />
            <span
              className="text-[11px] tracking-[0.18em]"
              style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
            >
              TWO LOTS · 200HR PROGRAM
            </span>
          </div>
          <h2
            className="fade-up font-bold leading-[1.02] tracking-tight mb-14 max-w-2xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: C.paper,
              fontSize: "clamp(2rem, 4.4vw, 3.1rem)",
              animationDelay: "0.06s",
            }}
          >
            The program, itemized <span style={{ color: C.gold }}>&amp;</span> up for bid.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-24 sm:mb-28">
            {PHASES.map((phase, i) => (
              <LotCard key={i} phase={phase} index={i} />
            ))}
          </div>

          {/* ---- Learning path ---- */}
          <div className="max-w-xl mx-auto text-center mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <Sparkles size={14} style={{ color: C.gold }} />
              <span
                className="text-[11px] tracking-[0.18em]"
                style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
              >
                14 ROUNDS · ONE PODIUM FINISH
              </span>
            </div>
            <h2
              className="font-bold leading-[1.02] tracking-tight mb-3"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: C.paper,
                fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
              }}
            >
              The learning path
            </h2>
            <p className="text-[14px]" style={{ color: C.slate }}>
              Every round sharpens one skill. Clear all fourteen and you're standing on the podium, certified.
            </p>
          </div>

          <LearningPath />
        </div>
      </section>
    </>
  );
}