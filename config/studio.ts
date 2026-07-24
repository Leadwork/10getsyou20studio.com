import {
  Film,
  Home,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  Scissors,
  Repeat,
} from "lucide-react";
import type { SiteConfig } from "./types";

export const studioConfig: SiteConfig = {
  id: "studio",
  hostname: "10getsyou20studio.com",
  hostnames: ["10getsyou20studio.com", "www.10getsyou20studio.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Studio",
    full: "10GetsYou20 Studio",
  },

  meta: {
    title: "10GetsYou20 Studio | Professional Real Estate Video Production",
    description:
      "10 minutes. 20 short-form videos. The production arm of 10GetsYou20 — one guided conversation turned into 20 Reels & Shorts for real estate agents, delivered in 48 hours.",
  },

  hero: {
    eyebrow: "10 Minutes. 20 Short-Form Videos.",
    headline: {
      lead: "Your listings deserve to ",
      accent: "show up everywhere",
      tail: ".",
    },
    subheadline:
      "One 10-minute conversation. We turn it into 20 Reels & Shorts — done for you, delivered in 48 hours.",
    primaryCtaLabel: "Learn More",
    secondaryCtaLabel: "Visit 10GetsYou20.com",
    trustLine: "Part of the 10GetsYou20 brand · Serving real estate professionals",
  },

  services: {
    heading: "Everything you need to show up on video.",
    subheading:
      "A production workflow built around real estate — from your first listing to a consistent short-form presence across every platform.",
    items: [
      {
        icon: Film,
        title: "Listing Videos",
        description:
          "20 short-form videos per listing, cut vertical and ready for every major short-form platform.",
      },
      {
        icon: Home,
        title: "Property Walkthroughs",
        description:
          "Room-by-room walkthrough clips that let buyers experience the home before they step inside.",
      },
      {
        icon: Instagram,
        title: "Instagram Reels",
        description:
          "Vertical, hook-first Reels formatted for feed, Explore, and Stories reach.",
      },
      {
        icon: Facebook,
        title: "Facebook Videos",
        description:
          "Native-format videos optimized for Facebook feed and short-form video placement.",
      },
      {
        icon: Youtube,
        title: "YouTube Shorts",
        description:
          "Vertical Shorts crafted around search-friendly hooks and clear on-screen text.",
      },
      {
        icon: Sparkles,
        title: "Custom Thumbnails",
        description:
          "High-converting, on-brand thumbnails for every short — built to earn the tap.",
      },
      {
        icon: Scissors,
        title: "Editing & Captions",
        description:
          "Professional cuts, captions, licensed audio, and metadata — delivered ready to publish.",
      },
      {
        icon: Repeat,
        title: "10-Day Posting Schedule",
        description:
          "Every set ships with a posting cadence so you know exactly what goes live, and when.",
      },
    ],
  },

  accentHue: 247,
};
