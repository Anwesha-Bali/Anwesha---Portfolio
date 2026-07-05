import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience timeline — data analysis, software engineering, AI training, and leadership roles.",
};

export default function ExperiencePage() {
  return (
    <section className="py-24 md:py-28">
      <Reveal>
        <SectionHeading title="Experience" index="Career timeline" />
      </Reveal>
      <Container>
        <Timeline entries={experience} />
      </Container>
    </section>
  );
}
