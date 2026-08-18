import { about, person, stack } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="About" title={about.title} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                <div className="bg-surface px-5 py-4">
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-1 text-sm">{person.location}</dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="eyebrow">Focus</dt>
                  <dd className="mt-1 text-sm">Full-stack · Web3 · AI</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div id="stack" className="space-y-4">
            {stack.map((group, i) => (
              <Reveal key={group.name} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="eyebrow">{group.name}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
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
