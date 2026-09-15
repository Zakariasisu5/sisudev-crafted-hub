import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Compass, Layers, LayoutGrid, Server, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  availability,
  collaborationSteps,
  engagementModels,
  experience,
  person,
  services,
} from "@/data/site";
import { featuredProjects } from "@/data/projects";

const SITE = "https://sisudev-crafted-hub.lovable.app";
const TITLE = "Services & Pricing — Zakaria Sisu";
const DESCRIPTION =
  "Software development services by Zakaria Sisu: frontend, backend, full-stack, Web3, and AI engineering. Engagement models, pricing, and how to collaborate.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/services` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
  }),
  component: ServicesPage,
});

const icons: Record<string, LucideIcon> = {
  layout: LayoutGrid,
  server: Server,
  layers: Layers,
  blocks: Blocks,
  sparkles: Sparkles,
  compass: Compass,
};

function ServicesPage() {
  const currentRoles = experience.filter((e) => e.current || e.period === "Ongoing");

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main className="pt-14">
        {/* Page header */}
        <section className="section-y border-b border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">#</span> services
              </p>
              <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Services, pricing, and how we work together
              </h1>
              <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                I take on selected software engineering projects — frontend, backend, Web3, and AI.
                Everything below reflects the work I actually ship, with clear engagement models and
                no surprises.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {availability.open ? (
                  <span className="gh-label border-success/40 text-success">
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                    {availability.label}
                  </span>
                ) : null}
                <a href="/#contact" className="gh-btn-primary">
                  Start a project
                </a>
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gh-btn"
                >
                  WhatsApp me
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-y border-b border-border" aria-labelledby="services-list">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="What I do"
              description="From concept to production. Frontend, backend, and everything between."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const Icon = icons[service.icon] ?? Layers;
                return (
                  <Reveal as="li" key={service.number} delay={(i % 3) * 0.05}>
                    <div className="gh-card gh-card-hover group flex h-full flex-col p-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface-raised text-primary transition-colors group-hover:border-border-strong">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {service.number}
                        </span>
                      </div>
                      <h2 className="mt-4 text-base font-semibold text-primary">{service.title}</h2>
                      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                        {service.tags.map((tag) => (
                          <li key={tag} className="gh-topic cursor-default">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Pricing / engagement models */}
        <section className="section-y border-b border-border" aria-labelledby="pricing">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHeading
              eyebrow="Pricing"
              title="Engagement models"
              description="Transparent ranges based on scope. Every project starts with a fixed estimate before any work begins."
            />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {engagementModels.map((model, i) => (
                <Reveal as="li" key={model.name} delay={i * 0.05}>
                  <div
                    className={`gh-card flex h-full flex-col p-5 ${
                      model.featured ? "border-primary/50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-base font-semibold">{model.name}</h2>
                      {model.featured ? (
                        <span className="gh-label border-primary/40 text-primary">Most common</span>
                      ) : null}
                    </div>
                    <p className="mt-3 font-mono text-xl font-semibold text-primary">{model.price}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{model.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-2 border-t border-border pt-4">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-success" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/#contact"
                      className={`${model.featured ? "gh-btn-primary" : "gh-btn"} mt-5 w-full`}
                    >
                      Start a project
                    </a>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Final pricing depends on scope and is always agreed in writing before work starts.
            </p>
          </div>
        </section>

        {/* How to collaborate */}
        <section className="section-y border-b border-border" aria-labelledby="process">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHeading
              eyebrow="Process"
              title="How we collaborate"
              description="A simple, transparent process — the same way I run my own products."
            />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {collaborationSteps.map((step, i) => (
                <Reveal as="li" key={step.step} delay={i * 0.05}>
                  <div className="gh-card flex h-full flex-col p-5">
                    <span className="font-mono text-xs text-primary">{step.step}</span>
                    <h2 className="mt-3 text-base font-semibold">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Proof: current roles + featured work */}
        <section className="section-y border-b border-border" aria-labelledby="proof">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHeading
              eyebrow="Track record"
              title="Experience behind the work"
              description="Current roles and selected shipped projects."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <Reveal>
                <div className="gh-card h-full p-5">
                  <h2 className="font-mono text-xs text-muted-foreground">Current roles</h2>
                  <ul className="mt-4 space-y-4">
                    {currentRoles.map((role) => (
                      <li key={`${role.role}-${role.organization}`} className="border-l-2 border-success/50 pl-4">
                        <p className="text-sm font-semibold">
                          {role.role} · {role.organization}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-success">{role.period}</p>
                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{role.summary}</p>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#experience"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    Full experience <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="gh-card h-full p-5">
                  <h2 className="font-mono text-xs text-muted-foreground">Selected projects</h2>
                  <ul className="mt-4 space-y-3">
                    {featuredProjects.slice(0, 4).map((project) => (
                      <li key={project.name} className="flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-primary">{project.name}</p>
                          <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <span className="gh-topic shrink-0 cursor-default">{project.category}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#projects"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    All projects <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y" aria-labelledby="cta">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <Reveal>
              <div className="gh-card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Have a project in mind?</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell me what you're building — I'll reply with a scope and estimate.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href="/#contact" className="gh-btn-primary">
                    Start a project
                  </a>
                  <Link to="/" className="gh-btn">
                    Back to portfolio
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
