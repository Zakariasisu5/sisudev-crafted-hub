DROP VIEW IF EXISTS public.testimonials_public;

GRANT SELECT (id, name, job_title, company, profile_url, avatar_url, testimonial, created_at, approved)
  ON public.testimonials TO anon, authenticated;

CREATE POLICY "Approved testimonials are public"
  ON public.testimonials FOR SELECT
  TO anon, authenticated
  USING (approved = true);