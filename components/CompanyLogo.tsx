"use client";

import { useState } from "react";

/**
 * Company logo tile. Priority:
 *   1. logoSrc  — a local image in /public (best quality)
 *   2. logoDomain — favicon fetched by domain
 *   3. monogram fallback — so a broken logo never breaks the layout
 */
export default function CompanyLogo({
  domain,
  src,
  name,
}: {
  domain?: string;
  src?: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  // 1. Local image — padded on white so dark logos stay legible in both themes.
  if (src && !failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-line bg-white p-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      </span>
    );
  }

  // 2. Favicon by domain.
  if (domain && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={`${name} logo`}
        width={40}
        height={40}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-10 w-10 shrink-0 border border-line bg-white object-contain p-1.5"
      />
    );
  }

  // 3. Monogram.
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink bg-paper-deep font-mono text-xs font-semibold"
    >
      {initials}
    </span>
  );
}
