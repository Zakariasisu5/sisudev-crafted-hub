import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  projectType: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  // Honeypot: bots fill hidden fields, humans never see it.
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      project_type: data.projectType || null,
      budget: data.budget || null,
      message: data.message,
    });

    if (error) throw new Error("Could not send your message. Please try again.");
    return { ok: true as const };
  });

const testimonialSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  jobTitle: z.string().trim().max(120).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  profileUrl: z.string().trim().url().max(300).optional().or(z.literal("")),
  avatarUrl: z.string().trim().url().max(500).optional().or(z.literal("")),
  testimonial: z.string().trim().min(20).max(1200),
  consent: z.literal(true),
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitTestimonial = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => testimonialSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const { error } = await supabase.from("testimonials").insert({
      name: data.name,
      email: data.email,
      job_title: data.jobTitle || null,
      company: data.company || null,
      profile_url: data.profileUrl || null,
      avatar_url: data.avatarUrl || null,
      testimonial: data.testimonial,
      consent: true,
      approved: false,
    });

    if (error) throw new Error("Could not submit your testimonial. Please try again.");
    return { ok: true as const };
  });
