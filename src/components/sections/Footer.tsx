import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, person } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border-strong bg-surface-raised font-mono text-xs font-semibold">
            {person.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{person.name}</p>
            <p className="truncate font-mono text-[11px] text-muted-foreground">{person.shortTitle}</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="gh-icon-btn"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="gh-icon-btn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={person.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="X profile"
            title="X"
            className="gh-icon-btn font-mono text-sm"
          >
            X
          </a>
          <a href={`mailto:${person.email}`} aria-label="Email" className="gh-icon-btn">
            <Mail className="h-4 w-4" />
          </a>
          <p className="ml-2 font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
