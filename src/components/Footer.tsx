import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-gold-500" />
              <span className="font-display text-xl font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {SITE.tagline}. A premium 3 nights / 4 days Istanbul experience curated by
              English-speaking local experts, made for travellers from the United Kingdom.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.waLink("Hello, I'd like to know more about your Istanbul tour.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-gold-400"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/#package" className="hover:text-gold-400">The Package</a></li>
              <li><a href="/#itinerary" className="hover:text-gold-400">Itinerary</a></li>
              <li><a href="/#gallery" className="hover:text-gold-400">Gallery</a></li>
              <li><a href="/#faq" className="hover:text-gold-400">FAQ</a></li>
              <li><Link to="/booking" className="hover:text-gold-400">Booking</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-400 break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <span>{SITE.whatsappNumber}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <span>Sultanahmet, Istanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="hover:text-gold-400">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-400">Terms &amp; Conditions</Link>
            <Link to="/contact" className="hover:text-gold-400">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
