import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Shield, Users, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-travel.jpg";
import santoriniImage from "../assets/dest-santorini.jpg";
import kyotoImage from "../assets/dest-kyoto.jpg";
import alpsImage from "../assets/dest-alps.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wanderlust Travels — Curated Travel Experiences" },
      { name: "description", content: "Discover hand-picked destinations, personalized tours, and unforgettable adventures with Wanderlust Travels." },
      { property: "og:title", content: "Wanderlust Travels — Curated Travel Experiences" },
      { property: "og:description", content: "Discover hand-picked destinations, personalized tours, and unforgettable adventures." },
    ],
  }),
  component: HomePage,
});

const featuredDestinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: santoriniImage,
    description: "Sunset cliffs, whitewashed villages, and crystal Aegean waters.",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: kyotoImage,
    description: "Ancient temples, bamboo groves, and timeless tea ceremonies.",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: alpsImage,
    description: "Majestic peaks, alpine lakes, and cozy mountain villages.",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Hand-picked destinations",
    description: "Every location is personally visited and vetted by our travel experts.",
  },
  {
    icon: Shield,
    title: "Worry-free booking",
    description: "Flexible cancellations, 24/7 support, and transparent pricing.",
  },
  {
    icon: Users,
    title: "Local expertise",
    description: "Connect with knowledgeable local guides for authentic experiences.",
  },
];

const testimonials = [
  {
    quote: "Wanderlust planned our honeymoon flawlessly. Every detail felt personal and magical.",
    author: "Sarah & James",
    location: "Traveled to Santorini",
  },
  {
    quote: "The local guides made Japan come alive in ways we never expected. Truly unforgettable.",
    author: "Michael R.",
    location: "Traveled to Kyoto",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aerial view of a tropical coastline at sunset"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sand-900/80 via-sand-900/50 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-sand-50 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              Trusted by 10,000+ travelers worldwide
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-sand-50 sm:text-5xl lg:text-6xl">
              Discover the world, <br className="hidden sm:block" />
              <span className="text-sand-200">one journey at a time.</span>
            </h1>
            <p className="max-w-lg text-lg text-sand-100">
              Curated itineraries, local guides, and seamless planning for travelers who want more than a typical vacation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-sand-50 text-sand-900 hover:bg-sand-100">
                <Link to="/destinations">
                  Explore destinations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sand-100 bg-transparent text-sand-50 hover:bg-sand-50/10 hover:text-sand-50">
                <Link to="/tours">View tours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Featured</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Trending destinations
            </h2>
          </div>
          <Link to="/destinations" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            See all destinations <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{destination.country}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-card-foreground">{destination.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Travel with confidence
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="mx-auto h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Travelers love Wanderlust
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-lg font-medium text-card-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-display font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 lg:px-20">
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to start your next adventure?
            </h2>
            <p className="text-primary-foreground/90">
              Tell us your dream destination and we&apos;ll craft a personalized itinerary just for you.
            </p>
            <Button asChild size="lg" className="bg-sand-50 text-sand-900 hover:bg-sand-100">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
