import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Mohd Anas" },
      {
        name: "description",
        content:
          "Education of Mohd Anas: B.Tech in Computer Science with AI/ML specialization at Allenhouse Institute of Technology, and intermediate schooling in science and mathematics.",
      },
      { property: "og:title", content: "Education — Mohd Anas" },
      {
        property: "og:description",
        content: "B.Tech CSE (AI/ML) in progress, with a science and mathematics foundation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: Education,
});

const ITEMS = [
  {
    degree: "B.Tech, Computer Science (AI/ML Specialization)",
    place: "Allenhouse Institute of Technology",
    status: "In progress",
    detail:
      "Core computer science with a focus on artificial intelligence and machine learning, alongside continuous DSA practice.",
  },
  {
    degree: "Intermediate",
    place: "Sky Valley International School",
    status: "Completed",
    detail: "Science and mathematics focus that built the analytical base for engineering.",
  },
];

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Background"
        title="Education"
        subtitle="Formal study that backs the self-taught practice."
      />
      <ol className="mx-auto mt-12 w-[min(1120px,calc(100%-2rem))] space-y-5">
        {ITEMS.map((item, i) => (
          <Reveal key={item.degree} delay={i * 100} as="li">
            <div className="glass rounded-2xl p-7">
              <div className="flex flex-wrap items-center gap-3">
                <GraduationCap className="size-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">{item.degree}</h2>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] tracking-widest text-primary uppercase">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {item.place}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
