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
        className={`flex flex-col gap-6 md:flex-row md:items-end ${
          align === "center" ? "text-center md:flex-col md:items-center" : "md:justify-between"
        }`}
      >
        <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl md:text-[2.75rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
