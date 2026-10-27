import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/data/projects";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Featured Projects — Mohd Anas | Full-Stack & Commercial Apps" },
      {
        name: "description",
        content:
          "Selected production projects by Mohd Anas: Artisan Leather Goods, AH Perfume, BizmaticX, E-Commerce Fashion, Wanderlust, and digital portfolio.",
      },
      { property: "og:title", content: "Featured Projects — Mohd Anas" },
      {
        property: "og:description",
        content:
          "Production full-stack apps, e-commerce storefronts, and marketing platforms built with Next.js, NestJS, Supabase, and PostgreSQL.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Commercial Work & MVPs"
        title="Featured Projects"
        subtitle="Production full-stack applications, luxury e-commerce platforms, and interactive client systems built with modern web architectures."
      />
      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90} as="article">
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={`Screenshot of the ${p.name} interface`}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs tracking-[0.2em] leading-relaxed text-muted-foreground">
                  0{i + 1} · {p.tagline}
                </span>
                <h2 className="mt-3 flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                  {p.name}
                  <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-auto pt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
