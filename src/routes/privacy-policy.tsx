import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TEOM TRAVEL" },
      { name: "description", content: "How TEOM TRAVEL collects, uses, stores and protects the personal data of travellers planning international journeys." },
      { property: "og:title", content: "Privacy Policy — TEOM TRAVEL" },
      { property: "og:description", content: "What data we collect when you book an Istanbul tour, how we use it and your rights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We collect only the information we need to organise your tour and to answer your enquiries. This policy explains what we collect and how we handle it."
    >
      <Section title="1. Who we are">
        <p>
          {SITE.legalName}, trading as {SITE.name}, {SITE.address}, is the controller of the personal data collected
          through this website. Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </Section>

      <Section title="2. Information we collect">
        <ul>
          <li><strong>Booking information:</strong> name, country of residence, travel dates, number of adults and children, room preference and special requests.</li>
          <li><strong>Contact information:</strong> email address, phone and WhatsApp number.</li>
          <li><strong>Payment information:</strong> we do not store full card details. Payments are handled by payment providers or booking platforms; we receive only confirmation of payment and basic transaction references.</li>
          <li><strong>Website usage data:</strong> technical data such as IP address, device and browser type, pages visited and referring page.</li>
          <li><strong>Correspondence:</strong> messages you send us by email, WhatsApp or the contact form.</li>
        </ul>
      </Section>

      <Section title="3. How we use your information">
        <ul>
          <li>To process, confirm and deliver your booking, including sharing necessary details with the guides, hotels and transport suppliers involved.</li>
          <li>To communicate with you before, during and after your trip.</li>
          <li>To handle cancellations, changes, refunds and complaints.</li>
          <li>To meet accounting, tax and legal obligations.</li>
          <li>To maintain and improve the security and performance of this website.</li>
        </ul>
        <p>
          We do not sell your personal data, and we do not send marketing messages unless you have asked to receive them.
        </p>
      </Section>

      <Section title="4. Third-party booking platforms and suppliers">
        <p>
          If you book through a third-party travel platform, that platform collects your data under its own privacy
          policy and shares with us the details needed to run your tour. Service suppliers (hotels, guides, drivers,
          boat operators) receive only the minimum information required, such as your name, party size and date.
        </p>
      </Section>

      <Section title="5. Cookies">
        <p>
          This website uses cookies and similar technologies as described in our{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </Section>

      <Section title="6. Data retention">
        <p>
          Booking records are kept for as long as needed to deliver the service and to satisfy legal, accounting and
          tax retention requirements. Enquiries that do not lead to a booking are kept for a limited period and then
          deleted.
        </p>
      </Section>

      <Section title="7. Data security">
        <p>
          Data is transmitted over encrypted connections and stored in access-controlled systems, with access limited
          to staff who need it. No method of transmission or storage is completely secure, but we take reasonable
          technical and organisational measures to protect your information.
        </p>
      </Section>

      <Section title="8. Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct, delete, restrict or object to the
          processing of your personal data, to receive a copy in a portable format, and to withdraw consent where
          processing is based on consent. To exercise these rights, email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You may also complain to your local data protection
          authority.
        </p>
      </Section>

      <Section title="9. Children">
        <p>
          This website is not directed at children. Details of minors travelling with you are provided by the adult
          making the booking.
        </p>
      </Section>

      <Section title="10. Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top of this page shows when it was last revised.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          {SITE.legalName}, {SITE.address}. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · WhatsApp{" "}
          {SITE.whatsappNumber}.
        </p>
      </Section>
    </LegalPage>
  );
}
