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
  headline: "Building software that turns ambitious ideas into real products.",
  support: "Frontend. Backend. Web3. AI. Product Engineering.",
  description:
    "I design and engineer modern software across frontend, backend, Web3, and AI — from the first idea to a scalable production-ready product.",
} as const;

export const about = {
  title: "More than a developer. I'm a builder.",
  paragraphs: [
    "I'm a software developer focused on building products that combine strong engineering with great user experiences. My work spans frontend development, backend architecture, Web3, AI, and startup product engineering.",
    "I enjoy solving complex technical problems, designing scalable systems, improving product experiences, and turning ideas into working products.",
    "Beyond writing code, I work as a founder and technical leader, helping teams turn concepts into products and make practical engineering decisions.",
  ],
  intro:
    "I'm Zakaria Sisu, a software developer and technical builder focused on creating high-performance web applications, AI-powered products, and decentralized systems. I work across frontend, backend, Web3, and AI, turning complex ideas into reliable and scalable products. As a founder and technical leader, I also enjoy taking products from early concepts to production while helping teams make strong technical decisions.",
} as const;

export const stats = [
  { value: "4+", label: "Years Building Software" },
  { value: "10+", label: "Projects & Products" },
  { value: "Full-Stack", label: "Engineering" },
  { value: "Web3 + AI", label: "Specialization" },
  { value: "Founder", label: "Technical Leadership" },
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
      "Build fast, responsive and accessible user interfaces using modern React and TypeScript technologies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "layout",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Build scalable APIs, authentication systems, databases, business logic and backend infrastructure.",
    tags: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    icon: "server",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Build complete products from database architecture and APIs to polished frontend experiences.",
    tags: ["React", "Node.js", "Supabase", "Prisma"],
    icon: "layers",
  },
  {
    number: "04",
    title: "Web3 Development",
    description:
      "Build decentralized applications, blockchain integrations, wallet experiences, reputation systems and Web3 infrastructure.",
    tags: ["Solana", "Sui / Move", "Rust", "Wallets"],
    icon: "blocks",
  },
  {
    number: "05",
    title: "AI Product Development",
    description:
      "Build AI-powered applications, intelligent agents, automation systems and AI-driven analytics.",
    tags: ["LLM APIs", "AI Agents", "Python", "Analytics"],
    icon: "sparkles",
  },
  {
    number: "06",
    title: "Technical Leadership",
    description:
      "Help startups and teams with architecture, technical strategy, engineering decisions, MVP development and product delivery.",
    tags: ["Architecture", "Strategy", "MVP", "Delivery"],
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
  placeholder?: boolean;
};

/**
 * Placeholders on purpose — no words are attributed to anyone who has not
 * given them. Approved submissions from the testimonial form appear alongside.
 */
export const testimonialPlaceholders: Testimonial[] = Array.from(
  { length: 5 },
  () => ({
    name: "Your name here",
    role: "Job title",
    company: "Company",
    quote: "Add a verified client or teammate testimonial here.",
    placeholder: true,
  }),
);

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
