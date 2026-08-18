import { experience } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Roles and technical leadership"
          description="Engineering and founder work across products, protocols and teams."
        />

        <ol className="mt-12 space-y-4">
          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.role}-${item.organization}`} delay={i * 0.05}>
              <article className="relative rounded-xl border border-border bg-surface p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.role}
                      <span className="text-muted-foreground"> · {item.organization}</span>
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                  {item.current ? (
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-success uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
