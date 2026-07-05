import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 bg-paper p-8 transition-colors hover:bg-paper-deep">
      <div className="flex items-center justify-between gap-3">
        <span className="bg-ink px-2.5 py-1 font-mono text-[13px] font-semibold tracking-[0.1em] text-paper">
          {project.symbol}
        </span>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
      <h3 className="font-serif text-3xl leading-tight">{project.title}</h3>
      <p className="font-mono text-[11.5px] leading-7 tracking-[0.04em] text-muted">
        {project.stack.join(" · ")}
      </p>
      <p className="text-[15.5px] leading-relaxed">{project.description}</p>
    </article>
  );
}
