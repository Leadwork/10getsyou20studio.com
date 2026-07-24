import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 10GetsYou20 Studio collects, uses, and protects information shared through our website and services.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-semibold text-brand-blue">{children}</h2>
);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 24, 2026">
      <p>
        This Privacy Policy describes how 10GetsYou20 Studio (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses, and shares information when you visit
        this website or contact us about our services.
      </p>

      <H2>Information we collect</H2>
      <p>
        We collect information you provide directly — such as your name, email
        address, business details, and any messages you send us. We also
        collect basic technical information about your visit, such as browser
        type and referring page, using standard server logs.
      </p>

      <H2>How we use information</H2>
      <p>
        We use the information you share to respond to your inquiries, deliver
        the services you request, and improve our website. We do not sell your
        personal information.
      </p>

      <H2>Sharing</H2>
      <p>
        We share information only with service providers that help us operate
        our business (such as email and hosting providers), and only as needed
        to provide our services. We may also share information when required
        by law.
      </p>

      <H2>Cookies</H2>
      <p>
        This site uses a minimal set of cookies required for essential site
        functionality. We do not use cookies to build advertising profiles.
      </p>

      <H2>Your choices</H2>
      <p>
        You can request access to, correction of, or deletion of your personal
        information by emailing us at hello@10getsyou20studio.com.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about this policy? Reach us at
        hello@10getsyou20studio.com.
      </p>
    </LegalPage>
  );
}
