import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { getSiteConfig, getSiteOrigin } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
});

const PARENT_SITE = "https://10getsyou20.com";

export function generateMetadata(): Metadata {
  const config = getSiteConfig();
  const origin = getSiteOrigin();

  return {
    metadataBase: new URL(origin),
    title: {
      default: config.meta.title,
      template: `%s | ${config.brand.full}`,
    },
    description: config.meta.description,
    keywords: [
      "real estate video production",
      "short-form video for real estate",
      "listing videos",
      "Instagram Reels for realtors",
      "TikTok real estate content",
      "YouTube Shorts real estate",
      config.brand.full,
      "10GetsYou20",
    ],
    authors: [{ name: config.brand.full }],
    creator: config.brand.full,
    publisher: config.brand.full,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: origin,
      title: config.meta.title,
      description: config.meta.description,
      siteName: config.brand.full,
    },
    twitter: {
      card: "summary_large_image",
      title: config.meta.title,
      description: config.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B1D51",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getSiteConfig();
  const origin = getSiteOrigin();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: config.brand.full,
    url: origin,
    description: config.meta.description,
    parentOrganization: {
      "@type": "Organization",
      name: "10GetsYou20",
      url: PARENT_SITE,
    },
    areaServed: "US",
    serviceType: "Real Estate Video Production",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      style={{ ["--accent-hue" as string]: String(config.accentHue) }}
      data-variant={config.id}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
