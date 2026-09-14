import { BookOpen, FileCode2 } from "lucide-react";
import { about, person, stack } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading eyebrow="About" title={about.title} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
          {/* README-style document */}
          <Reveal>
            <article className="gh-card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-2.5">
                <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="font-mono text-xs text-foreground">README.md</span>
              </div>

              <div className="p-5 md:p-7">
                <h3 className="border-b border-border pb-2 text-xl font-semibold">
                  {about.title}
                </h3>

                <div className="mt-5 space-y-4">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[0.9375rem] leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <hr className="my-6 border-border" />

                <div className="rounded-md border-l-4 border-primary bg-surface-raised px-4 py-3">
                  <p className="text-sm leading-6 text-muted-foreground">{about.intro}</p>
                </div>

                <dl className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                  <div className="bg-surface px-4 py-3">
                    <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      Based in
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{person.location}</dd>
                  </div>
                  <div className="bg-surface px-4 py-3">
                    <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      Focus
                    </dt>
                    <dd className="mt-1 text-sm font-medium">Full-stack · Web3 · AI</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>

          {/* Skills as topic badges */}
          <div id="stack" className="space-y-4">
            {stack.map((group, i) => (
              <Reveal key={group.name} delay={i * 0.04}>
                <div className="gh-card gh-card-hover overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                    <FileCode2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <span className="text-sm font-semibold">{group.name}</span>
                    <span className="gh-label ml-auto">{group.items.length}</span>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 p-4">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`gh-topic cursor-default ${
                          group.emphasized.includes(item)
                            ? "border-primary/40 bg-primary/20 font-semibold"
                            : "border-border bg-surface-raised text-muted-foreground"
                        }`}
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
