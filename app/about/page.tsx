import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Anwesha Bali, a CS and BBA double degree student blending AI, data science, and finance.",
};

const positions = [
  {
    tag: "Focus",
    body: "Blending AI and Finance: the two languages I'm fluent in, and the overlap where I want to build my career.",
  },
  {
    tag: "Currently",
    body: "Exploring data science applications through the lens of AI and ML to optimize real business processes, not toy problems.",
  },
  {
    tag: "How I work",
    body: "Best in cross-functional teams, solving real-world problems, and pushing projects from idea to execution.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 md:py-28">
      <Reveal>
        <SectionHeading title="About" index="Who I am" />
      </Reveal>
      <Container>
        <Reveal>
          <p className="mb-16 max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
            I work at the intersection of business and technology, using{" "}
            <em className="italic text-accent">AI and machine learning</em> to
            make financial and operational decisions faster, sharper, and
            backed by data.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid gap-px border border-ink bg-ink md:grid-cols-3">
            {positions.map((p) => (
              <div key={p.tag} className="bg-paper p-8">
                <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {p.tag}
                </span>
                <p className="text-[16px] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
