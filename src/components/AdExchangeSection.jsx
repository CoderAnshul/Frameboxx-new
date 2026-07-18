import { useState, useEffect, useRef, useMemo } from "react";
import { Radio } from "lucide-react";
import { C } from "../theme";

/* ---------------------------------------------------------
   BID BOARD — signature background (Marketing Mode)
--------------------------------------------------------- */
function BidBoard() {
  const cols = 22;
  const rows = 10;
  const total = cols * rows;

  const cellMeta = useMemo(
    () =>
      Array.from({ length: total }, (_, i) => ({
        delay: (Math.random() * 8).toFixed(2),
        dur: (3 + Math.random() * 4).toFixed(2),
        showsNumber: Math.random() < 0.16,
        value: Math.floor(Math.random() * 90 + 10),
      })),
    [total]
  );

  const wrapRef = useRef(null);

  function handleMove(e) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      className="absolute inset-0 overflow-hidden hidden md:block"
      style={{ "--mx": "50%", "--my": "20%" }}
    >
      <div
        className="grid w-full h-full"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {cellMeta.map((c, i) => (
          <div
            key={i}
            className="relative border-t border-l flex items-center justify-center"
            style={{ borderColor: "rgba(255,255,255,0.045)" }}
          >
            <div
              className="bidcell absolute inset-0.5"
              style={{
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.dur}s`,
              }}
            />
            {c.showsNumber && (
              <span
                className="bidnum relative"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: C.gold,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.dur}s`,
                }}
              >
                ₹{c.value}
              </span>
            )}
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(244, 185, 3, 0.15), transparent 65%)",
          transition: "background 60ms linear",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${C.inkSoft} 0%, transparent 16%, transparent 78%, ${C.inkSoft} 100%), linear-gradient(90deg, ${C.inkSoft} 0%, transparent 12%, transparent 78%, ${C.inkSoft} 100%)`,
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------
   AUCTION LOG — live-feeling ticker
--------------------------------------------------------- */
const AUCTION_LOG_LINES = [
  { tag: "WON", text: "Search Ad Auction \u2014 Cohort #24 lifted CTR +38%" },
  { tag: "BID", text: "Meta Pixel Certification \u2014 slot filled in 0.4s" },
  { tag: "WON", text: "Analytics Sprint \u2014 20 tools unlocked for batch" },
  { tag: "BID", text: "AI Copilot Lab \u2014 new seat reserved" },
  { tag: "WON", text: "Performance Campaign \u2014 ROAS benchmark cleared" },
];

function AuctionLog() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % AUCTION_LOG_LINES.length);
        setVisible(true);
      }, 260);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const line = AUCTION_LOG_LINES[i];

  return (
    <div className="flex items-center justify-center gap-2.5 min-w-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot"
          style={{ backgroundColor: C.gold }}
        />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: C.gold }} />
      </span>
      <span
        className="text-[11px] tracking-wider shrink-0"
        style={{ color: C.gold }}
      >
        LIVE
      </span>
      <span style={{ color: C.slateLight }} className="text-[11px] shrink-0">/</span>
      <span
        className="text-[12px] transition-opacity duration-300 truncate"
        style={{ color: C.paper, opacity: visible ? 1 : 0 }}
      >
        <b style={{ color: line.tag === "WON" ? C.butter : C.slateLight }}>{line.tag}</b>{" "}
        {line.text}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN EXPORTED COMPONENT
--------------------------------------------------------- */
export default function AdExchangeSection({ onViewCurriculum, onBookDemo }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: C.inkSoft }}>
      <style>{`
        .bidcell {
          background-color: rgba(244, 185, 3, 0.05);
          border-radius: 3px;
          animation-name: bidflash;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .bidnum {
          animation-name: bidnumflash;
          animation-iteration-count: infinite;
          opacity: 0;
        }
        @keyframes bidflash {
          0%, 82% { background-color: rgba(244, 185, 3, 0.05); }
          90% { background-color: rgba(244, 185, 3, 0.38); }
          100% { background-color: rgba(244, 185, 3, 0.05); }
        }
        @keyframes bidnumflash {
          0%, 80% { opacity: 0; transform: translateY(2px); }
          90% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(2px); }
        }
        .pulse-dot { animation: pulseDot 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 0.75; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        .bidtag-in { animation: bidtagIn 0.6s cubic-bezier(0.16,1,0.3,1) both; animation-delay: 0.4s; }
        @keyframes bidtagIn {
          0% { opacity: 0; transform: scale(0.85) translateY(6px); }
          60% { transform: scale(1.04) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <BidBoard />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 flex flex-col items-center text-center">
        <div
          className="fade-up inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7"
          style={{ border: `1px solid ${C.panelBorder}`, backgroundColor: "rgba(244, 185, 3, 0.08)" }}
        >
          <Radio size={12} style={{ color: C.gold }} />
          <span
            className="text-[11px] tracking-[0.12em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
          >
            LIVE COHORT ENROLLING · ADVANCED CERTIFICATION
          </span>
        </div>

        <h2
          className="fade-up font-bold leading-[0.98] tracking-tight text-center mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: C.paper,
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
            animationDelay: "0.08s",
          }}
        >
          Digital Marketing,
          <br />
          <span className="inline-flex items-baseline gap-3 flex-wrap justify-center mt-2">
            run by the
            <span className="relative inline-flex items-center">
              <span
                className="bidtag-in inline-flex items-center gap-2 rounded-lg px-4 py-1"
                style={{
                  background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
                  color: C.paper,
                }}
              >
                algorithm
              </span>
            </span>
          </span>
        </h2>
        <div
          className="fade-up text-[10.5px] tracking-[0.14em] mt-3 mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slateLight, animationDelay: "0.5s" }}
        >
          WINNING BID · AI-DRIVEN MARKETING
        </div>

        <p
          className="fade-up text-sm sm:text-base leading-relaxed max-w-2xl text-center"
          style={{ color: C.slateLight, animationDelay: "0.16s" }}
        >
          Every scroll, click, and purchase runs through a split-second auction —
          and AI decides who wins it. Learn to run that auction yourself: Google,
          Meta, analytics, and the copilots now optimizing all three.
        </p>

        <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-8" style={{ animationDelay: "0.24s" }}>
          <button
            onClick={onViewCurriculum}
            className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
              color: "#1C1D1C",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            View curriculum
          </button>
          <button
            onClick={onBookDemo}
            className="rounded-full px-6 py-3 text-sm font-semibold border transition-colors cursor-pointer"
            style={{
              borderColor: C.gold,
              color: C.gold,
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Book a free demo
          </button>
        </div>

        <div
          className="fade-up mt-9 pt-6 border-t w-full max-w-xl"
          style={{ borderColor: C.panelBorder, animationDelay: "0.3s" }}
        >
          <AuctionLog />
        </div>

        <div className="fade-up flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mt-9" style={{ animationDelay: "0.36s" }}>
          <span className="text-[11px]" style={{ color: C.slateLight, fontFamily: "'JetBrains Mono', monospace" }}>
            CERTIFIED ALONGSIDE
          </span>
          {["Google", "Microsoft", "Frameboxx"].map((n) => (
            <span key={n} className="text-sm font-medium" style={{ color: C.paper, fontFamily: "'Space Grotesk', sans-serif" }}>
              {n}
            </span>
          ))}
          <span
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{ color: C.gold, border: `1px solid ${C.panelBorder}`, fontFamily: "'JetBrains Mono', monospace" }}
          >
            20+ TOOLS
          </span>
        </div>
      </div>
    </section>
  );
}
