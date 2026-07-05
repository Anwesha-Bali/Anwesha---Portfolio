import Link from "next/link";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Ticker />

      {/* Featured projects */}
      <section className="border-b border-ink py-24 md:py-28">
        <Reveal>
          <SectionHeading title="Featured projects" index="01 / Selected work" />
        </Reveal>
        <Container>
          <Reveal>
            <div className="grid gap-px border border-ink bg-ink md:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.symbol} project={p} />
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <Link href="/projects" className="btn btn-ghost">
              Full portfolio →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Skills */}
      <section className="border-b border-ink bg-paper-deep py-24 md:py-28">
        <Reveal>
          <SectionHeading title="Skills" index="02 / Skills" />
        </Reveal>
        <Container>
          <Reveal>
            <Skills />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <h2 className="mb-4 font-serif text-6xl leading-none tracking-tight md:text-8xl">
              Let’s <em className="italic text-accent">talk.</em>
            </h2>
            <p className="mb-10 max-w-lg text-lg text-muted">
              Looking for 2026 new grad roles in data, AI, or product. If you’re
              building at the intersection of tech and business, I want to hear
              about it.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Get in touch →
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
