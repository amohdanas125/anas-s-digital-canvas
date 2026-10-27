import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Particles } from "./Particles";
import { LeetCodeIcon } from "./LeetCodeIcon";
import mainPhoto from "@/assets/main.jpg";

const NAV = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { href: "https://github.com/amohdanas125", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/mohd-anas-910b42292", label: "LinkedIn", Icon: Linkedin },
  { href: "https://leetcode.com/u/Mohd_Anas26/", label: "LeetCode", Icon: LeetCodeIcon },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Particles />

      {/* Floating Pill Header (Anima Jain Style) */}
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="mx-auto mt-4 flex w-[min(1120px,calc(100%-2rem))] items-center justify-between">
          {/* Left Pill: Identity Avatar + Name + Live Status */}
          <Link
            to="/"
            className="pointer-events-auto group flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 border border-border/80 shadow-lg transition-all duration-300 hover:border-primary/60 hover:scale-102 hover:shadow-[0_0_20px_rgba(var(--neon),0.25)]"
          >
            <img
              src={mainPhoto}
              alt="Mohd Anas"
              className="size-7 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all"
            />
            <div className="flex flex-col text-left leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs tracking-tight text-foreground">Mohd Anas</span>
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">Full-Stack &amp; AI</span>
            </div>
          </Link>

          {/* Right Pill: Capsule Navigation Links + CTA Button */}
          <nav
            aria-label="Main"
            className="pointer-events-auto hidden items-center gap-1.5 rounded-full glass px-2.5 py-1.5 border border-border/80 shadow-lg md:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-secondary/50"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "!text-primary !bg-primary/10 border border-primary/30 font-semibold shadow-[0_0_12px_rgba(var(--neon),0.2)]",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-1 inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1 text-xs font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-all hover:scale-105"
            >
              Hire Me
              <ArrowUpRight className="size-3" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="pointer-events-auto rounded-full glass border border-border p-2.5 text-foreground transition-colors hover:text-primary md:hidden shadow-lg"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav
            aria-label="Mobile"
            className="pointer-events-auto glass mx-auto mt-2 flex w-[min(1120px,calc(100%-2rem))] flex-col gap-2 rounded-3xl p-5 border border-border/80 shadow-2xl md:hidden animate-fade-in"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-secondary/40"
                activeProps={{ className: "!text-primary !bg-primary/10 font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary py-2.5 text-sm font-medium text-primary-foreground"
            >
              Hire Me / Let's Talk
              <ArrowUpRight className="size-4" />
            </Link>
          </nav>
        )}
      </header>

      <main className="page-enter flex-1 pt-32 pb-20">{children}</main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            © {new Date().getFullYear()} Mohd Anas · Full-Stack &amp; AI Engineer
          </p>
          <ul className="flex items-center gap-4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary inline-flex"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))] text-center max-w-3xl">
      <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl text-foreground">
        <span className="text-gradient">{title}</span>
      </h1>
      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>
    </div>
  );
}
