/**
 * Central portfolio configuration.
 * Everything editable about Zakaria Sisu lives here — no duplicated copy in components.
 */

export const person = {
  name: "Zakaria Sisu",
  initials: "ZS",
  title: "Software Developer · Frontend · Backend · Web3 · AI · Founder",
  shortTitle: "Software Developer · Web3 · AI · Founder",
  email: "zakariasisu5@gmail.com",
  phone: "+233 555 212 491",
  phoneRaw: "+233555212491",
  location: "Ghana",
  whatsapp: "https://wa.me/233555212491",
  github: "https://github.com/Zakariasisu5",
  githubUser: "Zakariasisu5",
  linkedin: "https://www.linkedin.com/in/zakaria-sisu",
  twitter: "https://x.com/sisu_zakaria",
  /** Point this at a hosted CV file when one is available. */
  cvUrl: "",
} as const;

export const availability = {
  /** Toggle to false when not taking on new work. */
  open: true,
  label: "Available for selected projects",
  note: "Currently open to selected software engineering, startup, Web3, AI, and product development opportunities.",
} as const;

export const hero = {
  badge: "Available for selected projects",
  headline: "I build software that ships.",
  support: "Frontend. Backend. Web3. AI. Product Engineering.",
  description:
    "Full-stack engineer specializing in high-performance web applications, decentralized systems, and AI-powered products. I turn technical challenges into shipped features.",
} as const;

export const about = {
  title: "Developer, founder, problem solver.",
  paragraphs: [
    "I write code that solves real problems. Whether it's a React dashboard, a Solana smart contract, or an AI agent—I focus on shipping working solutions, not just prototypes.",
    "My background spans full-stack development, blockchain infrastructure, and AI integration. I've built payment systems, decentralized applications, and product analytics platforms that people actually use.",
    "As a founder and CTO, I've learned that great engineering isn't just about clean code—it's about making the right tradeoffs, shipping fast, and iterating based on feedback.",
  ],
  intro:
    "I'm Zakaria Sisu, a full-stack developer and founder based in Ghana. I build web applications, blockchain systems, and AI-powered tools. My work focuses on practical engineering—choosing the right stack, writing maintainable code, and delivering features that solve real user problems.",
} as const;

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "∞", label: "Coffee Consumed" },
  { value: "Web3 + AI", label: "Specialties" },
  { value: "Remote", label: "Work Style" },
] as const;

export type StackGroup = { name: string; items: string[] };

export const stack: StackGroup[] = [
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "REST APIs",
    ],
  },
  {
    name: "Web3 / Blockchain",
    items: [
      "Solana",
      "Rust",
      "Sui",
      "Move",
      "Smart Contracts",
      "Wallet Integrations",
      "Helius",
      "QuickNode",
    ],
  },
  {
    name: "AI",
    items: [
      "Python",
      "AI APIs",
      "AI Agents",
      "LLM Integrations",
      "AI Analytics",
      "AI-powered Applications",
      "Machine Learning Integration",
    ],
  },
  {
    name: "Infrastructure",
    items: [
      "Supabase",
      "Firebase",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Railway",
      "Cloudflare",
    ],
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Fast, responsive interfaces using React, TypeScript, and modern tooling. I write components that scale and UIs that feel smooth.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "layout",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "APIs, databases, and business logic. From authentication flows to data pipelines, I build backends that handle real traffic.",
    tags: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    icon: "server",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end product development. Database design, API architecture, frontend polish—everything needed to ship a complete feature.",
    tags: ["React", "Node.js", "Supabase", "Prisma"],
    icon: "layers",
  },
  {
    number: "04",
    title: "Web3 Development",
    description:
      "Smart contracts, wallet integrations, and on-chain systems. I've shipped dApps on Solana and Sui with real transactions flowing through them.",
    tags: ["Solana", "Sui / Move", "Rust", "Wallets"],
    icon: "blocks",
  },
  {
    number: "05",
    title: "AI Integration",
    description:
      "LLM-powered features and AI agents that solve specific problems. I build practical AI tools, not demos—things like smart analytics and automated workflows.",
    tags: ["LLM APIs", "AI Agents", "Python", "Automation"],
    icon: "sparkles",
  },
  {
    number: "06",
    title: "Technical Leadership",
    description:
      "Architecture decisions, stack selection, and MVP development. I help teams ship faster by making clear technical choices early.",
    tags: ["Architecture", "Strategy", "MVP", "Mentoring"],
    icon: "compass",
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  /** Edit these freely — left intentionally unverified rather than invented. */
  period: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Chief Technology Officer",
    organization: "8Nova",
    period: "Add period",
    current: true,
    summary:
      "Technical leadership across product architecture and engineering delivery, working on both the frontend and backend of the product.",
    highlights: [
      "Technical strategy and engineering direction",
      "Product architecture and system design",
      "Frontend development and interface engineering",
      "Backend development, APIs and data modelling",
      "Team coordination and technical decision-making",
      "Taking product work from concept through to delivery",
    ],
  },
  {
    role: "Founder & Technical Lead",
    organization: "Independent products",
    period: "Add period",
    summary:
      "Building and shipping my own products end to end — from problem definition and architecture to production deployment.",
    highlights: [
      "Product definition and scoping",
      "Full-stack architecture and implementation",
      "Web3 protocol and dApp development",
      "AI feature design and integration",
    ],
  },
  {
    role: "Web3 Developer",
    organization: "Add organization",
    period: "Add period",
    summary:
      "Decentralized applications and on-chain systems across Solana, Sui/Move and EVM ecosystems, including wallet flows and reputation primitives.",
    highlights: [
      "Smart contract development and integration",
      "Wallet connection and transaction UX",
      "On-chain data indexing and analytics",
    ],
  },
  {
    role: "AI Builder",
    organization: "Add organization",
    period: "Add period",
    summary:
      "AI-powered applications and agents — LLM integrations, intelligent assistants and analytics layers embedded into real products.",
    highlights: [
      "LLM integration and prompt architecture",
      "Agent workflows and automation",
      "AI-assisted analytics and insights",
    ],
  },
  {
    role: "Full-Stack Developer",
    organization: "Add organization",
    period: "Add period",
    summary:
      "Frontend and backend engineering for web products — React interfaces backed by APIs, databases and authentication.",
    highlights: [
      "React and TypeScript interface engineering",
      "API design and backend services",
      "Database modelling and authentication",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  profileUrl?: string;
  avatarUrl?: string;
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const projectTypes = [
  "Website",
  "SaaS",
  "Web3",
  "AI",
  "Mobile App",
  "Backend/API",
  "Full-Stack",
  "Technical Consulting",
  "Other",
] as const;

export const budgets = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Let's Discuss",
] as const;
