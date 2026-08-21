import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Quote } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { submitTestimonial } from "@/lib/portfolio.functions";
import { type Testimonial } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

async function fetchApproved(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("name, job_title, company, testimonial, profile_url, avatar_url")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(12);

  if (error || !data) return [];
  return data.map((row) => ({
    name: row.name,
    role: row.job_title ?? "",
    company: row.company ?? "",
    quote: row.testimonial,
    ...(row.profile_url ? { profileUrl: row.profile_url } : {}),
    ...(row.avatar_url ? { avatarUrl: row.avatar_url } : {}),
  }));
}

export function Testimonials() {
  const [open, setOpen] = useState(false);
  const submit = useServerFn(submitTestimonial);

  const { data: approved = [] } = useQuery({
    queryKey: ["testimonials", "approved"],
    queryFn: fetchApproved,
  });

  const mutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => submit({ data } as never),
    onSuccess: () => {
      toast.success("Thank you — your testimonial was submitted for review.");
      setOpen(false);
    },
    onError: () => toast.error("Could not submit your testimonial. Please check the fields."),
  });

  const items: Testimonial[] = approved;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    mutation.mutate({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      jobTitle: String(form.get("jobTitle") ?? ""),
      company: String(form.get("company") ?? ""),
      profileUrl: String(form.get("profileUrl") ?? ""),
      testimonial: String(form.get("testimonial") ?? ""),
      consent: form.get("consent") === "on",
      website: String(form.get("website") ?? ""),
    });
  };

  return (
    <section id="testimonials" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          description="Verified testimonials from clients and collaborators."
          action={
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex h-11 items-center rounded-lg border border-border-strong bg-surface px-4 text-sm font-medium transition-all hover:bg-surface-raised hover:shadow-sm"
            >
              {open ? "Close form" : "Add testimonial"}
            </button>
          }
        />

        {items.length > 0 ? (
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal as="li" key={`${item.name}-${i}`} delay={(i % 3) * 0.05}>
                <figure className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all hover:border-border-strong hover:shadow-sm">
                  <Quote className="h-5 w-5 text-primary/60" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                      {[item.role, item.company].filter(Boolean).join(" · ")}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-14 rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Testimonials are currently being collected. If we've worked together, feel free to submit one.
            </p>
          </div>
        )}

        {open ? (
          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-5 rounded-xl border border-border bg-surface p-7 md:grid-cols-2 md:p-9"
          >
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div>
              <label className="eyebrow" htmlFor="t-name">Name</label>
              <input id="t-name" name="name" required className={`${inputClass} mt-2.5`} />
            </div>
            <div>
              <label className="eyebrow" htmlFor="t-email">Email</label>
              <input id="t-email" name="email" type="email" required className={`${inputClass} mt-2.5`} />
            </div>
            <div>
              <label className="eyebrow" htmlFor="t-job">Job title</label>
              <input id="t-job" name="jobTitle" className={`${inputClass} mt-2.5`} />
            </div>
            <div>
              <label className="eyebrow" htmlFor="t-company">Company</label>
              <input id="t-company" name="company" className={`${inputClass} mt-2.5`} />
            </div>
            <div className="md:col-span-2">
              <label className="eyebrow" htmlFor="t-profile">Profile URL (optional)</label>
              <input id="t-profile" name="profileUrl" type="url" className={`${inputClass} mt-2.5`} />
            </div>
            <div className="md:col-span-2">
              <label className="eyebrow" htmlFor="t-text">Testimonial</label>
              <textarea
                id="t-text"
                name="testimonial"
                required
                rows={5}
                minLength={20}
                className="mt-2.5 w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground md:col-span-2">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded accent-[var(--color-primary)]" />
              I consent to this testimonial being published on this website.
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="inline-flex h-12 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-md active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {mutation.isPending ? "Submitting…" : "Submit testimonial"}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </section>
  );
}
