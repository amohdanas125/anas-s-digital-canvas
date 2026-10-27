import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Terminal, Rocket } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProfilePhoto } from "@/components/site/ProfilePhoto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohd Anas — Full-Stack Web & AI/ML Engineer | Scalable MVPs for Startups" },
      {
        name: "description",
        content:
          "Portfolio of Mohd Anas, a Full-Stack Web & AI/ML Engineer crafting scalable web applications, modern SaaS MVPs, and high-performance APIs with Next.js, NestJS, and PostgreSQL.",
      },
      { property: "og:title", content: "Mohd Anas — Full-Stack Web & AI/ML Engineer" },
      {
        property: "og:description",
        content: "Building scalable web apps & high-performance MVPs with Next.js, NestJS, TypeScript, and PostgreSQL.",
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
          jobTitle: "Full-Stack Web & AI Engineer",
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
    Icon: Rocket,
    title: "Full-Stack MVP Builder",
    body: "Scalable web applications built with Next.js, NestJS, and PostgreSQL — taking ideas from concept to reliable production deployment.",
  },
  {
    Icon: Terminal,
    title: "High-Performance APIs & Data",
    body: "Robust REST & GraphQL APIs, Drizzle ORM, secure authentication, and normalized PostgreSQL schemas optimized for sub-100ms queries.",
  },
  {
    Icon: Sparkles,
    title: "Modern UI & AI Integration",
    body: "Pixel-perfect interfaces with Tailwind CSS & GSAP animations, backed by seamless AI/LLM workflow integrations.",
  },
];

function About() {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono tracking-widest text-primary uppercase">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Freelance &amp; Contract MVPs
          </div>
          <h1 className="mt-4 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            Mohd <span className="text-gradient">Anas</span>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase">
            Full-Stack Web &amp; AI/ML Engineer
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Specializing in modern web architectures with <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">NestJS</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and{" "}
            <span className="text-foreground font-medium">PostgreSQL</span>. I help startups, founders, and businesses turn
            ambitious product ideas into blazing-fast, scalable MVPs that delight users and drive real revenue.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
            >
              Explore Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Hire Me / Let's Talk
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ProfilePhoto />
          <div className="glass grid-lines relative mx-auto mt-6 max-w-sm overflow-hidden rounded-3xl p-6">
            <div className="font-mono text-xs leading-7 text-muted-foreground">
              <p>
                <span className="text-primary">const</span> engineer = {"{"}
              </p>
              <p className="pl-5">name: <span className="text-foreground">"Mohd Anas"</span>,</p>
              <p className="pl-5">role: <span className="text-foreground">"Full-Stack Web &amp; AI Engineer"</span>,</p>
              <p className="pl-5">coreStack: [<span className="text-foreground">"Next.js"</span>, <span className="text-foreground">"NestJS"</span>, <span className="text-foreground">"PostgreSQL"</span>],</p>
              <p className="pl-5">focus: <span className="text-foreground">"Production MVPs &amp; APIs"</span>,</p>
              <p className="pl-5">timezone: <span className="text-emerald-400">"IST (Replies &lt; 2 hrs)"</span>,</p>
              <p>{"};"}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 100} as="article">
            <div className="card-hover glass h-full rounded-2xl p-6">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
