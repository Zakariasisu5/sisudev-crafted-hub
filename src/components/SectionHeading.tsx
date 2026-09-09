import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div
        className={`flex flex-col gap-5 border-b border-border pb-5 md:flex-row md:items-end ${
          align === "center" ? "text-center md:flex-col md:items-center" : "md:justify-between"
        }`}
      >
        <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">##</span> {eyebrow.toLowerCase()}
          </p>
          <h2 className="mt-2 text-2xl leading-tight font-semibold text-balance sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
