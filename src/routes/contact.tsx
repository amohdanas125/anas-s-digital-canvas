import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHeader, SOCIALS } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohd Anas" },
      {
        name: "description",
        content:
          "Get in touch with Mohd Anas — email amohdanas125@gmail.com, call +91-8318579208, or send a message through the contact form.",
      },
      { property: "og:title", content: "Contact — Mohd Anas" },
      {
        property: "og:description",
        content: "Let's talk about your next project, collaboration or role.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const EMAIL = "amohdanas125@gmail.com";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

const DETAILS = [
  { Icon: MapPin, label: "Location", value: "India", href: undefined },
  { Icon: Phone, label: "Phone", value: "+91-8318579208", href: "tel:+918318579208" },
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

const fieldClass =
  "w-full rounded-2xl neu-pressed px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:ring-1 focus:ring-primary/40";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
    form.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Contact"
        subtitle="Have a project, an MVP to build or a question? Send it over — I reply quickly within 2 hours."
      />

      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal as="section">
          <div className="neu-flat-sm h-full rounded-3xl p-7 flex flex-col justify-between">
            <ul className="space-y-6">
              {DETAILS.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl neu-convex-sm text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm font-medium transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-border/40">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Connect Directly
              </p>
              <ul className="flex gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="size-9 rounded-full neu-button flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={110} as="section">
          <form onSubmit={onSubmit} noValidate className="neu-flat-sm rounded-3xl p-7 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-mono tracking-wider text-muted-foreground uppercase">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  className={fieldClass}
                  placeholder="e.g. Alex Morgan"
                  aria-invalid={!!errors["name"]}
                />
                {errors["name"] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-mono tracking-wider text-muted-foreground uppercase">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={fieldClass}
                  placeholder="alex@company.com"
                  aria-invalid={!!errors["email"]}
                />
                {errors["email"] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-mono tracking-wider text-muted-foreground uppercase">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                maxLength={150}
                className={fieldClass}
                placeholder="e.g. Full-Stack SaaS MVP Project"
                aria-invalid={!!errors["subject"]}
              />
              {errors["subject"] && (
                <p className="mt-1.5 text-xs text-destructive">{errors["subject"]}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-mono tracking-wider text-muted-foreground uppercase">
                Project Requirement / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                className={fieldClass}
                placeholder="Briefly describe what you are looking to build…"
                aria-invalid={!!errors["message"]}
              />
              {errors["message"] && (
                <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground neu-button cursor-pointer sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </>
  );
}
