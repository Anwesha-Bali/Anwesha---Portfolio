import Badge from "./ui/Badge";
import Reveal from "./Reveal";
import CompanyLogo from "./CompanyLogo";
import type { ExperienceEntry } from "@/lib/types";

export default function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative ml-2 border-l border-ink">
      {entries.map((e, i) => (
        <li key={`${e.role}-${e.org}`} className="relative pb-14 pl-10 last:pb-0">
          {/* node */}
          <span className="absolute -left-[7px] top-3 h-3.5 w-3.5 rounded-full border border-ink bg-accent" />
          <Reveal delay={Math.min(i * 0.05, 0.3)}>
            <div className="flex items-start gap-4">
              <CompanyLogo domain={e.logoDomain} src={e.logoSrc} name={e.org} />
              <div>
                <p className="eyebrow mb-1.5">
                  {e.period}
                  {e.location && (
                    <span className="normal-case tracking-normal">
                      {" "}
                      · {e.location}
                    </span>
                  )}
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  {e.role}{" "}
                  <span className="font-normal text-muted">· {e.org}</span>
                </h3>
                {e.team && (
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                    {e.team}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {e.tools.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <ul className="mt-4 max-w-2xl space-y-3">
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-6 text-[15.5px] leading-relaxed before:absolute before:left-0 before:top-1.5 before:text-[10px] before:text-accent before:content-['▲']"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
