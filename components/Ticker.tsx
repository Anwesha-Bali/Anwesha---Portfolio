import { tickerStats } from "@/lib/data";
import { cn } from "@/lib/cn";

export default function Ticker() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...tickerStats, ...tickerStats];

  return (
    <div
      className="overflow-hidden whitespace-nowrap border-b border-ink bg-ink text-paper"
      aria-hidden
    >
      <div className="inline-flex animate-marquee will-change-transform hover:[animation-play-state:paused]">
        {loop.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 border-r border-paper/20 px-8 py-3.5 font-mono text-[12.5px] tracking-[0.06em]"
          >
            {s.label}
            <span
              className={cn(
                s.direction === "up" ? "text-accent-soft" : "text-red-400",
                "dark:text-accent"
              )}
            >
              {s.direction === "up" ? "▲" : "▼"} {s.value}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
