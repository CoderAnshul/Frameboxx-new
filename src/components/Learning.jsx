import { useState, useEffect, useRef } from "react";
import { Trophy, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

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
   LEDGER ROW — a curriculum lot rendered as a ledger entry,
   with a large index numeral and an expandable item list
--------------------------------------------------------- */
function LedgerRow({ phase, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const n = String(index + 1).padStart(2, "0");

  return (
    <div
      className="ledger-row relative"
      style={{ borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="w-full flex items-center gap-5 sm:gap-8 py-7 sm:py-9 text-left group"
      >
        <span
          className="ledger-num shrink-0 leading-none"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: isOpen ? C.gold : `${C.slate}55`,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            transition: "color 0.35s ease",
          }}
        >
          {n}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-1.5">
            <span
              className="text-[10.5px] tracking-[0.16em] rounded-full px-2.5 py-0.5"
              style={{
                color: C.gold,
                border: `1px solid ${C.gold}44`,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {phase.lot}
            </span>
            <span
              className="text-[10.5px] tracking-[0.16em]"
              style={{ color: C.slate, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {phase.hours}
            </span>
          </div>
          <h3
            className="text-xl sm:text-2xl font-semibold leading-tight truncate"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
          >
            {phase.title}
          </h3>
        </div>

        <ArrowRight
          size={20}
          className="shrink-0 ledger-arrow"
          style={{
            color: C.gold,
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </button>

      <div
        className="ledger-panel overflow-hidden"
        style={{
          maxHeight: isOpen ? 400 : 0,
          transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="pl-[calc(2.4rem+1.25rem)] sm:pl-[calc(4rem+2rem)] pb-8 sm:pb-9">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {phase.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={16}
                  strokeWidth={2.2}
                  className="mt-0.5 shrink-0"
                  style={{ color: C.gold }}
                />
                <span className="text-[14px] leading-relaxed" style={{ color: C.slateLight }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   ROADMAP CARD — one step in a horizontal scrolling strip
--------------------------------------------------------- */
function RoadmapCard({ step, index, activeIndex }) {
  const n = String(index + 1).padStart(2, "0");
  const isActive = index <= activeIndex;

  return (
    <div className="roadmap-card shrink-0 flex flex-col" style={{ width: 220 }}>
      <div className="flex items-center gap-2 mb-4">
        <span
          className="roadmap-dot shrink-0 rounded-full"
          style={{
            width: 10,
            height: 10,
            backgroundColor: isActive ? C.gold : C.panelBorder,
            boxShadow: isActive ? `0 0 10px ${C.gold}99` : "none",
            transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          }}
        />
        <div
          className="roadmap-line h-[2px] flex-1 rounded-full"
          style={{
            backgroundColor: isActive ? C.gold : C.panelBorder,
            transition: "background-color 0.4s ease",
          }}
        />
      </div>
      <span
        className="text-[10px] tracking-[0.16em] mb-2"
        style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {n} · {step.tag}
      </span>
      <h4
        className="text-[15px] font-semibold leading-snug"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
      >
        {step.title}
      </h4>
    </div>
  );
}

/* ---------------------------------------------------------
   ROADMAP — horizontal scroll, progress driven by scroll pos
--------------------------------------------------------- */
function Roadmap() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max > 0 ? el.scrollLeft / max : 0;
      setScrollPct(pct);
      setActiveIndex(Math.floor(pct * STEPS.length));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const isComplete = scrollPct > 0.92;

  return (
    <div>
      {/* progress rail */}
      <div
        className="relative h-1 rounded-full overflow-hidden mb-8"
        style={{ backgroundColor: C.panelBorder }}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${scrollPct * 100}%`,
            background: `linear-gradient(90deg, ${C.gold}, ${C.butter})`,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <div
        ref={scrollerRef}
        className="roadmap-scroller flex gap-8 overflow-x-auto pb-6"
        style={{ scrollSnapType: "x proximity" }}
      >
        {STEPS.map((step, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <RoadmapCard step={step} index={i} activeIndex={activeIndex} />
          </div>
        ))}

        {/* certificate card, end of the strip */}
        <div
          className="shrink-0 flex flex-col items-center justify-center text-center rounded-2xl px-8"
          style={{
            width: 220,
            border: `1px solid ${isComplete ? C.gold : C.panelBorder}`,
            backgroundColor: C.panel,
            transition: "border-color 0.4s ease",
            scrollSnapAlign: "start",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full mb-3"
            style={{
              width: 54,
              height: 54,
              background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
              boxShadow: isComplete ? `0 0 30px ${C.gold}80` : "none",
              transition: "box-shadow 0.4s ease",
            }}
          >
            <Trophy size={24} strokeWidth={2} style={{ color: "#1C1D1C" }} />
          </div>
          <span
            className="text-[10px] tracking-[0.16em] mb-1"
            style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
          >
            CERTIFIED
          </span>
          <p className="text-[13px] leading-snug" style={{ color: C.slate }}>
            All fourteen rounds cleared.
          </p>
        </div>
      </div>

      <p
        className="text-[11.5px] tracking-wide mt-2"
        style={{ color: C.slate, fontFamily: "'JetBrains Mono', monospace" }}
      >
        SCROLL TO WALK THE PATH →
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   SECTION
--------------------------------------------------------- */
export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        ${FONTS}
        .curriculum-section * { box-sizing: border-box; }

        .fade-up { animation: curFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes curFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ledger-row:hover .ledger-num { color: ${C.gold}99; }

        .roadmap-scroller { scrollbar-width: thin; scrollbar-color: ${C.gold}66 transparent; }
        .roadmap-scroller::-webkit-scrollbar { height: 6px; }
        .roadmap-scroller::-webkit-scrollbar-thumb { background-color: ${C.gold}66; border-radius: 999px; }
        .roadmap-scroller::-webkit-scrollbar-track { background: transparent; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .ledger-panel, .ledger-num, .ledger-arrow, .roadmap-dot, .roadmap-line {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section
        className="curriculum-section relative overflow-hidden py-20 sm:py-28"
        style={{ backgroundColor: C.inkSoft }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at 15% 0%, rgba(244, 185, 3, 0.07), transparent 60%), radial-gradient(500px circle at 100% 100%, rgba(244, 185, 3, 0.06), transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-10">
          {/* ---- Header ---- */}
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
            className="fade-up font-bold leading-[1.02] tracking-tight mb-16"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: C.paper,
              fontSize: "clamp(2rem, 4.4vw, 3.1rem)",
              animationDelay: "0.06s",
            }}
          >
            The curriculum ledger.
          </h2>

          {/* ---- Ledger of lots ---- */}
          <div className="mb-24 sm:mb-28" style={{ borderTop: `1px solid ${C.panelBorder}` }}>
            {PHASES.map((phase, i) => (
              <LedgerRow
                key={i}
                phase={phase}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>

          {/* ---- Learning path ---- */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-3">
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

          <Roadmap />
        </div>
      </section>
    </>
  );
}