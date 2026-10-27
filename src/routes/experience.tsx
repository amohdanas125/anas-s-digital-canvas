import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mohd Anas | Full-Stack & MVP Engineer" },
      {
        name: "description",
        content:
          "Professional software engineering and freelance experience of Mohd Anas: architecting scalable web apps, MVPs, and modern full-stack systems for international clients.",
      },
      { property: "og:title", content: "Experience — Mohd Anas" },
      {
        property: "og:description",
        content: "Engineering scalable MVPs, high-performance APIs, and modern web applications remotely.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

const ROLES = [
  {
    role: "Full-Stack Web & MVP Engineer",
    org: "Independent Remote Clients (US / UK / UAE / Global)",
    period: "2024 — Present",
    detail:
      "Architecting and delivering production-ready full-stack applications, scalable SaaS MVPs, and luxury commercial storefronts using Next.js, NestJS, TypeScript, and PostgreSQL. Owning project lifecycles end-to-end: data modeling, responsive frontend design, secure authentication, and cloud deployment.",
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Upwork & Remote Contracts",
    period: "2024 — Present",
    detail:
      "Collaborating directly with international founders and business owners. Building high-converting interactive web platforms with GSAP animations, Supabase integrations, and resilient REST APIs with fast turnaround and proactive communication.",
  },
];

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Career & Engagements"
        title="Experience"
        subtitle="Real-world production engineering shipped remotely, on budget, and on schedule."
      />
      <ol className="mx-auto mt-12 w-[min(1120px,calc(100%-2rem))] space-y-6">
        {ROLES.map((r, i) => (
          <Reveal key={r.role} delay={i * 100} as="li">
            <div className="neu-card relative rounded-3xl p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl neu-convex-sm text-primary">
                    <Briefcase className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-semibold sm:text-2xl text-foreground">{r.role}</h2>
                </div>
                <span className="font-mono text-xs neu-pressed-sm px-3.5 py-1.5 rounded-full text-primary font-medium tracking-wider">
                  {r.period}
                </span>
              </div>
              <p className="mt-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {r.org}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
