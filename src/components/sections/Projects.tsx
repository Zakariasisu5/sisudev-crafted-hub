import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { categories, projects, type Category } from "@/data/projects";
import { person } from "@/data/site";
import { ProjectCover } from "../ProjectCover";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real repositories and shipped products across Web3, AI, SaaS and full-stack engineering."
          action={
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border-strong bg-surface px-4 text-sm font-medium transition-colors hover:bg-surface-raised"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> All repositories
            </a>
          }
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`rounded-md border px-3.5 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
                active === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.repo} delay={(i % 3) * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong">
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-border">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={`${project.name} project cover`}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <ProjectCover project={project} />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold">{project.name}</h3>
                    <span className="eyebrow shrink-0 text-primary">{project.category}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" /> Code
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                      >
                        Live <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> demo of {project.name}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
