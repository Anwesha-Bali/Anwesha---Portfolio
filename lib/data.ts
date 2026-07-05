import type {
  ExperienceEntry,
  Project,
  SkillGroup,
  SocialLink,
  TickerStat,
} from "./types";

export const site = {
  name: "Anwesha Bali",
  role: "CS + BBA @ UWaterloo x Laurier",
  tagline: "Building where AI meets money.",
  email: "a2bali@uwaterloo.ca",
  resumeUrl:
    "/Anwesha_Bali.pdf",
  url: "https://flourishing-raindrop-c85f26.netlify.app",
  location: "Waterloo, ON",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Anwesha-Bali" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anwesha-bali" },
  { label: "Email", href: "mailto:a2bali@uwaterloo.ca" },
];

export const tickerStats: TickerStat[] = [
  { label: "Power BI dashboards shipped", value: "4+", direction: "up" },
  { label: "Records processed", value: "100K+", direction: "up" },
  { label: "Model accuracy", value: "85%", direction: "up" },
  { label: "Analysis time", value: "30%", direction: "down" },
  { label: "Hackers hosted @ GeeseHacks", value: "300+", direction: "up" },
  { label: "Reporting hours saved / mo", value: "10+", direction: "up" },
  { label: "Rows analyzed in R", value: "500K+", direction: "up" },
  { label: "C-suite meetings booked", value: "15+", direction: "up" },
  { label: "Endowment governed @ MEF", value: "$9M", direction: "up" },
];

export const projects: Project[] = [
  {
    symbol: "FIN.AI",
    title: "AI Finance Agent",
    stack: ["Python", "Phi Framework", "Groq LLaMA-3.3-70B", "GPT-4o", "YFinance"],
    description:
      "An AI agent that pulls real-time financial data to summarize company fundamentals, stock prices, and analyst recommendations. It routes each query to the right tool using LLM-based decision-making.",
    github: "https://github.com/Anwesha-Bali/AI-Finance-Agent",
    featured: true,
  },
  {
    symbol: "AGRI",
    title: "AgriScan",
    stack: ["TensorFlow", "CNN", "FastAPI", "TF Lite", "React Native", "GCP"],
    description:
      "End-to-end deep learning: an image-classification model built, optimized, and deployed to a mobile app that helps farmers detect potato plant disease and cut crop loss.",
    github: "https://github.com/Anwesha-Bali/potato---prac",
    featured: true,
  },
  {
    symbol: "SPTF",
    title: "Spotify Dashboard",
    stack: ["Python", "Power BI", "Spotify API", "HTML"],
    description:
      "An interactive dashboard analyzing Spotify data with dynamic filters and trend insights, advanced visualization for data-driven listening decisions.",
    github: "https://github.com/Anwesha-Bali/Spotify-Data-Project",
    demo: "https://drive.google.com/file/d/1SG25yOsrBY6_FCA7woPrfY4dMqSZHxJW/view?usp=drive_link",
    featured: true,
  },
  {
    symbol: "PORT",
    title: "This Site",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "The page you're reading, a hand-built portfolio, continuously shipped. Design system inspired by financial print and market terminals.",
    github: "https://github.com/Anwesha-Bali/Anwesha---Portfolio",
  },
];

