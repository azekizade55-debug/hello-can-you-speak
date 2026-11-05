import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/cancellation-and-refund-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — TEOM TRAVEL" },
      { name: "description", content: "How to cancel or change an Istanbul tour booking, cancellation deadlines, refund eligibility and no-show rules." },
      { property: "og:title", content: "Cancellation & Refund Policy — TEOM TRAVEL" },
      { property: "og:description", content: "Cancellation deadlines, refund eligibility, no-show and weather rules for our Istanbul tours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CancellationPage,
});

function CancellationPage() {
  return (
    <LegalPage
      title="Cancellation & Refund Policy"
      intro="We want cancellations to be simple and predictable. This policy explains how to cancel, the deadlines that apply, and how refunds are handled."
    >
      <Section title="1. How to cancel a booking">
        <p>
          Send your cancellation request in writing, quoting your booking name and tour date, to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or via WhatsApp on {SITE.whatsappNumber}. A cancellation
          takes effect from the time we receive your request. We will confirm every cancellation in writing —
          please keep that confirmation.
        </p>
        <p>
          If you booked through a third-party booking platform, cancel through that platform. The platform's
          cancellation terms apply to that booking and take precedence over this page.
        </p>
      </Section>

      <Section title="2. Cancellation deadlines and refund eligibility">
        <p>Unless a different policy is stated on your booking confirmation, the following applies to bookings made directly with us:</p>
        <ul>
          <li><strong>More than 7 days before the tour start:</strong> full refund of amounts paid to us.</li>
          <li><strong>3 to 7 days before the tour start:</strong> 50% refund of amounts paid to us.</li>
          <li><strong>Less than 72 hours before the tour start:</strong> no refund.</li>
        </ul>
        <p>
          Deadlines are calculated against the confirmed local start time in Istanbul (GMT+3).
        </p>
      </Section>

      <Section title="3. Late cancellation">
        <p>
          Cancellations made inside the 72-hour window are treated as late cancellations, because guides, tickets,
          transport and hotel rooms have already been committed. Late cancellations are not refundable, though we
          will always try to offer an alternative date where suppliers allow it.
        </p>
      </Section>

      <Section title="4. No-show policy">
        <p>
          If you do not arrive at the confirmed meeting point at the confirmed time and have not contacted us, the
          booking is recorded as a no-show and no refund is due. Please contact us on WhatsApp immediately if you
          are delayed — we will do what we can.
        </p>
      </Section>

      <Section title="5. Cancellation by us">
        <p>
          We may cancel a tour for safety, operational or minimum-participation reasons. In that case you may choose
          between a full refund of the amounts paid to us for the cancelled services, or a reschedule to another
          available date at no extra cost.
        </p>
      </Section>

      <Section title="6. Weather-related cancellation">
        <p>
          Tours normally operate in light rain. If severe weather makes a tour unsafe — for example when boat
          services are suspended — we will offer a reschedule, a suitable alternative itinerary, or a refund of the
          affected services. Where only part of an itinerary is affected, the refund covers that part only.
        </p>
      </Section>

      <Section title="7. Changing your booking date">
        <p>
          Date changes requested more than 7 days before the tour are free of charge, subject to availability.
          Inside 7 days we will try to accommodate changes, but supplier and hotel charges may apply and are passed
          on at cost. A price difference may apply if the new date falls in a higher season.
        </p>
      </Section>

      <Section title="8. Non-refundable services">
        <p>
          Some components are non-refundable once purchased or confirmed, including pre-purchased museum and
          attraction tickets, event tickets, non-refundable hotel rates and third-party transport tickets. Where
          this applies to your booking, we tell you before you pay.
        </p>
      </Section>

      <Section title="9. Refund processing">
        <p>
          Approved refunds are issued to the original payment method. We initiate refunds within 5 business days of
          approving them; the time for the funds to appear depends on your bank or card issuer, typically 5–10
          business days. Refunds for bookings made through a third-party platform are processed by that platform
          under its own timelines. Currency-conversion differences and bank fees are outside our control.
        </p>
      </Section>

      <Section title="10. Contact us about a cancellation">
        <p>
          {SITE.legalName}, {SITE.address}. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, WhatsApp{" "}
          {SITE.whatsappNumber}. Business hours: {SITE.hours}.
        </p>
      </Section>
    </LegalPage>
  );
}
