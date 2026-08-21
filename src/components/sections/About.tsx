import { about, person, stack } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="About" title={about.title} />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 0.06}>
                <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                <div className="bg-surface px-6 py-5 transition-colors hover:bg-surface-raised">
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-1.5 text-sm font-medium">{person.location}</dd>
                </div>
                <div className="bg-surface px-6 py-5 transition-colors hover:bg-surface-raised">
                  <dt className="eyebrow">Focus</dt>
                  <dd className="mt-1.5 text-sm font-medium">Full-stack · Web3 · AI</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div id="stack" className="space-y-5">
            {stack.map((group, i) => (
              <Reveal key={group.name} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-sm">
                  <p className="eyebrow">{group.name}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground hover:border-border-strong"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