export const experience: ExperienceEntry[] = [
  {
    period: "Jun 2026 - Present",
    role: "Residence Life Don",
    org: "Wilfrid Laurier University",
    logoDomain: "wlu.ca",
    location: "Waterloo, ON · On-site",
    tools: ["Leadership", "Community building"],
    bullets: [
      "Support a first-year residence community through mentorship, programming, and crisis response.",
    ],
  },
  {
    period: "Sep 2025 - Present",
    role: "Director",
    org: "UWaterloo Mathematics Endowment Fund (MEF)",
    logoSrc: "/mef.png",
    location: "Waterloo, ON · On-site",
    tools: ["Governance", "Capital allocation"],
    bullets: [
      "Promoted from Undergraduate Rep to Director; help allocate six-figure funding from a $9M endowment to support students.",
    ],
  },
  {
    period: "Oct 2025 - Present",
    role: "Undergraduate Representative, CS School Council",
    org: "University of Waterloo",
    logoDomain: "uwaterloo.ca",
    location: "Waterloo, ON · On-site",
    tools: ["Advocacy", "Governance"],
    bullets: [
      "Represent undergraduate voices on curriculum and school-level decisions in the School of Computer Science.",
    ],
  },
  {
    period: "Sep 2025 - Dec 2025",
    role: "Agile Analyst (Intern)",
    org: "Co-operators",
    logoDomain: "cooperators.ca",
    location: "Kitchener, ON · Hybrid",
    team: "Web App Team",
    tools: ["Agile", "Analysis"],
    bullets: [
      "Supported agile delivery of client-facing insurance products at one of Canada's Top 100 Employers (2025).",
    ],
  },
  {
    period: "Feb 2025 - Present",
    role: "Member",
    org: "Rewriting the Code",
    logoDomain: "rewritingthecode.org",
    tools: ["Community"],
    bullets: [
      "Active member of a global community supporting women in tech through mentorship, events, and career development.",
    ],
  },
  {
    period: "Jan 2025 - Apr 2025",
    role: "Data Analyst (Intern)",
    org: "Ontario Public Service, Supply Chain Policy & Oversight",
    logoDomain: "ontario.ca",
    location: "Toronto, ON · Hybrid",
    team: "Supply Chain Policy and Oversight Division",
    tools: ["Python", "NumPy", "Matplotlib", "Power BI", "DAX"],
    bullets: [
      "Automated Python data pipelines and built 4+ Power BI dashboards on 100K+ records, cutting analysis time by 30%.",
    ],
  },
  {
    period: "Nov 2024 - Present",
    role: "Executive",
    org: "GeeseHacks",
    logoDomain: "geesehacks.com",
    tools: ["Leadership", "Event ops"],
    bullets: [
      "Helped plan and run GeeseHacks 2025, a business x tech hackathon serving 300+ participants.",
    ],
  },
  {
    period: "Aug 2024 - Dec 2024",
    role: "Software Developer (Intern)",
    org: "Stealth Startup",
    logoSrc: "/stealth_startup.jpeg",
    location: "Remote",
    tools: ["React", "Node.js", "Firebase", "OpenAI API"],
    bullets: [
      "Built React/Node/Firebase chatbots integrating the GPT-3.5 API to improve real-time engagement metrics.",
    ],
  },
  {
    period: "Jan 2024 - Apr 2024",
    role: "Inside Sales Representative (Intern)",
    org: "HubHead",
    logoSrc: "/hubhead.png",
    location: "Markham, ON · Remote",
    team: "Inside Sales Team",
    tools: ["HubSpot", "Sales Navigator", "B2B", "SEO"],
    bullets: [
      "Owned the full B2B sales cycle, securing 5 long-term clients across Oil & Gas and Utilities in Europe.",
    ],
  },
  {
    period: "Jan 2023 - Present",
    role: "Student Ambassador",
    org: "UWaterloo Mathematics Society",
    logoDomain: "uwaterloo.ca",
    location: "Waterloo, ON · On-site",
    tools: ["Outreach", "Mentoring"],
    bullets: [
      "Engaged prospective students and families through faculty tours, events, and personalized mentorship.",
    ],
  },
  {
    period: "Jun 2023",
    role: "Strategic Team Leader",
    org: "Deloitte STEM Summit",
    logoDomain: "deloitte.com",
    location: "Toronto, ON",
    tools: ["Python", "PyTorch", "SQL"],
    bullets: [
      "Built an ML blueprint (Python, PyTorch, SQL) projected to lift a client's production efficiency by 30%.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Technical",
    items: [
      { name: "Python, C++, C", tag: "Languages" },
      { name: "JavaScript, TypeScript, SQL, Bash", tag: "Languages" },
      { name: "React, Next.js, Node.js", tag: "Web" },
      { name: "R, Pandas, NumPy", tag: "Data" },
      { name: "Scikit-learn, TensorFlow", tag: "ML" },
      { name: "Firebase, AWS", tag: "Cloud" },
    ],
  },
  {
    label: "Business x Analytics",
    items: [
      { name: "Power BI, Matplotlib, Seaborn", tag: "Viz" },
      { name: "Financial analysis", tag: "Finance" },
      { name: "Market research", tag: "Strategy" },
      { name: "B2B sales, campaign planning", tag: "Growth" },
      { name: "Agile, cross-functional collab", tag: "Process" },
    ],
  },
  {
    label: "Human",
    items: [
      { name: "Leadership & mentoring", tag: "People" },
      { name: "Communication & public speaking", tag: "Voice" },
      { name: "Problem-solving & critical thinking", tag: "Mind" },
      { name: "Event planning & coordination", tag: "Ops" },
    ],
  },
];

