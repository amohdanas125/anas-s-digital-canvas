import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mohd Anas" },
      {
        name: "description",
        content:
          "Freelance software development experience on Upwork, Fiverr and with independent remote clients across industries.",
      },
      { property: "og:title", content: "Experience — Mohd Anas" },
      {
        property: "og:description",
        content: "Freelance professional delivering tailored technical solutions remotely.",
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
    role: "Freelance Professional",
    org: "Upwork & Fiverr",
    detail:
      "Delivering web development and problem-solving engagements for clients worldwide — from small business sites to full-stack Node.js applications.",
  },
  {
    role: "Independent Freelance Developer",
    org: "Remote Clients",
    detail:
      "Direct collaborations with remote clients across industries, delivering tailored technical solutions end to end: requirements, build, deployment and iteration.",
  },
];

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        subtitle="Real client work, shipped remotely and on time."
      />
      <ol className="mx-auto mt-12 w-[min(1120px,calc(100%-2rem))] space-y-5">
        {ROLES.map((r, i) => (
          <Reveal key={r.role} delay={i * 100} as="li">
            <div className="glass relative rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <Briefcase className="size-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">{r.role}</h2>
              </div>
              <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
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
