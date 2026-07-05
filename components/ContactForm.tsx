"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border border-ink bg-transparent px-4 py-3.5 text-[15px] placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgojdvar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid max-w-xl gap-5" noValidate={false}>
      <label className="grid gap-2">
        <span className="eyebrow">Name</span>
        <input name="name" required autoComplete="name" className={fieldClass} placeholder="Jane Recruiter" />
      </label>
      <label className="grid gap-2">
        <span className="eyebrow">Email</span>
        <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="jane@company.com" />
      </label>
      <label className="grid gap-2">
        <span className="eyebrow">Message</span>
        <textarea name="message" required rows={5} className={fieldClass} placeholder="Tell me about the role or project…" />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn("btn btn-solid", status === "sending" && "opacity-60")}
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        <p role="status" aria-live="polite" className="font-mono text-xs text-muted">
          {status === "sent" && <span className="text-accent">Sent. I'll reply soon.</span>}
          {status === "error" && "Something went wrong. Email me directly instead."}
        </p>
      </div>
    </form>
  );
}
