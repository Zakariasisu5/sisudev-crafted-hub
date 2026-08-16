import type { Project } from "@/data/projects";

/**
 * Deterministic code-art cover for repositories without a bespoke thumbnail.
 * Built from the project's own name, category and stack — no stock imagery.
 */
export function ProjectCover({ project }: { project: Project }) {
  const seed = [...project.repo].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rows = project.technologies.slice(0, 4);
  const shift = seed % 5;

  return (
    <div className="relative h-full w-full overflow-hidden bg-surface bg-grid">
      <div
        className="absolute -top-16 -right-10 h-52 w-52 rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col justify-between p-5 font-mono text-[11px] leading-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
          <span className="ml-2 truncate text-muted-foreground">{project.repo}</span>
        </div>

        <div className="space-y-1 text-muted-foreground" aria-hidden="true">
          <p>
            <span className="text-primary">const</span> project ={" "}
            <span className="text-foreground">{"{"}</span>
          </p>
          {rows.map((tech, i) => (
            <p key={tech} style={{ paddingLeft: `${12 + ((i + shift) % 3) * 8}px` }}>
              <span className="text-foreground/70">{`stack[${i}]`}</span>: "{tech}",
            </p>
          ))}
          <p className="text-foreground">{"}"}</p>
        </div>

        <div className="flex items-end justify-between gap-2" aria-hidden="true">
          <div className="flex h-8 items-end gap-[3px]">
            {Array.from({ length: 22 }, (_, i) => (
              <span
                key={i}
                className="w-[3px] rounded-sm bg-primary/35"
                style={{ height: `${8 + ((seed + i * 13) % 24)}px` }}
              />
            ))}
          </div>
          <span className="eyebrow">{project.category}</span>
        </div>
      </div>
    </div>
  );
}
