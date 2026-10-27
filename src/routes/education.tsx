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
      <ol className="mx-auto mt-12 w-[min(1120px,calc(100%-2rem))] space-y-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.degree} delay={i * 100} as="li">
            <div className="neu-card rounded-3xl p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl neu-convex-sm text-primary">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-semibold sm:text-2xl text-foreground">{item.degree}</h2>
                </div>
                <span className="font-mono text-xs neu-pressed-sm px-3.5 py-1.5 rounded-full text-primary font-medium tracking-wider uppercase">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {item.place}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
