import { useState, useEffect, useRef, useMemo } from "react";
import { Phone, ArrowRight, Radio, Sparkles } from "lucide-react";
import { C, FONTS } from "../theme";
import BrandCollaboration from "./BrandCollaboration";

/* ---------------------------------------------------------
   BID BOARD — signature background (Marketing Mode)
   A grid of cells that behave like a live ad-exchange:
   most cells idle, a scatter of cells "win a bid" and
   flash gold with a number, in a slow rolling wave. A
   soft spotlight follows the cursor.
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
      {/* vignette so the grid recedes near edges */}
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
   GEN GRID — signature background (AI Mode)
   Same mechanic as the ad-exchange board: a grid of cells
   mostly idle, a scatter of cells "complete a render" and
   flash gold with a content-type tag, in a slow rolling
   wave. A soft spotlight follows the cursor. Here the tags
   are asset types coming off an AI pipeline instead of bid
   values — same rhythm, new meaning.
--------------------------------------------------------- */
const ASSET_TAGS = ["IMG", "VID", "CPY", "3D", "UX", "EDIT"];

function GenGrid() {
  const cols = 22;
  const rows = 10;
  const total = cols * rows;

  const cellMeta = useMemo(
    () =>
      Array.from({ length: total }, (_, i) => ({
        delay: (Math.random() * 8).toFixed(2),
        dur: (3 + Math.random() * 4).toFixed(2),
        showsTag: Math.random() < 0.16,
        tag: ASSET_TAGS[Math.floor(Math.random() * ASSET_TAGS.length)],
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
              className="gencell absolute inset-0.5"
              style={{
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.dur}s`,
              }}
            />
            {c.showsTag && (
              <span
                className="gentag relative"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.04em",
                  color: C.gold,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.dur}s`,
                }}
              >
                {c.tag}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* floating AI badge — a HUD marker sitting on the grid */}
      <div
        className="badge-pulse pointer-events-none absolute right-[9%] top-[14%] hidden sm:flex h-10 w-10 items-center justify-center rounded-[4px]"
        style={{
          border: `1px solid ${C.gold}`,
          backgroundColor: C.ink,
          boxShadow: `0 0 18px rgba(244,185,3,0.4)`,
        }}
      >
        <span
          className="text-[11px] font-bold"
          style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
        >
          AI
        </span>
      </div>

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(244,185,3,0.14), transparent 65%)",
          transition: "background 60ms linear",
        }}
      />
      {/* vignette so the grid recedes near edges */}
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
   AUCTION LOG — live-feeling ticker under the CTAs (Marketing)
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
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 w-full min-w-0 px-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="flex items-center gap-2 shrink-0">
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot"
            style={{ backgroundColor: C.gold }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: C.gold }} />
        </span>
        <span
          className="text-[11px] tracking-wider"
          style={{ color: C.gold }}
        >
          LIVE
        </span>
        <span style={{ color: C.slateLight }} className="text-[11px]">/</span>
      </div>
      <span
        className="text-[12px] transition-opacity duration-300 text-center"
        style={{ color: C.paper, opacity: visible ? 1 : 0 }}
      >
        <b style={{ color: line.tag === "WON" ? C.butter : C.slateLight }}>{line.tag}</b>{" "}
        {line.text}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------
   GENERATION LOG — live-feeling ticker under the CTAs (AI Mode)
--------------------------------------------------------- */
const GEN_LOG_LINES = [
  { tag: "DONE", text: "Product hero shot \u2014 generated in 2.3s" },
  { tag: "GEN", text: "Brand copy pass \u2014 4 headline variants drafted" },
  { tag: "DONE", text: "30s reel \u2014 auto-cut & captioned" },
  { tag: "GEN", text: "Moodboard \u2014 style transfer applied" },
  { tag: "DONE", text: "Portfolio layout \u2014 rendered from brief" },
];

