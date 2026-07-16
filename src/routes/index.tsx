import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Star,
  Users,
  Globe2,
  Clock,
  ShieldCheck,
  Heart,
  Sparkles,
  MessageCircle,
  MapPin,
  Utensils,
  Ship,
  Building2,
  TreePalm,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-istanbul.jpg";
import gHagia from "@/assets/gallery-hagia.jpg";
import gBlue from "@/assets/gallery-blue-mosque.jpg";
import gBosphorus from "@/assets/gallery-bosphorus.jpg";
import gBalat from "@/assets/gallery-balat.jpg";
import gIslands from "@/assets/gallery-islands.jpg";
import gBazaar from "@/assets/gallery-bazaar.jpg";
import gGalata from "@/assets/gallery-galata.jpg";
import { SITE } from "@/lib/site";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Istanbul — 3 Nights / 4 Days Premium Tour from £599" },
      { name: "description", content: "Premium 3 nights / 4 days Istanbul tour for UK travellers. Hotel, breakfast, English-speaking guide, Bosphorus cruise, Old City, Princes Islands. From £599 per person." },
      { property: "og:title", content: "Explore Istanbul — Premium 3 Nights / 4 Days Tour" },
      { property: "og:description", content: "Discover Istanbul with local experts. Luxury package designed for UK travellers." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Explore Istanbul — 3 Nights / 4 Days Premium Tour",
          description:
            "Premium 3 nights / 4 days Istanbul tour with English-speaking guide, hotel, breakfast, Bosphorus cruise, Old City and Princes Islands.",
          touristType: ["Couples", "First-time visitors", "Cultural Travelers", "Retirees", "Families"],
          offers: {
            "@type": "Offer",
            price: "599",
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
          },
          provider: { "@type": "TravelAgency", name: "Explore Istanbul" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const BADGES = [
  "English Speaking Guide",
  "Hotel Included",
  "Daily Breakfast",
  "Airport / Hotel Transfers",
  "Flexible Travel Dates",
  "Small Groups & Private Tours",
];

const INCLUDES = [
  "3 Nights Hotel Accommodation",
  "Daily Breakfast",
  "Old City Tour",
  "Bosphorus Cruise",
  "Europe & Asia Tour",
  "Princes Islands Tour",
  "Hotel Pick-up & Drop-off",
  "Professional English Speaking Guide",
];

const EXCLUDES = [
  "International Flights",
  "Lunches & Dinners (except Day 1 & 2)",
  "Personal Expenses",
  "Travel Insurance",
  "Museum Entrance Fees",
  "Tips & Gratuities",
];

const ITINERARY = [
  {
    day: "Day 1",
    title: "Old City Tour",
    icon: Building2,
    lunch: true,
    stops: ["Hagia Sophia", "Blue Mosque", "Balat", "St Stephen Church", "St George Church"],
  },
  {
    day: "Day 2",
    title: "Europe & Asia Tour",
    icon: Ship,
    lunch: true,
    stops: [
      "Bosphorus Cruise",
      "Breakfast",
      "Lunch",
      "Ottoman Palace",
      "Largest Mosque",
      "Cable Car",
      "Panoramic Viewpoints",
    ],
  },
  {
    day: "Day 3",
    title: "Princes Islands",
    icon: TreePalm,
    lunch: false,
    stops: [
      "Boat Trip",
      "Heybeliada",
      "Büyükada",
      "Free Time",
      "Beach",
      "Historic Houses",
      "Seafood",
      "Bike Ride",
    ],
  },
];

const WHY_US = [
  { icon: Users, title: "Professional Local Team", body: "Born-and-raised Istanbul experts who know every hidden gem." },
  { icon: Clock, title: "Flexible Travel Dates", body: "Pick the date that fits you — we plan the rest." },
  { icon: Sparkles, title: "Best Value", body: "Luxury experience without the luxury markup." },
  { icon: Globe2, title: "English Speaking Guides", body: "Clear, warm storytelling from certified guides." },
  { icon: MessageCircle, title: "Reliable WhatsApp Support", body: "Text us any time — before, during and after your trip." },
  { icon: Heart, title: "Private & Group Tours", body: "Just the two of you, family of six or a private group of ten." },
  { icon: ShieldCheck, title: "No Hidden Costs", body: "One price. Everything included in the package is included." },
];

const WHO_FOR = ["Couples", "First-time visitors", "Cultural Travelers", "Retirees", "Friends", "Families"];

const GALLERY: { src: string; alt: string; w: number; h: number; span?: string }[] = [
  { src: gHagia, alt: "Interior of Hagia Sophia", w: 1200, h: 1400, span: "row-span-2" },
  { src: gBlue, alt: "Blue Mosque at dusk", w: 1200, h: 1200 },
  { src: gBosphorus, alt: "Bosphorus cruise at sunset", w: 1400, h: 1000, span: "md:col-span-2" },
  { src: gBalat, alt: "Colorful houses of Balat", w: 1200, h: 1400 },
  { src: gIslands, alt: "Princes Islands", w: 1400, h: 1000 },
  { src: gBazaar, alt: "Grand Bazaar lamps", w: 1200, h: 1200 },
  { src: gGalata, alt: "Galata Tower at sunset", w: 1200, h: 1500, span: "row-span-2" },
];

const FAQS = [
  { q: "Do flights include?", a: "No. International flights are not included; we recommend booking from your preferred UK airport." },
  { q: "Can I choose my travel dates?", a: "Yes. The tour runs on flexible dates — tell us when you'd like to travel and we'll arrange it." },
  { q: "Do you provide airport transfers?", a: "Yes. Private airport transfers to and from your Istanbul hotel are included in the package." },
  { q: "Can we book private tours?", a: "Yes. The package can be run as a private tour for couples, families or small groups." },
  { q: "Can children join?", a: "Yes. Children are welcome — let us know their ages so we can adjust the pace and room configuration." },
  { q: "Can you customize the itinerary?", a: "Yes. We can add a Turkish bath, cooking class, longer stays or extra days on request." },
];

const TESTIMONIALS = [
  { name: "Sarah & James", city: "London, UK", rating: 5, body: "Every single detail was thought through. Our guide made 1,500 years of history feel personal. Best trip we've taken in years." },
  { name: "Margaret W.", city: "Edinburgh, UK", rating: 5, body: "As a retired couple we worried about the pace. The team adjusted everything and made us feel truly looked after." },
  { name: "The Patel Family", city: "Manchester, UK", rating: 5, body: "Kids loved the Princes Islands, we loved the Bosphorus cruise. Balat photos are still my favourite from the trip." },
];

function HomePage() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <Package />
      <Itinerary />
      <WhyUs />
      <WhoFor />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Istanbul skyline at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/80" />

      <div className="relative z-10 container-page flex min-h-[100svh] flex-col justify-center pt-28 pb-16 text-white">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            {SITE.packageNights} · Premium Istanbul Experience
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
            Explore Istanbul <span className="text-gold-gradient">Like Never Before</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            {SITE.tagline}. A curated 3 nights / 4 days package for UK travellers — hotel,
            breakfast, English-speaking guide and unforgettable moments across the Bosphorus.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
            >
              Book Now
            </Link>
            <a
              href={SITE.waLink("Hello! I'd like to book the Istanbul tour.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" /> Contact on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((b) => (
              <span key={b} className="inline-flex items-center gap-2 text-sm text-white/85">
                <Check className="h-4 w-4 text-gold-400" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#package"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-white"
        aria-label="Scroll to package"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/50">
      <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        <Stat label="Happy Travellers" value={2400} suffix="+" />
        <Stat label="5★ Google Reviews" value={480} suffix="+" />
        <Stat label="Years in Istanbul" value={12} suffix="" />
        <Stat label="Response Time" value={5} suffix=" min" />
      </div>
    </section>
  );
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-semibold text-navy-900">
        <Counter to={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Package() {
  return (
    <section id="package" className="py-20 md:py-28">
      <div className="container-page">
        <Eyebrow>The Package</Eyebrow>
        <SectionHead
          title="Everything included. No surprises."
          sub="One premium package, one clear price — designed to give you the best of Istanbul in three nights and four days."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm lg:col-span-1">
            <div className="text-sm font-medium uppercase tracking-widest text-gold-600">From</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-6xl font-semibold text-navy-900">{SITE.price}</span>
              <span className="text-muted-foreground">/ pp</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Flights not included</p>

            <div className="mt-6 space-y-3 rounded-2xl bg-navy-50 p-5 text-sm">
              <Row label="Duration" value={SITE.packageNights} />
              <Row label="Group Size" value="1 – 10 guests" />
              <Row label="Language" value="English" />
              <Row label="Departures" value="Flexible dates" />
            </div>

            <Link
              to="/booking"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              Reserve Your Dates
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/40 p-8">
              <div className="flex items-center gap-2 text-emerald-700">
                <Check className="h-5 w-5" />
                <h3 className="font-display text-xl font-semibold">What's Included</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-navy-800">
                {INCLUDES.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-navy-100 bg-white p-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <h3 className="font-display text-xl font-semibold text-navy-900">Not Included</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {EXCLUDES.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-navy-900">{value}</span>
    </div>
  );
}

function Itinerary() {
  return (
    <section id="itinerary" className="bg-navy-950 py-20 md:py-28 text-white">
      <div className="container-page">
        <Eyebrow tone="dark">The Itinerary</Eyebrow>
        <SectionHead
          tone="dark"
          title="Three days, one unforgettable city."
          sub="A pace designed for travellers who want to see the highlights — and taste the everyday life between them."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITINERARY.map(({ day, title, stops, lunch, icon: Icon }) => (
            <article
              key={day}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-gold-500/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-gold-400">{day}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                {stops.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {s}
                  </li>
                ))}
              </ul>
              {lunch && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  <Utensils className="h-3.5 w-3.5" /> Lunch Included
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Eyebrow>Why Choose Us</Eyebrow>
        <SectionHead
          title="A local team. A premium experience."
          sub="We're not a reseller. Every guide, driver and hotelier is part of our Istanbul family."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-navy-100 bg-white p-7 transition hover:shadow-md">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/15 text-gold-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoFor() {
  return (
    <section className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Who Is This Tour For?</Eyebrow>
            <SectionHead
              align="left"
              title="Made for the traveller who wants more than a checklist."
              sub="Whether it's your first time abroad or your fiftieth trip, this package is built around comfort, story and space to breathe."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {WHO_FOR.map((w) => (
              <div key={w} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-5 py-4">
                <Check className="h-4 w-4 text-gold-600" />
                <span className="text-sm font-medium text-navy-900">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-page">
        <Eyebrow>Photo Gallery</Eyebrow>
        <SectionHead title="Istanbul, in still frames." sub="A preview of what's waiting for you." />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className={`relative overflow-hidden rounded-2xl bg-navy-100 ${g.span ?? ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/70 to-transparent px-4 py-3 text-xs font-medium text-white">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-navy-950 py-20 md:py-28 text-white">
      <div className="container-page">
        <Eyebrow tone="dark">Reviews</Eyebrow>
        <SectionHead
          tone="dark"
          title="Loved by travellers from across the UK."
          sub="Recent 5★ reviews from London, Manchester, Edinburgh and beyond."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <div className="flex items-center gap-1 text-gold-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/85">"{t.body}"</p>
              <div className="mt-6 text-sm">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/60">{t.city}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <SectionHead title="Questions, answered." sub="Still curious? Message us on WhatsApp — usually a reply within 5 minutes." />

        <div className="mt-12 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-navy-900">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-navy-500 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Ready to explore Istanbul <span className="text-gold-gradient">the local way?</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/80">
            Tell us your travel dates and we'll get back within 24 hours with your custom itinerary
            and confirmation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-navy-900 hover:bg-gold-400"
            >
              Book Your Tour
            </Link>
            <a
              href={SITE.waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="text-sm uppercase tracking-widest text-gold-400">Live availability</div>
          <div className="mt-2 font-display text-3xl font-semibold">Small group spots open</div>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <Row2 k="This month" v="3 dates available" />
            <Row2 k="Next month" v="8 dates available" />
            <Row2 k="Response time" v="Under 5 minutes" />
            <Row2 k="From price" v={`${SITE.price} per person`} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row2({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-none last:pb-0">
      <span className="text-white/60">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function Eyebrow({ children, tone }: { children: React.ReactNode; tone?: "dark" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-gold-400" : "text-gold-600"
      }`}
    >
      <span className={`h-px w-8 ${tone === "dark" ? "bg-gold-400" : "bg-gold-600"}`} />
      {children}
    </div>
  );
}

function SectionHead({
  title,
  sub,
  tone,
  align = "center",
}: {
  title: string;
  sub?: string;
  tone?: "dark";
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mt-4 max-w-2xl text-center" : "mt-4 max-w-2xl"}>
      <h2
        className={`font-display text-4xl md:text-5xl font-semibold leading-tight ${
          tone === "dark" ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            tone === "dark" ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
