import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Rocket,
  Zap,
  ShoppingBag,
  Bot,
  ExternalLink,
  ShieldCheck,
  Clock,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProfilePhoto } from "@/components/site/ProfilePhoto";
import { PROJECTS } from "@/data/projects";

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

const STATS = [
  { value: "10+", label: "Web Apps & MVPs Shipped", Icon: Rocket },
  { value: "< 100ms", label: "Query & API Latency", Icon: Zap },
  { value: "Global", label: "US, UK & UAE Clients", Icon: Globe },
  { value: "< 2 hrs", label: "Average Response Time", Icon: Clock },
];

const SERVICES = [
  {
    Icon: Rocket,
    title: "Full-Stack SaaS & MVPs",
    body: "End-to-end web applications built with Next.js 15, NestJS, and Neon PostgreSQL with Drizzle ORM. Designed for fast user onboarding, high uptime, and scalable architecture.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    Icon: ShoppingBag,
    title: "Luxury E-Commerce & Storefronts",
    body: "Custom digital retail experiences featuring dynamic color/size matrices, high-speed cart drawers, coupon pipelines, and transactional checkout flows.",
    tags: ["React", "Tailwind CSS", "Neon DB", "Stripe"],
  },
  {
    Icon: Zap,
    title: "Cinematic Web Animations",
    body: "Pixel-perfect, 60fps smooth animations, canvas particle fields, and scroll-triggered visual storytelling engineered with GSAP and modern Web APIs.",
    tags: ["GSAP", "HTML5 Canvas", "Micro-Interactions"],
  },
  {
    Icon: Bot,
    title: "AI Workflows & LLM Integrations",
    body: "Production-ready AI integrations: smart conversational assistants, automated lead qualifiers, and intelligent pipelines powered by OpenAI and Gemini APIs.",
    tags: ["OpenAI", "Gemini API", "AI Automation"],
  },
];

function About() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
      {/* Hero Section */}
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
            <span className="text-foreground font-medium">PostgreSQL</span>. I partner with founders, startups, and agencies
            worldwide to turn ambitious product ideas into robust, high-performance web applications that convert.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
            >
              Explore Featured Work
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

      {/* Metrics / Trust Strip */}
      <section className="mt-16 border-y border-border/60 py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map(({ value, label, Icon }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {value}
                  </div>
                  <div className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services / What I Build Section */}
      <section className="mt-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Core Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering Built for <span className="text-gradient">Scale &amp; Conversion</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              From architecting zero-latency backends to crafting polished, interactive frontends — every project is delivered with production-grade rigor.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ Icon, title, body, tags }, i) => (
            <Reveal key={title} delay={i * 90} as="article">
              <div className="card-hover glass h-full rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1 font-mono text-[0.68rem] tracking-wider text-muted-foreground uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Projects Direct Preview */}
      <section className="mt-28">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Featured Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Commercial Projects &amp; <span className="text-gradient">Live MVPs</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-primary hover:underline uppercase"
            >
              View all 6 projects
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} as="article">
              <div className="glass group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider backdrop-blur-md text-foreground border border-border/60">
                    0{i + 1} · {p.role}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs tracking-wider text-primary uppercase">
                    {p.tagline}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {p.blurb}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary"
                    >
                      Case Study
                      <ArrowRight className="size-3" />
                    </Link>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Live Demo
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section className="mt-28 mb-12">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl border border-primary/30 p-8 sm:p-12 text-center bg-gradient-to-b from-primary/5 to-transparent">
            <div className="mx-auto max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
                <Sparkles className="size-3" />
                Let's Build Together
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Have a Web App or <span className="text-gradient">MVP in Mind?</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:text-base">
                Whether you need a full-stack SaaS MVP built from scratch, a high-converting e-commerce storefront, or high-performance API engineering — I'm ready to turn your concept into reliable production code.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  Start a Project / Hire Me
                </Link>
                <a
                  href="mailto:amohdanas125@gmail.com"
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  amohdanas125@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
