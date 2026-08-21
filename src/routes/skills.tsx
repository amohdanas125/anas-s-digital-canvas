import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mohd Anas" },
      {
        name: "description",
        content:
          "Technical skills of Mohd Anas: C, C++, Python, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, MySQL, DSA and algorithms.",
      },
      { property: "og:title", content: "Skills — Mohd Anas" },
      {
        property: "og:description",
        content: "Languages, web development stack and problem-solving strengths.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const GROUPS = [
  { title: "Languages", items: ["C", "C++", "Python"] },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  { title: "Other", items: ["Competitive Programming", "Problem Solving", "Algorithms"] },
];

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Toolkit"
        title="Skills"
        subtitle="The languages, frameworks and fundamentals I use to build and ship."
      />
      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-5 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 100} as="section">
            <div className="glass h-full rounded-2xl p-6">
              <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
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
