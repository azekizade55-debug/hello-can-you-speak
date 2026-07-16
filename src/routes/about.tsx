import { createFileRoute } from "@tanstack/react-router";
import { Compass, Heart, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wanderlust Travels" },
      { name: "description", content: "Learn about Wanderlust Travels, our mission, and the team crafting unforgettable journeys." },
      { property: "og:title", content: "About — Wanderlust Travels" },
      { property: "og:description", content: "Learn about Wanderlust Travels and our mission." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Compass,
    title: "Purposeful travel",
    description: "We design trips that go deeper than sightseeing — every journey has meaning and connection.",
  },
  {
    icon: Heart,
    title: "Travel with care",
    description: "We prioritize sustainable partners, local communities, and responsible tourism practices.",
  },
  {
    icon: Globe,
    title: "Global expertise",
    description: "Our network of local guides and on-the-ground specialists spans six continents.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our story</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">About Wanderlust</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We believe travel should be transformative — not transactional. Since 2015, we have been crafting journeys that inspire.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">From travelers, for travelers</h2>
            <p className="text-muted-foreground">
              Wanderlust Travels began with a simple idea: planning a trip should feel as exciting as taking one. Our founders — a group of travel writers, guides, and logistics experts — set out to remove the stress from travel and replace it with wonder.
            </p>
            <p className="text-muted-foreground">
              Today, we curate journeys for thousands of travelers each year. Every itinerary is built around your interests, your pace, and your sense of adventure.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">10k+</p>
                <p className="text-xs text-muted-foreground">Travelers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">60+</p>
                <p className="text-xs text-muted-foreground">Countries</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-8 lg:p-12">
            <blockquote className="relative">
              <span className="absolute -left-2 -top-6 font-display text-6xl text-primary/20">&ldquo;</span>
              <p className="relative text-lg font-medium text-foreground">
                We do not sell vacations. We design moments that stay with you long after you return home.
              </p>
              <footer className="mt-6">
                <p className="font-display font-semibold text-foreground">Elena Moretti</p>
                <p className="text-sm text-muted-foreground">Founder & CEO, Wanderlust Travels</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Values</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">What drives us</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
