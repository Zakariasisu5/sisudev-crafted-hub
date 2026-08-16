import thumbCredlayer from "@/assets/thumb-credlayer.jpg";
import thumbMooncreditfi from "@/assets/thumb-mooncreditfi.jpg";
import thumbConfnect from "@/assets/thumb-confnect.jpg";
import thumbBillify from "@/assets/thumb-billify.jpg";
import thumbFarm from "@/assets/thumb-farm.jpg";
import thumbSentinel from "@/assets/thumb-sentinel.jpg";

export const categories = [
  "All",
  "Web3",
  "AI",
  "SaaS",
  "Frontend",
  "Backend",
  "Other",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  /** GitHub repository name — the source of truth. */
  repo: string;
  name: string;
  /** Verbatim or lightly trimmed from the public repository description. */
  description: string;
  category: Exclude<Category, "All">;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  thumbnail?: string;
  featured?: 1 | 2 | 3;
  /** Extra context written only from what the repository itself states. */
  highlights?: string[];
};

/**
 * Sourced from the public repositories on https://github.com/Zakariasisu5
 * Descriptions come from the repositories themselves. Nothing here is invented:
 * a project only carries a live link when the repository publishes one.
 */
export const projects: Project[] = [
  {
    repo: "Cred-Layer",
    name: "CredLayer",
    description:
      "Decentralized reputation protocol on Solana — wallet trust scores, AI risk intelligence, and behavioral analytics for autonomous finance.",
    category: "Web3",
    technologies: ["TypeScript", "React", "Solana", "Rust", "Web3"],
    githubUrl: "https://github.com/Zakariasisu5/Cred-Layer",
    liveUrl: "https://cred-layer-pi.vercel.app",
    thumbnail: thumbCredlayer,
    featured: 1,
    highlights: [
      "Wallet-level trust scoring on Solana",
      "AI risk intelligence over on-chain behaviour",
      "Behavioural analytics for autonomous finance agents",
    ],
  },
  {
    repo: "Mooncreditfi-sui-move",
    name: "MoonCreditFi",
    description:
      "Decentralized credit & DePIN funding platform. Borrow, lend, and fund real-world infrastructure projects ethically using on-chain credit profiles and transparent smart contracts.",
    category: "Web3",
    technologies: ["Move", "Sui", "TypeScript", "Smart Contracts"],
    githubUrl: "https://github.com/Zakariasisu5/Mooncreditfi-sui-move",
    liveUrl: "https://mooncreditfi-sui.vercel.app",
    thumbnail: thumbMooncreditfi,
    featured: 2,
    highlights: [
      "On-chain credit profiles",
      "Lending and borrowing flows",
      "DePIN infrastructure funding",
    ],
  },
  {
    repo: "nexus-connect",
    name: "Confnect",
    description:
      "An AI-powered networking platform that helps users connect, schedule meetings, chat, and manage profiles, with insights and support.",
    category: "AI",
    technologies: ["TypeScript", "React", "AI APIs", "Realtime Chat"],
    githubUrl: "https://github.com/Zakariasisu5/nexus-connect",
    liveUrl: "https://www.confnect.site",
    thumbnail: thumbConfnect,
    featured: 3,
    highlights: [
      "Meeting scheduling and messaging",
      "Profile management",
      "AI-generated networking insights",
    ],
  },
  {
    repo: "securewatcher-sentinel",
    name: "Sentinel IDS",
    description:
      "An AI-powered intrusion detection system delivering real-time threat monitoring, hybrid detection (signature + anomaly), and automated incident response.",
    category: "AI",
    technologies: ["TypeScript", "React", "AI", "Security"],
    githubUrl: "https://github.com/Zakariasisu5/securewatcher-sentinel",
    liveUrl: "https://securewatcher-sentinel.vercel.app/",
    thumbnail: thumbSentinel,
    highlights: [
      "Hybrid signature + anomaly detection",
      "Real-time threat monitoring",
      "Automated incident response",
    ],
  },
  {
    repo: "billify-generator-8701",
    name: "Billify",
    description:
      "A bill and invoice generator that lets users create, customize, and download invoices in multiple currencies with ready-to-use templates.",
    category: "SaaS",
    technologies: ["JavaScript", "React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/Zakariasisu5/billify-generator-8701",
    liveUrl: "https://bill-generator-amber.vercel.app",
    thumbnail: thumbBillify,
    highlights: [
      "Multi-currency invoicing",
      "Reusable invoice templates",
      "Download-ready documents",
    ],
  },
  {
    repo: "farmer-focus-connect",
    name: "Farm Focus Connect",
    description:
      "A platform designed to bridge the gap between farmers, suppliers, and consumers, giving farmers tools to connect and collaborate in a digital ecosystem.",
    category: "SaaS",
    technologies: ["TypeScript", "React", "Supabase"],
    githubUrl: "https://github.com/Zakariasisu5/farmer-focus-connect",
    liveUrl: "https://farmers-focus-connect.vercel.app",
    thumbnail: thumbFarm,
    highlights: [
      "Farmer, supplier and consumer profiles",
      "Marketplace and collaboration tools",
    ],
  },
  {
    repo: "bizlaunch360",
    name: "BizLaunch360",
    description:
      "An AI-powered business management platform for small business owners — business plans, customers, invoices, appointments and finances in one place.",
    category: "SaaS",
    technologies: ["TypeScript", "React", "AI", "Tailwind CSS"],
    githubUrl: "https://github.com/Zakariasisu5/bizlaunch360",
    liveUrl: "https://bizlaunch360.vercel.app",
  },
  {
    repo: "web3thriveai",
    name: "Web3ThriveAI",
    description:
      "A freelance platform for Africa-based freelancers combining Web3 and AI, including AI-powered skill assessments with NFT certifications.",
    category: "Web3",
    technologies: ["TypeScript", "Blockchain", "AI", "NFT"],
    githubUrl: "https://github.com/Zakariasisu5/web3thriveai",
    liveUrl: "https://web3thriveai.vercel.app",
  },
  {
    repo: "voice-chain-pay",
    name: "VoiceChainPay",
    description:
      "AI-powered cross-chain payroll for DAOs and remote teams — multi-chain payouts, voice-enabled approvals and real-time treasury management built on ZetaChain.",
    category: "Web3",
    technologies: ["TypeScript", "ZetaChain", "AI", "Web3"],
    githubUrl: "https://github.com/Zakariasisu5/voice-chain-pay",
    liveUrl: "https://payroll-psi-flax.vercel.app",
  },
  {
    repo: "aptos-orbit",
    name: "GlobePayX",
    description:
      "A decentralized Web3 platform for sending money, swapping currencies, managing payroll and tracking treasury balances, powered by Aptos smart contracts.",
    category: "Web3",
    technologies: ["TypeScript", "Aptos", "Move", "dApp"],
    githubUrl: "https://github.com/Zakariasisu5/aptos-orbit",
    liveUrl: "https://globepay.vercel.app",
  },
  {
    repo: "Biological-Chain-Project",
    name: "BioLogic Chain",
    description:
      "A health technology platform combining AI and blockchain for predictive health monitoring and secure medical data management from real-time wearable data.",
    category: "Web3",
    technologies: ["TypeScript", "Blockchain", "AI", "Healthcare"],
    githubUrl: "https://github.com/Zakariasisu5/Biological-Chain-Project",
    liveUrl: "https://biological-chain-project.vercel.app",
  },
  {
    repo: "pulsepay",
    name: "PulsePay",
    description:
      "A decentralized, gasless Web3 subscription protocol built on Sonic Blockchain, enabling recurring crypto payments with wallet-based authentication and automated scheduling.",
    category: "Web3",
    technologies: ["JavaScript", "Sonic", "Smart Contracts", "Web3"],
    githubUrl: "https://github.com/Zakariasisu5/pulsepay",
    liveUrl: "https://pulsepay-tau.vercel.app",
  },
  {
    repo: "AI-AGENT",
    name: "Selassie AI Agent",
    description:
      "An AI agent built to understand, learn and respond in real time, combining machine learning with reasoning capabilities.",
    category: "AI",
    technologies: ["Python", "Machine Learning", "LLM"],
    githubUrl: "https://github.com/Zakariasisu5/AI-AGENT",
  },
  {
    repo: "microfarmly-grow-together",
    name: "MicroFarmly",
    description:
      "An AI-powered hyperlocal farming and food subscription platform for cafes, coworking spaces and urban communities using vertical farming kiosks.",
    category: "SaaS",
    technologies: ["TypeScript", "React", "AI"],
    githubUrl: "https://github.com/Zakariasisu5/microfarmly-grow-together",
    liveUrl: "https://microfarmly-grow-together.vercel.app",
  },
  {
    repo: "school-connect",
    name: "Attendly",
    description:
      "A school connection and attendance web application built with TypeScript and React.",
    category: "SaaS",
    technologies: ["TypeScript", "React", "Supabase"],
    githubUrl: "https://github.com/Zakariasisu5/school-connect",
    liveUrl: "https://attendly-khaki.vercel.app/",
  },
  {
    repo: "Green-Pulse",
    name: "GreenPulse",
    description:
      "A mobile-first web app that helps communities make eco-friendly choices, track impact with GreenPoints, and stay motivated with daily tips and challenges.",
    category: "Frontend",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Zakariasisu5/Green-Pulse",
    liveUrl: "https://green-pulse-mu.vercel.app/",
  },
  {
    repo: "eco-companion",
    name: "Green Living Companion",
    description:
      "Practical guidance on reducing environmental impact through energy conservation, waste reduction and eco-friendly practices at home and work.",
    category: "Frontend",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Zakariasisu5/eco-companion",
    liveUrl: "https://green-living-companion.vercel.app",
  },
  {
    repo: "Argon-Admin-Dashboard-",
    name: "Argon Admin Dashboard",
    description:
      "A feature-rich admin dashboard built with React, Vite and Material UI, with both dark and light themes.",
    category: "Frontend",
    technologies: ["JavaScript", "React", "Vite", "Material UI"],
    githubUrl: "https://github.com/Zakariasisu5/Argon-Admin-Dashboard-",
    liveUrl: "https://argon-admin-dashboard.vercel.app",
  },
  {
    repo: "uds-gpa-calculator",
    name: "UDS GPA Calculator",
    description:
      "A web application that helps University for Development Studies students compute and track their GPA.",
    category: "Frontend",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/Zakariasisu5/uds-gpa-calculator",
    liveUrl: "https://uds-gpa-calculator.vercel.app",
  },
  {
    repo: "student-directory",
    name: "Student Directory",
    description:
      "A React application for managing and displaying student profiles with interactive features.",
    category: "Frontend",
    technologies: ["JavaScript", "React"],
    githubUrl: "https://github.com/Zakariasisu5/student-directory",
    liveUrl: "https://student-directory-delta.vercel.app",
  },
  {
    repo: "welcome-to-docker1",
    name: "Docker Sandbox",
    description:
      "A containerisation sandbox used to explore Docker images, builds and local service orchestration.",
    category: "Backend",
    technologies: ["Docker", "JavaScript"],
    githubUrl: "https://github.com/Zakariasisu5/welcome-to-docker1",
  },
  {
    repo: "mobile-tech-hub-online",
    name: "Fix Phone Pro",
    description:
      "A responsive site for booking phone repairs, browsing devices and viewing service prices.",
    category: "Other",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Zakariasisu5/mobile-tech-hub-online",
    liveUrl: "https://fix-phone-pro.vercel.app",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featured ?? 9) - (b.featured ?? 9));
