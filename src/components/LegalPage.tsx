import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export const LEGAL_LINKS = [
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/cancellation-and-refund-policy", label: "Cancellation & Refund Policy" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/legal", label: "Legal / Company Information" },
] as const;

export function LegalPage({
  eyebrow = "Legal",
  title,
  intro,
  updated = "12 August 2026",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-28 pb-20 bg-navy-50/40 min-h-screen">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{eyebrow}</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy-900">{title}</h1>
          {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
          <p className="mt-3 text-xs text-muted-foreground">Last updated: {updated}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="rounded-3xl border border-navy-100 bg-white p-7 md:p-10">{children}</article>

          <aside className="lg:sticky lg:top-28 h-fit rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="font-display text-base font-semibold text-navy-900">Legal documents</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-navy-700 hover:text-gold-600"
                    activeProps={{ className: "text-gold-600 font-semibold" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-navy-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-800/90 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-gold-600 [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}
