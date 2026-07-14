import { useState, useEffect, useRef } from "react";
import { TrendingUp, Bot, Wallet, Globe, Lightbulb } from "lucide-react";

import { C, FONTS } from "../theme";

const REASONS = [
  {
    stat: "10X",
    icon: TrendingUp,
    title: "Explosive industry growth",
    body: "Digital marketing is projected to grow 10x faster than traditional marketing roles \u2014 every business is now digital.",
  },
  {
    stat: "24/7",
    icon: Bot,
    title: "AI & automation integration",
    body: "Digital marketers use AI tools for ad optimization, content generation, and analytics \u2014 giving them a futuristic edge.",
  },
  {
    stat: "TOP 3",
    icon: Wallet,
    title: "High-paying creative roles",
    body: "High-paying roles like SEO Specialist, Performance Marketer, and Content Strategist are among the top jobs in 2026.",
  },
  {
    stat: "150+",
    icon: Globe,
    title: "Global opportunities",
    body: "Digital marketing skills are location-independent \u2014 work with clients and companies across the globe.",
  },
  {
    stat: "2-IN-1",
    icon: Lightbulb,
    title: "Data + creativity combo",
    body: "This field blends analytical thinking with creativity \u2014 perfect for those who love insights and storytelling.",
  },
];

// vertical lift per index, ascending left -> right (desktop only)
const LIFT = [
  "lg:translate-y-0",
  "lg:-translate-y-6",
  "lg:-translate-y-12",
  "lg:-translate-y-16",
  "lg:-translate-y-24",
];

/* ---------------------------------------------------------
   Card
--------------------------------------------------------- */
function ReasonCard({ r, i, revealed }) {
  const Icon = r.icon;
  return (
    <div
      className={`relative shrink-0 w-4/5 sm:w-3/5 lg:w-auto rounded-2xl overflow-hidden transition-all duration-700 ease-out ${LIFT[i]}`}
      style={{
        backgroundColor: C.inkSoft,
        border: `1px solid ${C.panelBorder}`,
        boxShadow: "0 12px 30px -10px rgba(0,0,0,0.06)",
        opacity: revealed ? 1 : 0,
        transform: revealed ? undefined : "translateY(28px)",
        transitionDelay: `${i * 90}ms`,
      }}
    >
      {/* ghost stat typography */}
      <span
        aria-hidden
        className="absolute -right-1 -top-3 select-none pointer-events-none font-bold"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "54px",
          color: C.gold,
          opacity: 0.07,
          lineHeight: 1,
        }}
      >
        {r.stat}
      </span>

      <div className="relative p-6 sm:p-7 flex flex-col h-full min-h-[240px]">
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.butter})` }}
          >
            <Icon size={20} style={{ color: "#1C1D1C" }} strokeWidth={2} />
          </div>
          <span
            className="text-[12px] font-medium px-2.5 py-1 rounded-full"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: C.gold,
              border: `1px solid ${C.panelBorder}33`,
              backgroundColor: "rgba(244,185,3,0.06)",
            }}
          >
            {r.stat}
          </span>
        </div>

        <h3
          className="text-[19px] font-semibold leading-snug mb-2.5"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
        >
          {r.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed" style={{ color: C.slateLight }}>
          {r.body}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Desktop: ascending growth path
--------------------------------------------------------- */
function GrowthPath({ revealed }) {
  const points = [
    [90, 255],
    [290, 205],
    [490, 150],
    [690, 95],
    [890, 45],
  ];
  return (
    <svg
      viewBox="0 0 1000 300"
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M90,255 C190,255 190,205 290,205 C390,205 390,150 490,150 C590,150 590,95 690,95 C790,95 790,45 890,45"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
        strokeDasharray="6 9"
        strokeLinecap="round"
        style={{
          strokeDasharray: 1700,
          strokeDashoffset: revealed ? 0 : 1700,
          transition: "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)",
          opacity: 0.6,
        }}
      />
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4.5"
          fill={C.gold}
          style={{
            opacity: revealed ? 1 : 0,
            transition: `opacity 0.4s ease ${0.3 + i * 0.12}s`,
          }}
        />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------
   Mobile / tablet: swipeable rail with progress dots
--------------------------------------------------------- */
function ReasonRail({ revealed }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / REASONS.length;
    const idx = Math.round(el.scrollLeft / cardW);
    setActive(Math.max(0, Math.min(REASONS.length - 1, idx)));
  }

  return (
    <div className="lg:hidden">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto pb-3 -mx-5 px-5 sm:-mx-10 sm:px-10"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {REASONS.map((r, i) => (
          <div key={r.title} style={{ scrollSnapAlign: "center" }} className="shrink-0 w-4/5 sm:w-3/5">
            <ReasonCard r={r} i={i} revealed={revealed} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {REASONS.map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "22px" : "6px",
              backgroundColor: active === i ? C.gold : C.panelBorder,
            }}
          />
        ))}
      </div>
      <p
        className="text-center text-[11px] mt-3 tracking-wide"
        style={{ color: C.slateLight, fontFamily: "'JetBrains Mono', monospace" }}
      >
        SWIPE TO EXPLORE →
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   Main export
--------------------------------------------------------- */
export default function WhyDigitalMarketing() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ backgroundColor: C.inkSoft }}>
      <style>{`
        ${FONTS}
        .wdm * { box-sizing: border-box; }
        @media (prefers-reduced-motion: reduce) {
          .wdm-anim { transition: none !important; }
        }
      `}</style>

      <div className="wdm relative px-5 sm:px-10 lg:px-14 py-16 sm:py-24 max-w-7xl mx-auto">
        {/* header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span
            className="text-[11px] tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
          >
            CAREER OUTLOOK · 2026
          </span>
          <h2
            className="mt-3 leading-[1.08] font-bold tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: C.paper,
              fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)",
            }}
          >
            Why digital marketing is the{" "}
            <span
              className="inline-block rounded-lg px-3 py-0.5"
              style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`, color: "#1C1D1C" }}
            >
              breakthrough
            </span>{" "}
            career of 2026
          </h2>
        </div>

        {/* desktop: ascending path + staircase cards */}
        <div className="relative hidden lg:block">
          <GrowthPath revealed={revealed} />
          {/* y-axis texture */}
          <div className="absolute -left-10 top-0 bottom-6 w-8 flex flex-col justify-between items-end pr-2">
            {["100", "75", "50", "25", "0"].map((v) => (
              <span
                key={v}
                className="text-[9px]"
                style={{ color: C.slateLight, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {v}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-5 items-end pt-4 pb-8">
            {REASONS.map((r, i) => (
              <ReasonCard r={r} i={i} key={r.title} revealed={revealed} />
            ))}
          </div>
          <div
            className="text-center text-[10.5px] tracking-[0.14em] mt-1"
            style={{ color: C.slateLight, fontFamily: "'JetBrains Mono', monospace" }}
          >
            CAREER GROWTH INDEX, 2021 → 2026
          </div>
        </div>

        {/* mobile / tablet: swipeable rail */}
        <ReasonRail revealed={revealed} />
      </div>
    </section>
  );
}