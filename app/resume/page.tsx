import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Anwesha Bali's résumé.",
};

export default function ResumePage() {
  return (
    <section className="py-24 md:py-28">
      <Reveal>
        <SectionHeading title="Résumé" index="DOWNLOAD" />
      </Reveal>
      <Container>
        <Reveal>
          <p className="mb-10 max-w-lg text-lg text-muted">
            The full one-pager: education, experience, projects, and skills,
            formatted for recruiters and ATS systems.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a className="btn btn-solid" href={site.resumeUrl} download>
              Download résumé ↓
            </a>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              Request references →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
