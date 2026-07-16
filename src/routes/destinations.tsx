import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import santoriniImage from "../assets/dest-santorini.jpg";
import kyotoImage from "../assets/dest-kyoto.jpg";
import alpsImage from "../assets/dest-alps.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Wanderlust Travels" },
      { name: "description", content: "Explore our curated collection of travel destinations, from Mediterranean islands to mountain retreats." },
      { property: "og:title", content: "Destinations — Wanderlust Travels" },
      { property: "og:description", content: "Explore our curated collection of travel destinations." },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: santoriniImage,
    description: "Iconic blue domes, volcanic beaches, and world-famous sunsets over the Aegean.",
    price: "From $1,499",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: kyotoImage,
    description: "A cultural treasure trove of temples, gardens, geisha districts, and seasonal beauty.",
    price: "From $2,199",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: alpsImage,
    description: "Dramatic peaks, pristine lakes, and charming villages perfect for hiking or skiing.",
    price: "From $1,899",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    description: "Lush rice terraces, spiritual retreats, and vibrant beach towns await.",
    price: "From $1,299",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
    description: "A sensory journey through colorful souks, riads, and desert landscapes.",
    price: "From $1,099",
  },
  {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "Timeless romance, world-class museums, and café culture in the City of Light.",
    price: "From $1,599",
  },
];

function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Destinations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Hand-picked places that inspire wonder, from sun-soaked coastlines to mountain hideaways.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {destination.country}
                </div>
                <h2 className="mt-1 font-display text-xl font-semibold text-card-foreground">{destination.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{destination.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display font-semibold text-foreground">{destination.price}</span>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/contact">Plan trip</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
