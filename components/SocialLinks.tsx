import { Github, Linkedin, Mail } from "lucide-react";
import { socials } from "@/lib/data";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socials.map((s) => {
        const Icon = icons[s.label as keyof typeof icons];
        const external = s.href.startsWith("http");
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 border-b border-transparent font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {Icon && <Icon size={14} strokeWidth={1.75} />}
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
