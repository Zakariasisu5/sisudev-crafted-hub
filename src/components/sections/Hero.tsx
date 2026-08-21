import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import portrait from "@/assets/zakaria-portrait.jpg";
import { availability, hero, person, stats } from "@/data/site";


export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {availability.open ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="eyebrow">{hero.badge}</span>
            </p>
          ) : null}

          <h1 className="mt-7 font-display text-[2.75rem] leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-[4rem]">
            {hero.headline}
          </h1>

          <p className="mt-6 font-mono text-xs tracking-[0.16em] text-primary uppercase">
            {hero.support}
          </p>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-md active:scale-[0.98]"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-lg border border-border-strong bg-surface px-6 text-sm font-medium transition-all hover:bg-surface-raised hover:border-border-strong active:scale-[0.98]"
            >
              Work with me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:text-foreground hover:border-border-strong hover:bg-surface-raised"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:text-foreground hover:border-border-strong hover:bg-surface-raised"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${person.email}`}
              aria-label="Send an email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:text-foreground hover:border-border-strong hover:bg-surface-raised"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="shadow-elevated relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={portrait}
              alt="Zakaria Sisu — Software Developer, Web3 & AI Specialist, Founder"
              width={768}
              height={1024}
              className="aspect-[3/4] w-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border bg-background/80 px-5 py-4 backdrop-blur-md">
              <span className="font-mono text-[11px] text-muted-foreground">
                {person.location} · Remote worldwide
              </span>
              <span className="eyebrow text-primary">{person.shortTitle.split(" · ")[0]}</span>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-5 lg:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-7 transition-colors hover:bg-surface-raised">
              <dt className="eyebrow">{stat.label}</dt>
              <dd className="mt-2.5 font-display text-xl font-semibold text-foreground md:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
