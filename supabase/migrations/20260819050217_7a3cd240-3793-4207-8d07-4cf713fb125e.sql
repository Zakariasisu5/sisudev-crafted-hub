DROP POLICY IF EXISTS "Approved testimonials are public" ON public.testimonials;
REVOKE SELECT ON public.testimonials FROM anon, authenticated;

CREATE OR REPLACE VIEW public.testimonials_public AS
SELECT id, name, job_title, company, profile_url, avatar_url, testimonial, created_at
FROM public.testimonials
WHERE approved = true;

ALTER VIEW public.testimonials_public SET (security_invoker = off);
GRANT SELECT ON public.testimonials_public TO anon, authenticated;