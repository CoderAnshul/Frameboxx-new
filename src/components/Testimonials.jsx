import { useState, useEffect, useRef } from "react";
import { Play, ExternalLink, BadgeCheck, Sparkles } from "lucide-react";
import { C, FONTS } from "../theme";

/* ---------------------------------------------------------
   VIDEOS
   Titles below are my best read of the truncated captions
   visible in your screenshot — swap in the exact titles/
   channel details you want, they're plain data.
--------------------------------------------------------- */
const VIDEOS = [
  {
    id: "o9pE5R5RgU8",
    title: "Learning Redefined! #FrameboxxSurat",
    channel: "Frameboxx Surat",
    nomination: "AUDIENCE FAVORITE",
  },
  {
    id: "6406Sk5Wknc",
    title: "A Frameboxx Surat graduate's story",
    channel: "Frameboxx Surat",
    nomination: "MOST INSPIRING",
  },
  {
    id: "UrTicBzpusk",
    title: "In their own words",
    channel: "Frameboxx Surat",
    nomination: "STAFF PICK",
  },
  {
    id: "g88xlZDvGLE",
    title: '"Our students say it best" | #Frameboxx',
    channel: "Frameboxx Surat",
    nomination: "FAN VOTE WINNER",
  },
];

function VideoCard({ video, index, playingId, setPlayingId }) {
  const isPlaying = playingId === video.id;

  return (
    <div
      className="reel-card relative rounded-2xl overflow-hidden shrink-0"
      style={{
        border: `1px solid rgba(245,193,49,0.16)`,
        backgroundColor: "#242323",
      }}
    >
      <div className="relative w-full aspect-[9/16]">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          <button
            onClick={() => setPlayingId(video.id)}
            className="reel-thumb-btn absolute inset-0 w-full h-full text-left"
            aria-label={`Play: ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 32%, transparent 58%, rgba(0,0,0,0.82) 100%)" }}
            />

            {/* nomination ribbon */}
            <span
              className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[9.5px] font-semibold tracking-[0.1em]"
              style={{
                background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
                color: C.ink,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {video.nomination}
            </span>

            {/* index */}
            <span
              className="absolute top-3 right-3 text-[10px] tracking-wide px-2 py-0.5 rounded-full"
              style={{
                color: C.gold,
                border: `1px solid rgba(245,193,49,0.35)`,
                backgroundColor: "rgba(0,0,0,0.4)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {String(index + 1).padStart(2, "0")}/04
            </span>

            {/* play button */}
            <span
              className="reel-play absolute left-1/2 top-1/2 flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                transform: "translate(-50%, -50%)",
                background: `linear-gradient(135deg, ${C.gold}, ${C.butter})`,
                boxShadow: "0 10px 30px -8px rgba(245,193,49,0.55)",
              }}
            >
              <Play size={22} fill={C.ink} strokeWidth={0} style={{ marginLeft: 2 }} />
            </span>

            {/* channel + title */}
            <div className="absolute left-3.5 right-3.5 bottom-3.5 flex items-center gap-2.5">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 26, height: 26, backgroundColor: C.ink, border: `1.5px solid ${C.gold}` }}
              >
                <BadgeCheck size={13} style={{ color: C.gold }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-[13px] font-semibold leading-tight truncate"
                  style={{ color: C.paper, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {video.title}
                </p>
                <p className="text-[10.5px] mt-0.5" style={{ color: "rgba(245,243,239,0.55)" }}>
                  {video.channel}
                </p>
              </div>
            </div>
          </button>
        )}
      </div>

      {!isPlaying && (
        <a
          href={`https://www.youtube.com/shorts/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="reel-yt-link absolute bottom-3.5 right-3.5 flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, backgroundColor: "rgba(0,0,0,0.45)", border: `1px solid rgba(245,193,49,0.3)` }}
          aria-label="Open on YouTube"
        >
          <ExternalLink size={12} style={{ color: C.gold }} />
        </a>
      )}
    </div>
  );
}

export default function TestimonialsReel() {
  const [playingId, setPlayingId] = useState(null);
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        ${FONTS}
        .testimonials-section * { box-sizing: border-box; }

        .fade-up { opacity: 0; }
        .in-view .fade-up { animation: reelFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes reelFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reel-card { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s ease; }
        .reel-card:hover {
          transform: translateY(-6px);
          border-color: rgba(245,193,49,0.5);
          box-shadow: 0 24px 50px -20px rgba(245,193,49,0.18);
        }
        .reel-thumb-btn { cursor: pointer; }
        .reel-play { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .reel-card:hover .reel-play { transform: translate(-50%, -50%) scale(1.1); }
        .reel-yt-link { transition: transform 0.2s ease, border-color 0.2s ease; }
        .reel-yt-link:hover { transform: scale(1.08); border-color: rgba(245,193,49,0.7); }

        .reel-scroll { scrollbar-width: none; }
        .reel-scroll::-webkit-scrollbar { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .reel-card, .reel-play, .reel-yt-link { animation: none !important; transition: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`testimonials-section relative overflow-hidden py-20 sm:py-28 ${revealed ? "in-view" : ""}`}
        style={{ backgroundColor: C.inkSoft }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(560px circle at 8% 0%, rgba(245,193,49,0.07), transparent 60%), radial-gradient(480px circle at 100% 100%, rgba(252,209,88,0.05), transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
          {/* ---- Header ---- */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <div className="fade-up flex items-center justify-center gap-2.5 mb-3">
              <Sparkles size={13} style={{ color: C.gold }} />
              <span
                className="text-[11px] tracking-[0.18em]"
                style={{ color: C.gold, fontFamily: "'JetBrains Mono', monospace" }}
              >
                STUDENT VOICES · UNSCRIPTED
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
              Students Testimonials
            </h2>
            <p className="fade-up text-[14px] mt-3" style={{ color: C.slate, animationDelay: "0.1s" }}>
              Four graduates, four cameras, zero scripts.
            </p>
          </div>

          {/* ---- Reel wall ---- */}
          <div className="reel-scroll flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            {VIDEOS.map((video, i) => (
              <div key={video.id} className="fade-up w-[68vw] xs:w-[58vw] sm:w-auto" style={{ animationDelay: `${0.14 + i * 0.06}s` }}>
                <VideoCard video={video} index={i} playingId={playingId} setPlayingId={setPlayingId} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}