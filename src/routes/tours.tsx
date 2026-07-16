import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours — Wanderlust Travels" },
      { name: "description", content: "Browse our curated tour packages, from cultural immersions to relaxing escapes." },
      { property: "og:title", content: "Tours — Wanderlust Travels" },
      { property: "og:description", content: "Browse our curated tour packages." },
    ],
  }),
  component: ToursPage,
});

const tours = [
  {
    name: "Aegean Escape",
    destination: "Santorini & Mykonos",
    duration: "7 days",
    groupSize: "12 max",
    price: "$2,499",
    description: "Island-hop through Greece with private sunset cruises, wine tastings, and boutique stays.",
    highlights: ["Sunset catamaran cruise", "Private winery tour", "Acropolis guided visit"],
  },
  {
    name: "Japan Heritage",
    destination: "Tokyo, Kyoto & Osaka",
    duration: "10 days",
    groupSize: "10 max",
    price: "$3,799",
    description: "Experience ancient traditions and modern wonders with local guides in Japan's top cities.",
    highlights: ["Tea ceremony experience", "Fushimi Inari hike", "Osaka street food tour"],
  },
  {
    name: "Alpine Adventure",
    destination: "Swiss Alps",
    duration: "6 days",
    groupSize: "8 max",
    price: "$2,199",
    description: "Hike, ride scenic trains, and unwind in charming alpine villages with panoramic views.",
    highlights: ["Glacier Express journey", "Guided mountain hike", "Lake Geneva cruise"],
  },
  {
    name: "Bali Bliss",
    destination: "Ubud & Seminyak",
    duration: "8 days",
    groupSize: "14 max",
    price: "$1,899",
    description: "Recharge with yoga retreats, jungle swings, temple visits, and beachside relaxation.",
    highlights: ["Rice terrace trek", "Traditional cooking class", "Sunset beach dinner"],
  },
];

function ToursPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Packages</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Curated tours</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            All-inclusive itineraries designed for travelers who want authentic experiences without the hassle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {tours.map((tour) => (
            <Card key={tour.name} className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{tour.destination}</p>
                  <span className="font-display text-lg font-bold text-foreground">{tour.price}</span>
                </div>
                <h2 className="mt-1 font-display text-2xl font-semibold text-card-foreground">{tour.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{tour.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                    {tour.groupSize}
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-card-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link to="/contact">Book this tour</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
