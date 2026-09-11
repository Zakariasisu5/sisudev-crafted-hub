import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { CircleDot, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/portfolio.functions";
import { availability, budgets, person, projectTypes } from "@/data/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

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
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => submit({ data } as never),
    onSuccess: () => {
      toast.success("Message sent — I'll get back to you shortly.");
      formRef.current?.reset();
    },
    onError: () => toast.error("Could not send your message. Please check the fields."),
  });

  const onWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (!form) return;
    if (!form.reportValidity()) return;
    const enquiry = readForm(form);
    window.open(whatsappLink(enquiry), "_blank", "noopener,noreferrer");
    mutation.mutate({ ...enquiry });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ ...readForm(event.currentTarget) });
  };

  return (
    <section id="contact" className="section-y border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Let's work together" description={availability.note} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              <li className="bg-surface">
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 p-4 transition-colors hover:bg-surface-raised"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm">{person.email}</span>
                  </span>
                </a>
              </li>
              <li className="bg-surface">
                <a
                  href={`tel:${person.phoneRaw}`}
                  className="flex items-center gap-3 p-4 transition-colors hover:bg-surface-raised"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      Phone
                    </span>
                    <span className="mt-0.5 block truncate text-sm">{person.phone}</span>
                  </span>
                </a>
              </li>
              <li className="bg-surface">
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 p-4 transition-colors hover:bg-surface-raised"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block truncate text-sm">Quick response</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 bg-surface p-4">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                    Location
                  </span>
                  <span className="mt-0.5 block text-sm">{person.location} · Remote worldwide</span>
                </span>
              </li>
              <li className="flex items-center gap-2 bg-surface p-4">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  title="GitHub"
                  className="gh-icon-btn"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
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
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={onSubmit} className="gh-card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-2.5">
                <CircleDot className="h-4 w-4 text-success" aria-hidden="true" />
                <span className="font-mono text-xs text-foreground">new collaboration request</span>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div>
                  <label className="gh-field-label" htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" required className="gh-input" />
                </div>
                <div>
                  <label className="gh-field-label" htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" required className="gh-input" />
                </div>
                <div>
                  <label className="gh-field-label" htmlFor="c-company">Company (optional)</label>
                  <input id="c-company" name="company" className="gh-input" />
                </div>
                <div>
                  <label className="gh-field-label" htmlFor="c-type">Project type</label>
                  <select id="c-type" name="projectType" className="gh-input" defaultValue="">
                    <option value="">Select…</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="gh-field-label" htmlFor="c-budget">Budget</label>
                  <select id="c-budget" name="budget" className="gh-input" defaultValue="">
                    <option value="">Select…</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="gh-field-label" htmlFor="c-message">Project details</label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    placeholder="What problem are you trying to solve?"
                    className="gh-textarea"
                  />
                  <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">
                    Markdown-friendly · minimum 10 characters
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-2 border-t border-border bg-surface-raised px-5 py-3">
                <button
                  type="button"
                  onClick={onWhatsApp}
                  disabled={mutation.isPending}
                  className="gh-btn"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Send on WhatsApp
                </button>
                <button type="submit" disabled={mutation.isPending} className="gh-btn-primary">
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
