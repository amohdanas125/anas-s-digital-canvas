import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills & Stack — Mohd Anas" },
      {
        name: "description",
        content:
          "Production technical skills of Mohd Anas: React, Next.js, NestJS, TypeScript, Node.js, PostgreSQL (Neon), Drizzle ORM, Supabase, Tailwind CSS, GSAP, and AI/LLM API integrations.",
      },
      { property: "og:title", content: "Technical Skills & Stack — Mohd Anas" },
      {
        property: "og:description",
        content: "Modern full-stack technologies, architectural patterns, and production engineering toolkit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const GROUPS = [
  {
    title: "Frontend Engineering",
    category: "User Experience",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP Animations",
      "TanStack Router & Query",
      "HTML5 Canvas",
      "Responsive UI/UX",
    ],
  },
  {
    title: "Backend & Systems",
    category: "Server Architecture",
    items: [
      "NestJS",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "Authentication & JWT",
      "Python",
    ],
  },
  {
    title: "Databases & ORM",
    category: "Data Integrity",
    items: [
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Redis Caching",
      "Schema Design",
    ],
  },
  {
    title: "AI & Cloud Delivery",
    category: "DevOps & Intelligence",
    items: [
      "Gemini & OpenAI APIs",
      "AI Workflow Automation",
      "Git & GitHub Actions",
      "Netlify & Vercel",
      "Render / Cloud Hosting",
      "Performance Tuning",
    ],
  },
];

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering Toolkit"
        title="Skills & Technologies"
        subtitle="The modern, battle-tested stack I use to architect, build, and ship high-performance digital products."
      />
      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-5 sm:grid-cols-2">
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 90} as="section">
            <div className="card-hover glass h-full rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase font-medium">
                    {group.title}
                  </h2>
                  <span className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                    {group.category}
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
