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
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I do"
          description="From concept to production. Frontend, backend, and everything between."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Layers;
            return (
              <Reveal as="li" key={service.number} delay={(i % 3) * 0.06} className="bg-surface">
                <div className="group h-full p-7 transition-all hover:bg-surface-raised">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background text-primary transition-all group-hover:border-primary/40 group-hover:bg-primary/5">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60">{service.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
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
