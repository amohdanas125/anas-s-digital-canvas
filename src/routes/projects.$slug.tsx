import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS, getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Mohd Anas" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Project by Mohd Anas`;
    return {
      meta: [
        { title },
        { name: "description", content: project.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: project.blurb },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))] text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-sm text-primary">
        Back to all projects
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
      <Link
        to="/projects"
        className="nav-link inline-flex items-center gap-2 hover:text-primary"
        aria-label="Back to all projects"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" /> All projects
      </Link>

      <Reveal>
        <p className="mt-8 font-mono text-xs tracking-[0.35em] text-primary uppercase">
          {project.tagline}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-gradient">{project.name}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{project.blurb}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="size-4" aria-hidden="true" /> Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" aria-hidden="true" /> Source code
            </a>
          )}
        </div>
      </Reveal>

      <Reveal delay={90}>
        <figure className="glass mt-12 overflow-hidden rounded-3xl p-2">
          <img
            src={project.image}
            alt={`Screenshot of the ${project.name} interface`}
            width={1280}
            height={800}
            className="w-full rounded-2xl object-cover"
          />
          <figcaption className="px-4 py-3 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {project.name} · interface preview
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        <Reveal as="section" delay={60}>
          <div className="glass h-full rounded-2xl p-7">
            <h2 className="text-xl font-semibold">Overview</h2>
            {project.overview.map((line) => (
              <p key={line} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {line}
              </p>
            ))}
            <h3 className="mt-8 text-lg font-semibold">Key features</h3>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal as="section" delay={140}>
          <div className="glass h-full rounded-2xl p-7">
            <h2 className="text-xl font-semibold">Tech stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Role
                </dt>
                <dd className="mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Timeline
                </dt>
                <dd className="mt-1">{project.year}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>

      <section className="mt-16">
        <h2 className="font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
          More projects
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <p className="font-mono text-[0.7rem] tracking-widest text-primary uppercase">
                {p.tagline}
              </p>
              <p className="mt-2 font-semibold">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
