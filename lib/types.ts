export type Project = {
  symbol: string;
  title: string;
  stack: string[];
  description: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  /** Company domain used to fetch a logo, e.g. "deloitte.com" */
  logoDomain?: string;
  /** Local logo in /public, e.g. "/hubhead.png". Takes priority over logoDomain. */
  logoSrc?: string;
  location?: string;
  team?: string;
  tools: string[];
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: { name: string; tag: string }[];
};


export type SocialLink = {
  label: string;
  href: string;
};

export type TickerStat = {
  label: string;
  value: string;
  direction: "up" | "down";
};
