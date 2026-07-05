"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/cn";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper">
      <div className="mx-auto flex h-[52px] w-full max-w-site items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-mono text-[13px] font-semibold tracking-[0.08em]"
          onClick={() => setOpen(false)}
        >
          ANWESHA.B <span className="text-accent">▲</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "border-b font-mono text-xs uppercase tracking-[0.1em] transition-colors",
                    pathname === l.href
                      ? "border-ink text-ink"
                      : "border-transparent text-muted hover:border-ink hover:text-ink"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent lg:flex">
            <span className="h-[7px] w-[7px] animate-pulse2 rounded-full bg-accent" />
            Open to 2026 new grad roles
          </span>
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-ghost px-3 py-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-ink bg-paper md:hidden"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-line last:border-0">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-[0.1em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
