import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Terminal, Rocket } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohd Anas — Fullstack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mohd Anas, a fullstack developer and B.Tech CSE (AI/ML) student crafting elegant and efficient web solutions.",
      },
      { property: "og:title", content: "Mohd Anas — Fullstack Developer Portfolio" },
      {
        property: "og:description",
        content: "Crafting elegant & efficient solutions with C++, JavaScript and the MERN stack.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohd Anas",
          jobTitle: "Software Developer",
          email: "mailto:amohdanas125@gmail.com",
          telephone: "+91-8318579208",
          address: { "@type": "PostalAddress", addressCountry: "India" },
        }),
      },
    ],
  }),
  component: About,
});

const HIGHLIGHTS = [
  {
    Icon: Terminal,
    title: "Competitive Programmer",
    body: "100+ DSA problems solved in C++ across arrays, trees, graphs, DP and greedy techniques.",
  },
  {
    Icon: Rocket,
    title: "Fullstack Builder",
    body: "Node.js, Express and MongoDB apps with authentication, dashboards and clean REST APIs.",
  },
  {
    Icon: Sparkles,
    title: "Curious & Resilient",
    body: "A learner who treats every hard problem as a chance to sharpen fundamentals.",
  },
];

function About() {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.35em] text-primary uppercase">
            Fullstack Developer
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            Mohd <span className="text-gradient">Anas</span>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase">
            Crafting Elegant &amp; Efficient Solutions.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            A curious and resilient learner passionate about programming and problem-solving, with
            strong foundations in C++ and web development. Currently pursuing B.Tech in Computer
            Science with an AI/ML specialization, and focused on mastering competitive programming
            and fullstack development.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass grid-lines relative overflow-hidden rounded-3xl p-8">
            <div className="font-mono text-xs leading-7 text-muted-foreground">
              <p>
                <span className="text-primary">const</span> anas = {"{"}
              </p>
              <p className="pl-5">role: "Fullstack Developer",</p>
              <p className="pl-5">stack: ["Node", "Express", "MongoDB"],</p>
              <p className="pl-5">languages: ["C", "C++", "Python"],</p>
              <p className="pl-5">focus: "DSA + Web",</p>
              <p className="pl-5">location: "India",</p>
              <p>{"};"}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 100} as="article">
            <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
