import TypeIt, { type TypeItProps } from "typeit-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Stat {
  key: string;
  value: string;
  delay?: number;
}

interface HeroTerminalProps {
  command?: string;
  stats?: Stat[];
  className?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const DEFAULT_COMMAND = "stats --engineer jonathan";

const DEFAULT_STATS: Stat[] = [
  { key: "workflows", value: "10+", delay: 200 },
  { key: "hrs_saved", value: "120/month", delay: 100 },
  { key: "team_adoption", value: "100%", delay: 100 },
  { key: "env", value: "production", delay: 100 },
  { key: "status", value: "open_to_work", delay: 200 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Pads a key with middle-dot characters so all values align vertically.
 * e.g. "workflows" → "workflows ··············· "
 */
function padLine(key: string, totalWidth = 32): string {
  const dots = totalWidth - key.length;
  return `${key} ${"·".repeat(Math.max(dots, 3))} `;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroTerminal({
  command = DEFAULT_COMMAND,
  stats = DEFAULT_STATS,
  className,
}: HeroTerminalProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.07] bg-[#0d1117] overflow-x-hidden",
        "px-4 pb-6 pt-4.5 sm:px-5",
        "font-mono text-[11px] sm:text-[13px] leading-relaxed",
        "min-h-55 select-none",
        className,
      )}
    >
      {/* ── Window chrome ── */}
      <div className="mb-4.5 flex items-center gap-2" aria-hidden="true">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
      </div>

      {/* ── Prompt line ── */}
      <div className="flex items-baseline whitespace-pre">
        <span className="text-[#79c0ff]">$</span>
        <span className="text-[#c9d1d9]"> {command}</span>
      </div>

      {/* ── Animated stats ── */}
      <TypeIt
        options={{
          speed: 28,
          cursor: false,
          afterComplete: (instance: TypeItProps) => {
            // Tailwind can't target dynamically created elements at runtime,
            // so the blinking cursor gets a minimal inline style.
            // Everything else uses Tailwind classes.
            const el = instance.getElement();
            if (!el) return;
            const cursor = document.createElement("span");
            cursor.setAttribute(
              "style",
              [
                "display:inline-block",
                "width:8px",
                "height:14px",
                "background:#4ade80",
                "vertical-align:text-bottom",
                "margin-left:2px",
                "animation:terminal-blink 1s step-end infinite",
              ].join(";"),
            );
            cursor.setAttribute("aria-hidden", "true");
            el.appendChild(cursor);
          },
        }}
        getBeforeInit={(instance) => {
          // Tailwind JIT detects these class strings at build time
          // because they are static — no dynamic class composition.
          stats.forEach(({ key, value, delay = 80 }) => {
            instance
              .pause(delay)
              .type(
                `<div class="flex items-baseline whitespace-pre mb-1.5">` +
                  `<span class="text-[#79c0ff]">${padLine(key)}</span>` +
                  `<span class="text-[#4ade80] font-semibold">${value}</span>` +
                  `</div>`,
              );
          });

          // Final prompt — cursor injected by afterComplete
          instance
            .pause(300)
            .type(
              `<div class="flex items-baseline whitespace-pre">` + `</div>`,
            );

          return instance;
        }}
      />

      {/*
        Single keyframe for the blinking cursor.
        Tailwind v3 doesn't include a step-end animation variant,
        so this is the only CSS that lives outside of Tailwind in
        this component. No global pollution beyond this keyframe.
      */}
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
