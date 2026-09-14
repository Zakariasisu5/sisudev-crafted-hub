import { GitCommitHorizontal } from "lucide-react";
import { experience } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="CTO, founder, and full-stack engineer roles across startups and independent projects."
        />

        <ol className="relative mt-8 space-y-4 pl-7 md:pl-9">
          <span
            className="absolute top-2 bottom-2 left-[11px] w-px bg-border md:left-[15px]"
            aria-hidden="true"
          />

          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.role}-${item.organization}`} delay={i * 0.05}>
              <span
                className={`absolute -translate-x-[27px] md:-translate-x-[35px] mt-5 grid h-6 w-6 place-items-center rounded-full border bg-background ${
                  item.current
                    ? "border-success text-success"
                    : item.period === "Ongoing"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                }`}
                aria-hidden="true"
              >
                <GitCommitHorizontal className="h-3.5 w-3.5" />
              </span>

              <article className="gh-card gh-card-hover p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">
                      {item.role}
                      <span className="font-normal text-muted-foreground"> · {item.organization}</span>
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">{item.period}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                  {item.current || item.period === "Ongoing" ? (
                    <span
                      className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase ${
                        item.current
                          ? "border-success/40 bg-success/10 text-success"
                          : "border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${item.current ? "bg-success" : "bg-primary"}`}
                        aria-hidden="true"
                      />
                      {item.period}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
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
