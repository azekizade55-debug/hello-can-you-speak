import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal & Company Information — Explore Istanbul" },
      { name: "description", content: "Company and website ownership information for Explore Istanbul, operated by GARANTI GRUP TURIZM OTOMOTIV GAYRIMENKUL INSAAT LTD STI." },
      { property: "og:title", content: "Legal & Company Information — Explore Istanbul" },
      { property: "og:description", content: "Website ownership, company details and contact information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegalInfoPage,
});

function LegalInfoPage() {
  return (
    <LegalPage
      eyebrow="Company"
      title="Legal & Company Information"
      intro="Details of the company that owns and operates this website."
    >
      <Section title="Website ownership">
        <p>
          This website and the brand "{SITE.name}" are owned and operated by {SITE.legalName}. All bookings,
          contracts and communications originating from this website are with this company.
        </p>
      </Section>

      <Section title="Company details">
        <dl className="grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
          <dt className="font-semibold text-navy-900">Legal company name</dt>
          <dd>{SITE.legalName}</dd>
          <dt className="font-semibold text-navy-900">Trading name</dt>
          <dd>{SITE.name}</dd>
          <dt className="font-semibold text-navy-900">Business activity</dt>
          <dd>Tours, excursions, cultural experiences and private tours in Istanbul, Türkiye</dd>
          <dt className="font-semibold text-navy-900">Registered address</dt>
          <dd>{SITE.address}</dd>
          <dt className="font-semibold text-navy-900">Email</dt>
          <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
          <dt className="font-semibold text-navy-900">Phone / WhatsApp</dt>
          <dd>{SITE.whatsappNumber}</dd>
          <dt className="font-semibold text-navy-900">Business hours</dt>
          <dd>{SITE.hours}</dd>
        </dl>
      </Section>

      <Section title="Applicable documents">
        <ul>
          <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
          <li><a href="/cancellation-and-refund-policy">Cancellation &amp; Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/cookie-policy">Cookie Policy</a></li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>
          For any legal or compliance enquiry, please write to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
