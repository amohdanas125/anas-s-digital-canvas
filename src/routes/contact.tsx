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
  "w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40";

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
        subtitle="Have a project, a role or a question? Send it over — I reply quickly."
      />

      <div className="mx-auto mt-12 grid w-[min(1120px,calc(100%-2rem))] gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal as="section">
          <div className="glass h-full rounded-2xl p-7">
            <ul className="space-y-5">
              {DETAILS.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={110} as="section">
          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  className={fieldClass}
                  placeholder="Your name"
                  aria-invalid={!!errors["name"]}
                />
                {errors["name"] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={fieldClass}
                  placeholder="you@example.com"
                  aria-invalid={!!errors["email"]}
                />
                {errors["email"] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                maxLength={150}
                className={fieldClass}
                placeholder="What's this about?"
                aria-invalid={!!errors["subject"]}
              />
              {errors["subject"] && (
                <p className="mt-1.5 text-xs text-destructive">{errors["subject"]}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={1000}
                className={fieldClass}
                placeholder="Tell me about your project…"
                aria-invalid={!!errors["message"]}
              />
              {errors["message"] && (
                <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </>
  );
}
