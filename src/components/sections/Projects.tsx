import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ChevronDown, ChevronUp, BookMarked, Star } from "lucide-react";
import { categories, projects, featuredProjects, type Category, type Project } from "@/data/projects";
import { person } from "@/data/site";
import { ProjectCover } from "../ProjectCover";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

function RepoCard({ project, showImage = true }: { project: Project; showImage?: boolean }) {
  return (
    <article className="gh-card gh-card-hover group flex h-full flex-col overflow-hidden">
      {showImage ? (
        <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-raised">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.name} project cover`}
              loading="lazy"
              width={800}
              height={450}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 text-[0.9375rem] font-semibold text-primary">
            <BookMarked className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="truncate">{project.name}</span>
          </h3>
          <span className="gh-label shrink-0">{project.category}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="gh-topic cursor-default">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="gh-btn h-8 px-3 text-xs"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" /> Code
            <span className="sr-only"> for {project.name}</span>
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link gh-btn h-8 px-3 text-xs"
            >
              Live demo
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="sr-only"> of {project.name}</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const otherProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  const visibleFeatured = useMemo(
    () => (active === "All" ? featuredProjects : featuredProjects.filter((p) => p.category === active)),
    [active],
  );

  const visibleOther = useMemo(
    () => (active === "All" ? otherProjects : otherProjects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real repositories with actual code and live deployments. No mockups."
          action={
            <a href={person.github} target="_blank" rel="noreferrer noopener" className="gh-btn">
              <Github className="h-4 w-4" aria-hidden="true" /> All repositories
            </a>
          }
        />

        {/* Tab-style filters */}
        <div className="mt-6 -mx-4 overflow-x-auto border-b border-border px-4 lg:mx-0 lg:px-0">
          <div className="flex min-w-max gap-1" role="tablist" aria-label="Filter projects">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category)}
                  className={`relative -mb-px rounded-t-md border-b-2 px-3.5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "border-attention font-semibold text-foreground"
                      : "border-transparent text-muted-foreground hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className="ml-2 rounded-full border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {category === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === category).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured */}
        {visibleFeatured.length > 0 && (
          <>
            <h3 className="mt-8 mb-4 flex items-center gap-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-attention" aria-hidden="true" />
              Featured
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {visibleFeatured.map((project, i) => (
                <Reveal as="li" key={project.repo} delay={(i % 2) * 0.05}>
                  <RepoCard project={project} />
                </Reveal>
              ))}
            </ul>
          </>
        )}

        {/* More */}
        {visibleOther.length > 0 && (
          <>
            <div className="mt-10 flex items-center justify-between gap-4 border-b border-border pb-3">
              <h3 className="text-sm font-semibold">More Projects</h3>
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="gh-btn h-8 px-3 text-xs"
              >
                {showAll ? (
                  <>
                    Show less <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    Show all ({visibleOther.length}) <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>

            {showAll ? (
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleOther.map((project, i) => (
                  <Reveal as="li" key={project.repo} delay={(i % 3) * 0.04}>
                    <RepoCard project={project} />
                  </Reveal>
                ))}
              </ul>
            ) : (
              <ul className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
                {visibleOther.slice(0, 6).map((project) => (
                  <li key={project.repo} className="p-4 transition-colors hover:bg-surface-raised">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="flex min-w-0 items-center gap-2 text-sm font-semibold text-primary">
                            <BookMarked className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            <span className="truncate">{project.name}</span>
                          </h4>
                          <span className="gh-label">{project.category}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="gh-topic cursor-default">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="gh-icon-btn"
                          title="View code"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="gh-icon-btn"
                            title="Live demo"
                            aria-label={`View ${project.name} live`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </section>
  );
}
