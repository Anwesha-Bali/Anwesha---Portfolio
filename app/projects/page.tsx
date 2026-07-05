import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Anwesha Bali — AI agents, deep learning, and data dashboards.",
};

export default function ProjectsPage() {
  return (
    <section className="py-24 md:py-28">
      <Reveal>
        <SectionHeading title="Projects" index="Selected projects" />
      </Reveal>
      <Container>
        <Reveal>
          <div className="grid gap-px border border-ink bg-ink md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.symbol} project={p} />
            ))}
            <article className="flex flex-col gap-4 bg-paper-deep p-8">
              <span className="w-fit bg-ink px-2.5 py-1 font-mono text-[13px] font-semibold tracking-[0.1em] text-paper">
                IPO
              </span>
              <h3 className="font-serif text-3xl leading-tight text-muted">
                Next project: filing pending
              </h3>
              <p className="text-[15.5px] leading-relaxed text-muted">
                Something new is in the pipeline. Check GitHub for early commits.
              </p>
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
