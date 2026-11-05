import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — TEOM TRAVEL" },
      { name: "description", content: "Terms and conditions for tours, excursions and travel services provided by TEOM TRAVEL." },
      { property: "og:title", content: "Terms & Conditions — TEOM TRAVEL" },
      { property: "og:description", content: "Booking, payment, cancellation and liability terms for our Istanbul tours and experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Please read these terms carefully before booking a tour or experience with us. By making a booking you accept these terms."
    >
      <Section title="1. Company information">
        <p>
          This website is owned and operated by {SITE.legalName}, trading as {SITE.name}, a tourism
          company based in {SITE.address}. In these terms, "we", "us" and "our" refer to this company,
          and "you" or "customer" refers to the person making a booking.
        </p>
        <p>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · WhatsApp: {SITE.whatsappNumber}
        </p>
      </Section>

      <Section title="2. Scope of services">
        <p>
          We provide guided tours, excursions, cultural experiences, private tours and related travel
          arrangements in Istanbul and the surrounding area. The exact inclusions of each service are
          described on the relevant page of this website or in your booking confirmation. Anything not
          explicitly listed as included is excluded.
        </p>
      </Section>

      <Section title="3. Booking and reservation process">
        <ul>
          <li>Bookings can be made through the booking form on this website, by email or via WhatsApp.</li>
          <li>A booking request is not confirmed until we send you a written confirmation.</li>
          <li>Where a booking is made through a third-party booking platform, that platform's booking process and terms also apply.</li>
          <li>You are responsible for providing accurate names, contact details, travel dates and party size.</li>
        </ul>
      </Section>

      <Section title="4. Customer responsibilities">
        <ul>
          <li>Hold valid travel documents, visas and any insurance required for your trip.</li>
          <li>Inform us in advance of medical conditions, reduced mobility, allergies or dietary needs that may affect participation.</li>
          <li>Behave respectfully towards guides, drivers, other guests and local sites; we may end participation without refund in cases of unsafe or abusive behaviour.</li>
          <li>Supervise children at all times; minors must be accompanied by a responsible adult.</li>
        </ul>
      </Section>

      <Section title="5. Payment terms">
        <ul>
          <li>Prices are shown per person unless stated otherwise, in the currency displayed at the time of booking.</li>
          <li>Payment terms, deposits and due dates are confirmed in writing before your tour.</li>
          <li>Where payment is taken by a third-party booking platform, that platform's payment terms apply.</li>
          <li>Bank, card or currency-conversion charges applied by your payment provider are your responsibility.</li>
        </ul>
      </Section>

      <Section title="6. Tour participation requirements">
        <p>
          Some tours involve walking, uneven surfaces, stairs, boat transfers or long days. Please check the
          description and contact us if you are unsure whether a tour is suitable. We may decline participation
          where a guest's health, safety or conduct makes it unsafe to continue.
        </p>
      </Section>

      <Section title="7. Meeting point and punctuality">
        <p>
          The meeting point and start time are confirmed before your tour. Please arrive at least 10 minutes early.
          Groups cannot wait for late guests; arriving late may mean missing part or all of the tour without refund.
        </p>
      </Section>

      <Section title="8. Changes to tours">
        <p>
          Itineraries are indicative. Opening hours, traffic, public holidays, religious services, local restrictions,
          crowd levels or safety concerns may require us to reorder, shorten or substitute parts of an itinerary. We
          always aim to provide an experience of equivalent value.
        </p>
      </Section>

      <Section title="9. Cancellation and refunds">
        <p>
          Cancellations, changes and refunds are governed by our{" "}
          <a href="/cancellation-and-refund-policy">Cancellation &amp; Refund Policy</a>, which forms part of these terms.
        </p>
      </Section>

      <Section title="10. No-show policy">
        <p>
          Failing to appear at the confirmed meeting point without prior notice is treated as a no-show and is not
          refundable.
        </p>
      </Section>

      <Section title="11. Weather and circumstances beyond our control">
        <p>
          We are not liable for failure to perform where this is caused by events beyond our reasonable control,
          including severe weather, natural events, strikes, transport disruption, civil unrest, government or
          authority decisions, site closures, or public health measures. Where a tour cannot safely run for such
          reasons, we will offer a reschedule or a refund of the affected services.
        </p>
      </Section>

      <Section title="12. Liability limitations">
        <ul>
          <li>We provide our services with reasonable skill and care.</li>
          <li>We are not liable for loss, damage or theft of personal belongings, or for indirect or consequential losses.</li>
          <li>Our liability is limited to the amount paid for the affected service, except where liability cannot be limited by law.</li>
          <li>Travel insurance covering medical costs, cancellation and personal belongings is strongly recommended.</li>
        </ul>
      </Section>

      <Section title="13. Third-party services">
        <p>
          Some elements — hotels, restaurants, transport, boat operators, museums and ticketed attractions — are
          supplied by independent third parties and are subject to their own terms. We select suppliers with care but
          do not control their operations.
        </p>
      </Section>

      <Section title="14. Intellectual property">
        <p>
          All content on this website, including text, photography, layout and branding, belongs to us or our
          licensors and may not be copied or reused without written permission.
        </p>
      </Section>

      <Section title="15. Privacy and personal data">
        <p>
          Personal data is handled as described in our <a href="/privacy-policy">Privacy Policy</a> and{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </Section>

      <Section title="16. Governing law and jurisdiction">
        <p>
          These terms are governed by the laws of the Republic of Türkiye, and the courts of Istanbul have
          jurisdiction, without affecting any mandatory consumer rights available to you under the law of your
          country of residence.
        </p>
      </Section>

      <Section title="17. Contact">
        <p>
          {SITE.legalName}, {SITE.address}. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or WhatsApp{" "}
          {SITE.whatsappNumber}. Business hours: {SITE.hours}.
        </p>
      </Section>
    </LegalPage>
  );
}