function GenerationLog() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % GEN_LOG_LINES.length);
        setVisible(true);
      }, 260);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const line = GEN_LOG_LINES[i];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 w-full min-w-0 px-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="flex items-center gap-2 shrink-0">
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot"
            style={{ backgroundColor: C.gold }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: C.gold }} />
        </span>
        <span
          className="text-[11px] tracking-wider"
          style={{ color: C.gold }}
        >
          LIVE
        </span>
        <span style={{ color: C.slateLight }} className="text-[11px]">/</span>
      </div>
      <span
        className="text-[12px] transition-opacity duration-300 text-center"
        style={{ color: C.paper, opacity: visible ? 1 : 0 }}
      >
        <b style={{ color: line.tag === "DONE" ? C.butter : C.slateLight }}>{line.tag}</b>{" "}
        {line.text}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------
   LEAD FORM / CONSOLE FORM UTILS
--------------------------------------------------------- */
function FieldLabel({ children }) {
  return (
    <label
      className="block text-[10px] tracking-[0.18em] mb-1.5"
      style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slateLight }}
    >
      {children}
    </label>
  );
}

const inputStyle = {
  backgroundColor: C.ink,
  border: `1px solid ${C.panelBorder}`,
  color: C.paper,
};

/* ---------------------------------------------------------
   CONSOLE FORM (Marketing Mode)
--------------------------------------------------------- */
function ConsoleForm() {
  return (
    <div
      className="rounded-2xl p-6 sm:p-7 w-full"
      style={{
        backgroundColor: C.panel,
        border: `1px solid ${C.panelBorder}`,
        boxShadow: "0 12px 30px -10px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <div>
          <h3
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
          >
            Start your campaign
          </h3>
          <p className="text-[12.5px] mt-0.5" style={{ color: C.slateLight }}>
            Brochure + a free demo seat, in your inbox.
          </p>
        </div>
        <div
          className="flex items-center gap-1.5 shrink-0 mt-1"
          title="Enrollment activity this week"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 pulse-dot" style={{ backgroundColor: C.gold }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: C.gold }} />
          </span>
          <span
            className="text-[10px] hidden md:block"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slateLight }}
          >
            214 enrolled this week
          </span>
        </div>
      </div>

      <div className="h-px w-full my-5" style={{ backgroundColor: C.panelBorder }} />

      <div className="space-y-4">
        <div>
          <FieldLabel>NAME</FieldLabel>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-2"
            style={{ ...inputStyle }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${C.gold}55`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
        <div>
          <FieldLabel>EMAIL</FieldLabel>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none"
            style={{ ...inputStyle }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${C.gold}55`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
        <div>
          <FieldLabel>MOBILE (10 DIGIT ONLY)</FieldLabel>
          <input
            type="tel"
            placeholder="98XXXXXXXX"
            maxLength={10}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none"
            style={{ ...inputStyle }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${C.gold}55`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
        <div>
          <FieldLabel>COURSE</FieldLabel>
          <select
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none appearance-none"
            style={{ ...inputStyle }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${C.gold}55`)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
            defaultValue=""
          >
            <option value="" disabled>Select a track</option>
            <option>Digital Marketing with AI — Foundation</option>
            <option>Digital Marketing with AI — Advanced</option>
            <option>Performance Marketing (Google + Meta)</option>
            <option>Social Media & Content Systems</option>
          </select>
        </div>

        <button
          className="w-full rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2 mt-2 transition-transform active:scale-[0.98]"
          style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
            color: "#1C1D1C",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Launch campaign <ArrowRight size={15} strokeWidth={2.5} />
        </button>
        <p className="text-[10.5px] text-center" style={{ color: C.slateLight }}>
          No spam. One call from a counselor, that's it.
        </p>
      </div>
    </div>
  );
}



/* ---------------------------------------------------------
   MAIN HERO COMPONENT
--------------------------------------------------------- */
export default function Hero({ onViewCurriculum, onBookDemo, currentMode = "marketing", onToggleMode, hideNavbar = false }) {
  return (
    <>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
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

        .gencell {
          background-color: rgba(244,185,3,0.05);
          border-radius: 3px;
          animation-name: genflash;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .gentag {
          animation-name: gentagflash;
          animation-iteration-count: infinite;
          opacity: 0;
        }
        @keyframes genflash {
          0%, 82% { background-color: rgba(244,185,3,0.045); }
          90% { background-color: rgba(244,185,3,0.32); }
          100% { background-color: rgba(244,185,3,0.045); }
        }
        @keyframes gentagflash {
          0%, 80% { opacity: 0; transform: translateY(2px); }
          90% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(2px); }
        }

        .pulse-dot { animation: pulseDot 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 0.75; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }

        .badge-pulse { animation: badgePulse 3.4s ease-in-out infinite; }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 18px rgba(244,185,3,0.4); }
          50% { box-shadow: 0 0 28px rgba(244,185,3,0.7); }
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
        select option { background-color: ${C.ink}; }
        .logo-glow {
          box-shadow: 0 10px 40px -10px rgba(244, 185, 3, 0.15);
          transition: all 0.5s ease;
        }
        .logo-glow:hover {
          box-shadow: 0 15px 50px -5px rgba(244, 185, 3, 0.25);
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .bidcell, .bidnum, .gencell, .gentag, .pulse-dot, .badge-pulse, .bidtag-in, .fade-up { animation: none !important; }
        }
      `}</style>

      {!hideNavbar && (
        <>
          {/* ---------------- ANNOUNCEMENT BAR (Mobile & screens below tablet) ---------------- */}
          <div
            className="md:hidden w-full py-2.5 px-4 text-center flex items-center justify-center gap-2 text-[12.5px] font-medium border-b"
            style={{
              backgroundColor: C.panel,
              borderColor: C.panelBorder,
              color: C.paper,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <Phone size={12} style={{ color: C.gold }} />
            <span style={{ color: C.slateLight }}>Call Now:</span>
            <a href="tel:+919327024272" className="hover:underline" style={{ color: C.gold }}>
              +91 93270 24272
            </a>
          </div>

          {/* ---------------- NAV ---------------- */}
          <nav
            className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 py-4 border-b"
            style={{ borderColor: `${C.panelBorder}33`, backgroundColor: C.inkSoft }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/logo.png"
                alt="Frameboxx Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="h-6 w-px" style={{ backgroundColor: `${C.panelBorder}55` }} />
              <img
                src="/logo2.jpeg"
                alt="Partner Logo"
                className="h-8 sm:h-9 w-auto object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href="tel:+919327024272"
                className="hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors"
                style={{ backgroundColor: C.panel, color: C.paper, border: `1px solid ${C.panelBorder}` }}
              >
                <Phone size={13} style={{ color: C.gold }} />
                <span className="hidden sm:inline">Call Now:</span> +91 93270 24272
              </a>
            </div>
          </nav>
        </>
      )}

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        {currentMode === "marketing" && <BrandCollaboration />}
        {currentMode === "marketing" ? <BidBoard /> : <GenGrid />}

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 py-14 sm:py-20 flex flex-col gap-16">
          {currentMode === "marketing" ? (
            <>
              {/* Top part: Two-column grid with Synergy block on left, Form on right */}
              <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] items-start">
                {/* Left column: Synergy & Collaboration */}
                <div className="fade-up min-w-0 text-left lg:sticky lg:top-24 order-2 lg:order-1">
                  <span   
                    className="text-[11px] tracking-[0.2em] font-bold uppercase block mb-3"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: C.gold }}
                  >
                    Synergy & Collaboration
                  </span>
                  <h2 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.paper }}
                  >
                    A Powerful Collaboration
                  </h2>
                  <p 
                    className="text-sm sm:text-base leading-relaxed" 
                    style={{ color: C.slateLight }}
                  >
                    Frameboxx is proud to collaborate and present two specialized tracks designed to address the needs of today's digital landscape. Together, we bring industry experience, expert-led mentorship, and hands-on tool optimization to propel your creative career forward.
                  </p>

                  <div className="flex items-center justify-start gap-6 sm:gap-10 mt-10">
                    <div className="logo-glow p-4 bg-white rounded-2xl border" style={{ borderColor: C.panelBorder }}>
                      <img 
                        src="/logo.png" 
                        alt="Frameboxx Logo" 
                        className="h-10 sm:h-14 w-auto object-contain" 
                      />
                    </div>
                    <div 
                      className="text-xl sm:text-2xl font-bold font-sans" 
                      style={{ color: C.gold, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      ×
                    </div>
                    <div className="logo-glow p-4 bg-white rounded-2xl border" style={{ borderColor: C.panelBorder }}>
                      <img 
                        src="/logo2.jpeg" 
                        alt="Partner Brand Logo" 
                        className="h-10 sm:h-14 w-auto object-contain rounded-lg" 
                      />
                    </div>
                  </div>
                </div>

                {/* Right column: Form */}
                <div className="fade-up lg:sticky lg:top-8 order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
                  <ConsoleForm />
                </div>
              </div>
            </>
          ) : (
            /* AI Mode - Keep original layout centered */
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full px-4">
              <div
                className="fade-up inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-1.5 mb-7 max-w-full"
                style={{ border: `1px solid ${C.panelBorder}33`, backgroundColor: "rgba(244,185,3,0.05)" }}
              >
                <Sparkles size={12} className="shrink-0" style={{ color: C.gold }} />
                <span
                  className="tracking-[0.12em] text-center"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: C.butter,
                    fontSize: "clamp(9.5px, 2.8vw, 11px)",
                  }}
                >
                  LIVE COHORT ENROLLING · AI CONTENT CREATION
                </span>
              </div>

              <h1
                className="fade-up font-bold leading-[1.1] tracking-tight w-full max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: C.paper,
                  fontSize: "clamp(2rem, 6.5vw, 4.2rem)",
                  animationDelay: "0.08s",  
                  textAlign: "center",
                }}
              >
                Content Creation,
                <br />
                <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 w-full mt-1.5">
                  run by the
                  <span className="relative inline-flex items-center">
                    <span
                      className="bidtag-in inline-flex items-center gap-2 rounded-lg px-4 py-1"
                      style={{
                        background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
                        color: "#1C1D1C",
                      }}
                    >
                      machine
                    </span>
                  </span>
                </span>
              </h1>
              <div
                className="fade-up tracking-[0.14em] mt-2 mb-6 text-center"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: C.slateLight,
                  animationDelay: "0.5s",
                  fontSize: "clamp(10px, 2.5vw, 12px)",
                }}
              >
                RENDER COMPLETE · AI-DRIVEN CONTENT
              </div>

              <p
                className="fade-up leading-relaxed max-w-xl w-full px-2"
                style={{
                  color: C.slateLight,
                  animationDelay: "0.16s",
                  fontSize: "clamp(13.5px, 3.5vw, 16.5px)",
                }}
              >
                Every headline, edit, and visual now passes through a model
                before it ships — and the creators winning attention are the
                ones directing it. Learn to direct that pipeline yourself:
                prompting, generative design, video automation, and the
                copilots now powering all three.
              </p>

              <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-8 w-full px-4" style={{ animationDelay: "0.24s" }}>
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
                    borderColor: C.panelBorder,
                    color: C.paper,
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
                <GenerationLog />
              </div>

              <div className="fade-up flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mt-9 w-full px-4" style={{ animationDelay: "0.36s" }}>
                <span className="text-[11px] shrink-0" style={{ color: C.slateLight, fontFamily: "'JetBrains Mono', monospace" }}>
                  TOOLS YOU'LL MASTER
                </span>
                {["Midjourney", "Runway", "Adobe Firefly"].map((n) => (
                  <span key={n} className="text-sm font-medium shrink-0" style={{ color: C.paper, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {n}
                  </span>
                ))}
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full shrink-0"
                  style={{ color: C.gold, border: `1px solid ${C.panelBorder}`, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  20+ TOOLS
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
