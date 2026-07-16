import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/#package", label: "Package" },
  { to: "/#itinerary", label: "Itinerary" },
  { to: "/#gallery", label: "Gallery" },
  { to: "/#faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <span
            className={`inline-block h-2 w-2 rounded-full bg-gold-500 shrink-0 ${
              scrolled ? "" : "shadow-[0_0_18px_var(--gold-500)]"
            }`}
          />
          <span
            className={`font-display text-lg md:text-xl font-semibold tracking-tight truncate ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {SITE.name}
          </span>
          <LiveBadge scrolled={scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.to.startsWith("/#") ? (
              <a
                key={n.to}
                href={n.to}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  scrolled ? "text-navy-800" : "text-white/90"
                }`}
              >
                {n.label}
              </a>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  scrolled ? "text-navy-800" : "text-white/90"
                }`}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/booking"
            className="inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-sm transition hover:bg-gold-400"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy-100 bg-white shadow-lg">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV.map((n) =>
              n.to.startsWith("/#") ? (
                <a
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-navy-50"
                >
                  {n.label}
                </a>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-navy-50"
                >
                  {n.label}
                </Link>
              ),
            )}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LiveBadge({ scrolled }: { scrolled: boolean }) {
  return (
    <span
      className={`ml-3 hidden md:inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        scrolled
          ? "border-navy-100 text-navy-700 bg-navy-50"
          : "border-white/25 text-white bg-white/10"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      Booking available
    </span>
  );
}
