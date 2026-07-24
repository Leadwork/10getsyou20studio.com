import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://10getsyou20studio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "10GetsYou20 Studio | Professional Real Estate Video Production",
    template: "%s | 10GetsYou20 Studio",
  },
  description:
    "Professional short-form video production for real estate agents. Transform property listings into engaging social media content with 10GetsYou20 Studio.",
  keywords: [
    "real estate video production",
    "short-form video",
    "listing videos",
    "Instagram Reels for realtors",
    "TikTok real estate",
    "YouTube Shorts",
    "property walkthrough videos",
    "10GetsYou20 Studio",
  ],
  authors: [{ name: "10GetsYou20 Studio" }],
  creator: "10GetsYou20 Studio",
  publisher: "10GetsYou20 Studio",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "10GetsYou20 Studio | Professional Real Estate Video Production",
    description:
      "Professional short-form video production for real estate agents. Transform property listings into engaging social media content.",
    siteName: "10GetsYou20 Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "10GetsYou20 Studio | Professional Real Estate Video Production",
    description:
      "Professional short-form video production for real estate agents.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "10GetsYou20 Studio",
    url: siteUrl,
    description:
      "Professional short-form video production for real estate agents.",
    parentOrganization: {
      "@type": "Organization",
      name: "10GetsYou20",
      url: "https://10getsyou20.com",
    },
    areaServed: "US",
    serviceType: "Real Estate Video Production",
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
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
