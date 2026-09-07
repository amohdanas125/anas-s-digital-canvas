import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Briefcase, FolderGit2, Printer } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Mohd Anas" },
      {
        name: "description",
        content:
          "Resume of Mohd Anas: B.Tech CSE (AI/ML) curriculum, fullstack projects and freelance software development work.",
      },
      { property: "og:title", content: "Resume — Mohd Anas" },
      {
        property: "og:description",
        content: "B.Tech curriculum, projects and freelance experience of Mohd Anas.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const CURRICULUM = [
  {
    title: "Computer Science Core",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object Oriented Programming",
      "Software Engineering",
    ],
  },
  {
    title: "AI / ML Specialization",
    courses: [
      "Machine Learning",
      "Deep Learning Fundamentals",
      "Python for Data Science",
      "Statistics & Probability",
      "Linear Algebra",
      "Natural Language Processing",
    ],
  },
  {
    title: "Mathematics & Foundations",
    courses: [
      "Discrete Mathematics",
      "Engineering Mathematics",
      "Design & Analysis of Algorithms",
      "Theory of Computation",
    ],
  },
];

const FREELANCE = [
  {
    role: "Freelance Professional",
    org: "Upwork & Fiverr",
    points: [
      "Delivered web development engagements for clients worldwide",
      "Built small business sites through full-stack Node.js applications",
      "Maintained on-time, remote delivery with clear communication",
    ],
  },
  {
    role: "Independent Freelance Developer",
    org: "Remote Clients",
    points: [
      "Owned projects end to end: requirements, build, deployment, iteration",
      "Delivered tailored technical solutions across industries",
    ],
  },
];

function SectionTitle({ icon: Icon, children }: { icon: typeof BookOpen; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex rounded-full border border-border p-2 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <h2 className="text-2xl font-semibold tracking-tight">
        <span className="text-gradient">{children}</span>
      </h2>
    </div>
  );
}

function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Curriculum vitae"
        subtitle="B.Tech coursework, shipped projects and freelance client work — all in one place."
      />

      <div className="mx-auto mt-6 w-[min(1120px,calc(100%-2rem))]">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          <Printer className="size-4" aria-hidden="true" />
          Print / Save as PDF
        </button>
      </div>

      {/* B.Tech Curriculum */}
      <section className="mx-auto mt-14 w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <SectionTitle icon={BookOpen}>B.Tech Curriculum</SectionTitle>
          <p className="mt-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Computer Science (AI/ML) · Allenhouse Institute of Technology
          </p>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {CURRICULUM.map((group, i) => (
            <Reveal key={group.title} delay={i * 100} as="article">
              <div className="card-hover glass h-full rounded-2xl p-6">
                <h3 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <SectionTitle icon={FolderGit2}>Projects</SectionTitle>
        </Reveal>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} as="article">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="card-hover glass group block h-full rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 font-mono text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
                      {p.tagline} · {p.year}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Freelance Work */}
      <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <SectionTitle icon={Briefcase}>Freelance Work</SectionTitle>
        </Reveal>
        <ol className="mt-7 space-y-5">
          {FREELANCE.map((f, i) => (
            <Reveal key={f.role} delay={i * 100} as="li">
              <div className="card-hover glass rounded-2xl p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <Briefcase className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">{f.role}</h3>
                </div>
                <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {f.org}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {f.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
