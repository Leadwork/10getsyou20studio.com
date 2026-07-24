import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the 10GetsYou20 Studio website and services.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-semibold text-brand-blue">{children}</h2>
);

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 24, 2026">
      <p>
        By accessing this website or engaging 10GetsYou20 Studio for services,
        you agree to the following terms. If you do not agree, please do not
        use the site or our services.
      </p>

      <H2>Use of the site</H2>
      <p>
        The content on this site is provided for informational purposes. You
        agree not to use the site in a way that could disable, damage, or
        impair its operation.
      </p>

      <H2>Services</H2>
      <p>
        Any engagement for video production or related services is governed by
        a separate agreement or written scope of work between you and
        10GetsYou20 Studio, which will control in the event of a conflict with
        these terms.
      </p>

      <H2>Intellectual property</H2>
      <p>
        All site content, including text, graphics, and logos, is the property
        of 10GetsYou20 Studio or its licensors. You may not reproduce or
        distribute this content without written permission.
      </p>

      <H2>Disclaimer</H2>
      <p>
        The site is provided &ldquo;as is&rdquo; without warranties of any
        kind. We do not guarantee specific business outcomes from any content
        or service.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about these terms? Reach us at hello@10getsyou20studio.com.
      </p>
    </LegalPage>
  );
}
