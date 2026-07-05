import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div className="grid gap-11 md:grid-cols-3">
      {skills.map((group) => (
        <div key={group.label}>
          <h3 className="mb-5 border-b border-ink pb-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {group.label}
          </h3>
          <ul>
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-2.5 border-b border-line py-2.5 text-[15.5px]"
              >
                {item.name}
                <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
