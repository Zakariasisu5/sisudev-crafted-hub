import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/portfolio.functions";
import { availability, budgets, person, projectTypes } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const fieldClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary";

type Enquiry = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

function readForm(form: HTMLFormElement): Enquiry {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    projectType: get("projectType"),
    budget: get("budget"),
    message: get("message"),
    website: get("website"),
  };
}

function whatsappLink(enquiry: Enquiry) {
  const lines = [
    "New project enquiry from your portfolio",
    "",
    `Name: ${enquiry.name || "—"}`,
    `Email: ${enquiry.email || "—"}`,
    enquiry.company ? `Company: ${enquiry.company}` : "",
    enquiry.projectType ? `Project type: ${enquiry.projectType}` : "",
    enquiry.budget ? `Budget: ${enquiry.budget}` : "",
    "",
    "Project details:",
    enquiry.message || "—",
  ].filter(Boolean);

  return `https://wa.me/${person.phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function Contact() {
  const submit = useServerFn(submitContact);

  const mutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => submit({ data } as never),
    onSuccess: () => toast.success("Message sent — I'll get back to you shortly."),
    onError: () => toast.error("Could not send your message. Please check the fields."),
  });

  const onWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (!form) return;
    if (!form.reportValidity()) return;
    const enquiry = readForm(form);
    window.open(whatsappLink(enquiry), "_blank", "noopener,noreferrer");
    // Keep a copy in the inbox too.
    mutation.mutate({ ...enquiry });
    form.reset();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    mutation.mutate({ ...readForm(form) });
    form.reset();
  };

  return (
    <section id="contact" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description={availability.note}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
              <li className="bg-surface">
                <a href={`mailto:${person.email}`} className="flex items-center gap-4 p-5 transition-colors hover:bg-surface-raised">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>
                    <span className="eyebrow block">Email</span>
                    <span className="text-sm">{person.email}</span>
                  </span>
                </a>
              </li>
              <li className="bg-surface">
                <a href={`tel:${person.phoneRaw}`} className="flex items-center gap-4 p-5 transition-colors hover:bg-surface-raised">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>
                    <span className="eyebrow block">Phone</span>
                    <span className="text-sm">{person.phone}</span>
                  </span>
                </a>
              </li>
              <li className="bg-surface">
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-4 p-5 transition-colors hover:bg-surface-raised"
                >
                  <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>
                    <span className="eyebrow block">WhatsApp</span>
                    <span className="text-sm">Message me directly</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 bg-surface p-5">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>
                  <span className="eyebrow block">Location</span>
                  <span className="text-sm">{person.location} · Remote worldwide</span>
                </span>
              </li>
              <li className="flex items-center gap-3 bg-surface p-5">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={person.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="X profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  X
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 md:p-8">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div>
                <label className="eyebrow" htmlFor="c-name">Name</label>
                <input id="c-name" name="name" required className={`${fieldClass} mt-2`} />
              </div>
              <div>
                <label className="eyebrow" htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" required className={`${fieldClass} mt-2`} />
              </div>
              <div>
                <label className="eyebrow" htmlFor="c-company">Company (optional)</label>
                <input id="c-company" name="company" className={`${fieldClass} mt-2`} />
              </div>
              <div>
                <label className="eyebrow" htmlFor="c-type">Project type</label>
                <select id="c-type" name="projectType" className={`${fieldClass} mt-2`} defaultValue="">
                  <option value="">Select…</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow" htmlFor="c-budget">Budget</label>
                <select id="c-budget" name="budget" className={`${fieldClass} mt-2`} defaultValue="">
                  <option value="">Select…</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow" htmlFor="c-message">Project details</label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  placeholder="What are you building, and what do you need help with?"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
                >
                  {mutation.isPending ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
