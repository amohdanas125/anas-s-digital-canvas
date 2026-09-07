import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Particles } from "./Particles";

const NAV = [
  { to: "/", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { href: "https://github.com/", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://leetcode.com/", label: "LeetCode", Icon: Code2 },
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
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass mx-auto mt-4 flex w-[min(1120px,calc(100%-2rem))] items-center justify-between rounded-full px-5 py-3">
          <Link to="/" className="font-mono text-sm tracking-[0.3em] uppercase">
            <span className="text-gradient font-semibold">MA</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link hover:text-primary"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "nav-link !text-primary drop-shadow-[0_0_10px_var(--neon)]",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-foreground transition-colors hover:text-primary md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="glass mx-auto mt-2 flex w-[min(1120px,calc(100%-2rem))] flex-col gap-4 rounded-2xl p-5 md:hidden"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link hover:text-primary"
                activeProps={{ className: "nav-link !text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="page-enter flex-1 pt-32 pb-20">{children}</main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            © {new Date().getFullYear()} Mohd Anas
          </p>
          <ul className="flex items-center gap-4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
  subtitle?: string;
}) {
  return (
    <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
      <p className="font-mono text-xs tracking-[0.35em] text-primary uppercase">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
