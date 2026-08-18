import { navLinks, person } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold">{person.name}</p>
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">{person.shortTitle}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
