import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TEOM TRAVEL" },
      { name: "description", content: "Get in touch with TEOM TRAVEL. WhatsApp, email and office location for your international travel enquiries." },
      { property: "og:title", content: "Contact TEOM TRAVEL" },
      { property: "og:description", content: "WhatsApp, email and office location for your international travel enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-navy-50/40 min-h-screen">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Contact</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy-900">Let's plan your next journey.</h1>
          <p className="mt-4 text-muted-foreground">
            Contact our team on WhatsApp or by email to discuss Türkiye, Greece, the Balkans, the Middle East or your own custom itinerary.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card icon={MessageCircle} title="WhatsApp">
            <p className="text-muted-foreground text-sm">Talk to our team about your travel plans.</p>
            <a
              href={SITE.waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              {SITE.whatsappNumber}
            </a>
          </Card>
          <Card icon={Mail} title="Email">
            <p className="text-muted-foreground text-sm">For quotes, invoices and detailed enquiries.</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-white"
            >
              {SITE.email}
            </a>
          </Card>
          <Card icon={Clock} title="Business hours">
            <p className="text-sm text-navy-900 font-medium">{SITE.hours}</p>
            <p className="mt-1 text-xs text-muted-foreground">Contact us for personal travel assistance.</p>
          </Card>
          <Card icon={MapPin} title="Office">
            <p className="text-sm text-navy-900 font-medium">Sultanahmet, Istanbul, Türkiye</p>
            <p className="mt-1 text-xs text-muted-foreground">Meet the team in person — by appointment.</p>
          </Card>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-navy-100">
          <iframe
            title="Istanbul map"
            src="https://www.google.com/maps?q=Sultanahmet%2C%20Istanbul&output=embed"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-7">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/15 text-gold-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}
