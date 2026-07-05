import Container from "./ui/Container";
import SocialLinks from "./SocialLinks";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink py-6">
      <Container className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <SocialLinks />
        <span>CS @ UWaterloo × BBA @ Laurier</span>
      </Container>
    </footer>
  );
}
