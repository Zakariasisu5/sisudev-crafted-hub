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
          title="What I build"
          description="End-to-end engineering across product, platform and protocol."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Layers;
            return (
              <Reveal as="li" key={service.number} delay={(i % 3) * 0.06} className="bg-surface">
                <div className="group h-full p-6 transition-colors hover:bg-surface-raised">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
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
