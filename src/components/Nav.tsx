import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, person } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border-strong bg-surface-raised font-mono text-xs font-semibold text-foreground">
              {person.initials}
            </span>
            <span className="hidden truncate text-sm font-semibold tracking-tight sm:block">
              {person.name}
            </span>
            <span className="gh-label hidden md:inline-flex">Portfolio</span>
          </a>

          <ul className="hidden h-full items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-surface-raised ${
                      isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-2 -bottom-[13px] h-0.5 rounded-full transition-all duration-200 ${
                        isActive ? "bg-attention opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="gh-btn-primary hidden sm:inline-flex">
              Start a project
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="gh-icon-btn lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-border px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-1 py-3 text-sm transition-colors hover:text-foreground ${
                    active === link.href.slice(1)
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href="#contact" onClick={() => setOpen(false)} className="gh-btn-primary w-full">
                Start a project
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
