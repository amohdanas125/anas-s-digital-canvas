import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohd Anas" },
      {
        name: "description",
        content:
          "Selected projects by Mohd Anas: Wanderlust travel marketplace, an e-commerce platform, a DSA solutions vault and this portfolio.",
      },
      { property: "og:title", content: "Projects — Mohd Anas" },
      {
        property: "og:description",
        content: "Fullstack apps and algorithm work built with Node.js, MongoDB and C++.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    name: "Wanderlust",
    blurb:
      "An online marketplace connecting travelers with local hosts renting unique spaces across 220+ countries.",
    tech: ["Node.js", "MongoDB", "Express", "CSS", "LocationIQ"],
  },
  {
    name: "E-Commerce Platform",
    blurb:
      "A full-stack application with product listings, shopping cart, authentication and an admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
  },
  {
    name: "DSA Solutions Vault",
    blurb:
      "100+ competitive programming problems solved in C++ covering arrays, trees, graphs, dynamic programming and greedy strategies.",
    tech: ["C++", "STL", "Algorithms", "Data Structures"],
  },
  {
    name: "This Portfolio",
    blurb:
      "A futuristic personal site with particle animations, glassmorphism surfaces and smooth scroll reveals.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
  },
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects"
        subtitle="Things I've designed, built and broken — then rebuilt better."
      />
      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} as="article">
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                0{i + 1}
              </span>
              <h2 className="mt-3 text-2xl font-semibold">{p.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
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
          </Reveal>
        ))}
      </div>
    </>
  );
}
