import { Link } from "@tanstack/react-router";
import { Plane, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/", label: "Privacy Policy" },
  { to: "/", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <Plane className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-display text-xl font-semibold tracking-tight">
                Wanderlust
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Curated travel experiences for the modern explorer. We craft journeys that inspire, connect, and transform.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@wanderlust.travel</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Adventure Ave, Suite 400</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground">Follow us</h3>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wanderlust Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
