import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { C } from "../theme";

const MODULES = [
  {
    n: "01",
    title: "Search & SEO Auctions",
    body:
      "How Google actually decides who wins a click: keyword bidding, quality score, and on-page SEO that keeps cost-per-click honest.",
    tools: ["Google Ads", "Keyword Planner", "Search Console"],
  },
  {
    n: "02",
    title: "Social Algorithms",
    body:
      "Build and read the ranking systems behind Meta, Instagram, and LinkedIn feeds \u2014 targeting, creative testing, and pixel tracking.",
    tools: ["Meta Ads Manager", "Business Suite", "LinkedIn Campaign Manager"],
  },
  {
    n: "03",
    title: "AI Copilots for Marketers",
    body:
      "Prompt-driven ad copy, creative variants, and campaign structuring \u2014 the AI layer now sitting on top of every major platform.",
    tools: ["Copilot Studio", "Gemini for Ads", "Generative creative tools"],
  },
  {
    n: "04",
    title: "Analytics & Attribution",
    body:
      "Turn raw traffic into a decision: GA4 event mapping, multi-touch attribution, and dashboards a client can actually read.",
    tools: ["GA4", "Looker Studio", "Tag Manager"],
  },
  {
    n: "05",
    title: "Content & Creative Systems",
    body:
      "Editorial calendars, brand voice, and a repeatable content engine that keeps every channel fed without burning out the team.",
    tools: ["Content calendars", "Canva", "Brand playbooks"],
  },
  {
    n: "06",
    title: "Capstone Campaign",
    body:
      "A live budget and a real client brief. You plan, launch, optimize, and report \u2014 then defend the results for certification.",
    tools: ["Full stack", "Client brief", "Frameboxx Certificate"],
  },
];

export default function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full">
      {MODULES.map((m, i) => {
        const isOpen = open === i;
        const isEven = i % 2 === 0;
        const activeAccentColor = C.gold;
        return (
          <div key={m.n} style={{ borderTop: i === 0 ? `1px solid ${C.panelBorder}33` : "none", borderBottom: `1px solid ${C.panelBorder}33` }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center gap-5 py-5 text-left group cursor-pointer"
            >
              <span
                className="text-[13px] shrink-0 w-7"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: isOpen ? activeAccentColor : C.slateLight }}
              >
                {m.n}
              </span>
              <span
                className="flex-1 text-lg sm:text-xl font-medium tracking-tight transition-colors"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: isOpen ? C.paper : C.slateLight,
                }}
              >
                {m.title}
              </span>
              <ChevronDown
                size={18}
                className="shrink-0 transition-transform duration-300"
                style={{
                  color: isOpen ? activeAccentColor : C.slateLight,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="pl-12 pr-8 pb-6 max-w-2xl">
                  <p className="text-[14.5px] leading-relaxed" style={{ color: C.slateLight }}>
                    {m.body}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {m.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: C.butter,
                          border: `1px solid ${C.panelBorder}`,
                          backgroundColor: "rgba(244,185,3,0.06)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
