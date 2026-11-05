import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — TEOM TRAVEL" },
      { name: "description", content: "Which cookies and similar technologies this Istanbul tour website uses, and how you can control them." },
      { property: "og:title", content: "Cookie Policy — TEOM TRAVEL" },
      { property: "og:description", content: "Essential, analytics and third-party cookies used on our website and how to manage them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Cookies are small files stored on your device by a website. This page explains how they are used here."
    >
      <Section title="1. Essential cookies">
        <p>
          These are required for the website to work — they keep your session active, remember your booking form
          progress and support security features such as sign-in for our own staff area. They cannot be switched off
          without breaking parts of the site.
        </p>
      </Section>

      <Section title="2. Analytics cookies">
        <p>
          Where analytics are enabled, we use aggregated statistics about page visits, referring sites and device
          types to understand which pages are useful and to improve the site. This data is used in aggregate and is
          not used to identify individual visitors.
        </p>
      </Section>

      <Section title="3. Third-party content">
        <p>
          Some pages embed third-party content, such as the map on our contact page and links to WhatsApp. When such
          content loads, the third-party provider may set its own cookies under its own policy. We do not control
          those cookies.
        </p>
      </Section>

      <Section title="4. Marketing cookies">
        <p>
          We do not use cookies for advertising retargeting or profiling.
        </p>
      </Section>

      <Section title="5. Managing cookies">
        <p>
          You can delete or block cookies in your browser settings at any time. Blocking essential cookies may prevent
          the booking form and other features from functioning correctly.
        </p>
      </Section>

      <Section title="6. Contact">
        <p>
          Questions about cookies? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. See also our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
