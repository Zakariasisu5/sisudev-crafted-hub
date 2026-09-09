import { Blocks, Compass, Layers, LayoutGrid, Server, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const icons: Record<string, LucideIcon> = {
  layout: LayoutGrid,
  server: Server,
  layers: Layers,
  blocks: Blocks,
  sparkles: Sparkles,
  compass: Compass,
};

export function Services() {
  return (
    <section id="services" className="section-y border-t border-border">
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

                  <h3 className="mt-4 text-base font-semibold text-primary">{service.title}</h3>

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
  );
}
