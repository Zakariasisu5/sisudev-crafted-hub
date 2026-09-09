import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import portrait from "@/assets/zakaria-portrait.jpg";
import { availability, hero, person, stats } from "@/data/site";
import { ActivityGraph } from "../ActivityGraph";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
          {/* Profile column */}
          <motion.aside
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={portrait}
                alt="Zakaria Sisu — Software Developer, Web3 & AI Specialist, Founder"
                width={768}
                height={1024}
                className="aspect-square w-full object-cover object-top"
                loading="eager"
              />
              <div className="border-t border-border p-4">
                <p className="text-base font-semibold">{person.name}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{person.githubUser}</p>

                {availability.open ? (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border-strong px-2.5 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{hero.badge}</span>
                  </p>
                ) : null}

                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{person.location} · Remote worldwide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <a href={`mailto:${person.email}`} className="truncate hover:text-primary">
                      {person.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="gh-icon-btn"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="gh-icon-btn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    aria-label="Send an email"
                    title="Email"
                    className="gh-icon-btn"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main column */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </p>

            <h1 className="mt-3 text-[2.25rem] leading-[1.1] font-semibold text-balance sm:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-4 font-mono text-xs tracking-[0.08em] text-primary uppercase">
              {hero.support}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group gh-btn-primary gh-btn-lg">
                View projects
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className="gh-btn gh-btn-lg">
                Work with me
              </a>
              {person.cvUrl && (
                <a
                  href={person.cvUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  download
                  className="gh-btn gh-btn-lg"
                >
                  Download Resume
                </a>
              )}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-surface px-4 py-3.5 transition-colors hover:bg-surface-raised">
                  <dd className="text-base font-semibold text-foreground">{stat.value}</dd>
                  <dt className="mt-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <ActivityGraph />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
