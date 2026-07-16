import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Istanbul Tour — Explore Istanbul" },
      { name: "description", content: "Reserve your 3 nights / 4 days premium Istanbul tour. Fill in your travel details and we'll confirm within 24 hours." },
      { property: "og:title", content: "Book Your Istanbul Tour — Explore Istanbul" },
      { property: "og:description", content: "Reserve your premium Istanbul tour. We'll confirm within 24 hours." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: BookingPage,
});

const bookingSchema = z.object({
  first_name: z.string().trim().min(1, "Required").max(80),
  last_name: z.string().trim().min(1, "Required").max(80),
  country: z.string().trim().min(2, "Required").max(80),
  phone: z.string().trim().min(5, "Enter a valid phone").max(40),
  whatsapp: z.string().trim().max(40).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(200),
  travel_date: z.string().min(1, "Pick a date").refine((d) => new Date(d) >= new Date(new Date().toDateString()), "Date must be today or later"),
  adults: z.coerce.number().int().min(1).max(20),
  children: z.coerce.number().int().min(0).max(20),
  room_type: z.string().min(1, "Required"),
  special_requests: z.string().max(2000).optional().or(z.literal("")),
});

type FormValues = z.input<typeof bookingSchema>;

const ROOM_TYPES = ["Double Room", "Twin Room", "Single Room", "Family Room", "Suite"];

function BookingPage() {
  const [values, setValues] = useState<FormValues>({
    first_name: "",
    last_name: "",
    country: "United Kingdom",
    phone: "",
    whatsapp: "",
    email: "",
    travel_date: "",
    adults: 2,
    children: 0,
    room_type: "Double Room",
    special_requests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormValues>(k: K, v: FormValues[K]) {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      toast.error("Please review the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...parsed.data,
        whatsapp: parsed.data.whatsapp || null,
        special_requests: parsed.data.special_requests || null,
      };
      const { error } = await supabase.from("bookings").insert(payload);
      if (error) throw error;
      setDone(true);
      toast.success("Reservation received — we'll be in touch within 24 hours.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <section className="min-h-screen pt-32 pb-20 bg-navy-50/40">
        <div className="container-page max-w-2xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-semibold text-navy-900">
            Thank you for your reservation.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We've received your booking details and will contact you within 24 hours to confirm
            everything and finalise your itinerary.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.waLink(`Hi! I've just submitted a booking as ${values.first_name} ${values.last_name}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
            </a>
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-20 bg-navy-50/40">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Reservation</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy-900">
            Book your Istanbul tour
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell us a little about your trip — we'll confirm availability within 24 hours.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-3xl border border-navy-100 bg-white p-6 md:p-10 shadow-sm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="First name" error={errors.first_name}>
              <input
                type="text"
                value={values.first_name}
                onChange={(e) => update("first_name", e.target.value)}
                className={inputCls}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Last name" error={errors.last_name}>
              <input
                type="text"
                value={values.last_name}
                onChange={(e) => update("last_name", e.target.value)}
                className={inputCls}
                autoComplete="family-name"
              />
            </Field>
            <Field label="Country" error={errors.country}>
              <input
                type="text"
                value={values.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputCls}
                autoComplete="country-name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
                autoComplete="email"
              />
            </Field>
            <Field label="Phone number" error={errors.phone}>
              <input
                type="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputCls}
                placeholder="+44 …"
                autoComplete="tel"
              />
            </Field>
            <Field label="WhatsApp (optional)" error={errors.whatsapp}>
              <input
                type="tel"
                value={values.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                className={inputCls}
                placeholder="If different from phone"
              />
            </Field>
            <Field label="Preferred travel date" error={errors.travel_date}>
              <input
                type="date"
                value={values.travel_date}
                onChange={(e) => update("travel_date", e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
                className={inputCls}
              />
            </Field>
            <Field label="Hotel room type" error={errors.room_type}>
              <select
                value={values.room_type}
                onChange={(e) => update("room_type", e.target.value)}
                className={inputCls}
              >
                {ROOM_TYPES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Number of adults" error={errors.adults}>
              <input
                type="number"
                min={1}
                max={20}
                value={values.adults}
                onChange={(e) => update("adults", Number(e.target.value))}
                className={inputCls}
              />
            </Field>
            <Field label="Number of children" error={errors.children}>
              <input
                type="number"
                min={0}
                max={20}
                value={values.children}
                onChange={(e) => update("children", Number(e.target.value))}
                className={inputCls}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Special requests" error={errors.special_requests}>
              <textarea
                value={values.special_requests}
                onChange={(e) => update("special_requests", e.target.value)}
                rows={4}
                className={`${inputCls} resize-y`}
                placeholder="Dietary preferences, mobility needs, celebrations, extra activities…"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-navy-800 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              "Reserve My Tour"
            )}
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            By submitting this form you agree to be contacted about your reservation.
          </p>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-900">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
