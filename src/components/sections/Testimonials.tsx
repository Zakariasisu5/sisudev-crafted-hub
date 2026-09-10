import { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { submitTestimonial } from "@/lib/portfolio.functions";
import { type Testimonial } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

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

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useServerFn(submitTestimonial);

  const { data: approved = [] } = useQuery({
    queryKey: ["testimonials", "approved"],
    queryFn: fetchApproved,
  });

  const mutation = useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      try {
        return await submit({ data } as never);
      } catch (error) {
        console.error("Testimonial submission error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Thank you — your testimonial was submitted for review.");
      setOpen(false);
      formRef.current?.reset();
    },
    onError: (error: Error) => {
      console.error("Mutation error:", error);
      toast.error(error.message || "Could not submit your testimonial. Please check the fields.");
    },
  });

  const items: Testimonial[] = approved;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const consentValue = form.get("consent");
    const isConsented = consentValue === "on" || consentValue === "true";

    mutation.mutate({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      jobTitle: String(form.get("jobTitle") ?? ""),
      company: String(form.get("company") ?? ""),
      profileUrl: String(form.get("profileUrl") ?? ""),
      testimonial: String(form.get("testimonial") ?? ""),
      consent: isConsented,
      website: String(form.get("website") ?? ""),
    });
  };

  return (
    <section id="testimonials" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          description="Verified testimonials from clients and collaborators."
          action={
            <button type="button" onClick={() => setOpen((v) => !v)} className="gh-btn">
              {open ? "Close form" : "Add testimonial"}
            </button>
          }
        />

        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4 lg:grid-cols-2">
            {items.map((item, i) => (
              <Reveal as="li" key={`${item.name}-${i}`} delay={(i % 2) * 0.05}>
                <figure className="gh-card gh-card-hover flex h-full flex-col overflow-hidden">
                  <figcaption className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-2.5">
                    {item.avatarUrl ? (
                      <img
                        src={item.avatarUrl}
                        alt=""
                        loading="lazy"
                        className="h-7 w-7 shrink-0 rounded-full border border-border object-cover"
                      />
                    ) : (
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background font-mono text-[10px] text-muted-foreground">
                        {initials(item.name)}
                      </span>
                    )}
                    <span className="min-w-0 text-sm">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-muted-foreground"> commented</span>
                    </span>
                    <span className="gh-label ml-auto shrink-0">verified</span>
                  </figcaption>

                  <blockquote className="flex-1 px-4 py-4 text-sm leading-6 text-muted-foreground">
                    {item.quote}
                  </blockquote>

                  <p className="border-t border-border px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
                    {[item.role, item.company].filter(Boolean).join(" · ")}
                  </p>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-border bg-surface p-10 text-center">
            <MessageSquare className="mx-auto h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <p className="mt-3 text-sm text-muted-foreground">
              Testimonials are currently being collected. If we've worked together, feel free to submit one.
            </p>
          </div>
        )}

        {open ? (
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="gh-card mt-6 overflow-hidden"
          >
            <div className="border-b border-border bg-surface-raised px-4 py-2.5">
              <p className="font-mono text-xs text-foreground">new testimonial</p>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div>
                <label className="gh-field-label" htmlFor="t-name">Name</label>
                <input id="t-name" name="name" required className="gh-input" />
              </div>
              <div>
                <label className="gh-field-label" htmlFor="t-email">Email</label>
                <input id="t-email" name="email" type="email" required className="gh-input" />
              </div>
              <div>
                <label className="gh-field-label" htmlFor="t-job">Job title</label>
                <input id="t-job" name="jobTitle" className="gh-input" />
              </div>
              <div>
                <label className="gh-field-label" htmlFor="t-company">Company</label>
                <input id="t-company" name="company" className="gh-input" />
              </div>
              <div className="md:col-span-2">
                <label className="gh-field-label" htmlFor="t-profile">Profile URL (optional)</label>
                <input id="t-profile" name="profileUrl" type="url" className="gh-input" />
              </div>
              <div className="md:col-span-2">
                <label className="gh-field-label" htmlFor="t-text">Testimonial</label>
                <textarea id="t-text" name="testimonial" required rows={5} minLength={20} className="gh-textarea" />
              </div>
              <label className="flex items-start gap-2.5 text-sm text-muted-foreground md:col-span-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 rounded accent-[var(--color-primary)]"
                />
                I consent to this testimonial being published on this website.
              </label>
            </div>

            <div className="flex justify-end border-t border-border bg-surface-raised px-5 py-3">
              <button type="submit" disabled={mutation.isPending} className="gh-btn-primary">
                {mutation.isPending ? "Submitting…" : "Submit testimonial"}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </section>
  );
}
