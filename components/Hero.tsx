"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import { site } from "@/lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-52px)] flex-col justify-center overflow-hidden border-b border-ink">
      {/* Sparkline backdrop */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] w-full opacity-50"
        viewBox="0 0 1400 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className="fill-accent opacity-[0.06]"
          d="M0,300 L0,260 C80,250 140,210 220,215 C300,220 340,170 420,175 C500,180 560,120 640,130 C720,140 780,90 860,95 C940,100 1000,60 1080,70 C1160,80 1220,30 1300,25 L1400,15 L1400,320 L0,320 Z"
        />
        <motion.path
          className="stroke-accent"
          fill="none"
          strokeWidth={2}
          d="M0,260 C80,250 140,210 220,215 C300,220 340,170 420,175 C500,180 560,120 640,130 C720,140 780,90 860,95 C940,100 1000,60 1080,70 C1160,80 1220,30 1300,25 L1400,15"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.3, ease: "easeOut" }}
        />
      </svg>

      <Container className="relative z-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="eyebrow mb-7 flex items-center gap-3.5 before:block before:h-px before:w-11 before:bg-ink">
            Portfolio · {site.location} · CS @ UW × BBA @ WLU
          </p>
          <h1 className="mb-8 font-serif text-6xl leading-[0.94] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Anwesha
            <br />
            builds where <em className="italic text-accent">AI meets money.</em>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed">
            4th-year <strong>Computer Science + Business</strong> double degree
            student at the <strong>University of Waterloo</strong> and{" "}
            <strong>Wilfrid Laurier University</strong>. I build data models,
            dashboards, and tools that help teams make decisions.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a className="btn btn-solid" href={site.resumeUrl} download>
              Download résumé ↓
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
