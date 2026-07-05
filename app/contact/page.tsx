import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anwesha Bali about new grad roles and projects.",
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-28">
      <Reveal>
        <SectionHeading title="Let’s talk" index="Contact" />
      </Reveal>
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_320px]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="eyebrow mb-2">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="border-b border-transparent font-mono text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Elsewhere</p>
                <SocialLinks />
              </div>
              <div>
                <p className="eyebrow mb-2">Status</p>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-accent">
                  <span className="h-[7px] w-[7px] animate-pulse2 rounded-full bg-accent" />
                  Open to 2026 new grad roles
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
