import {
  Film,
  Camera,
  Layout,
  Newspaper,
  ImageIcon,
  MessagesSquare,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import type { SiteConfig } from "./types";

export const mediaConfig: SiteConfig = {
  id: "media",
  hostname: "10getsyou20media.com",
  hostnames: ["10getsyou20media.com", "www.10getsyou20media.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Media",
    full: "10GetsYou20 Media",
  },

  meta: {
    title:
      "10GetsYou20 Media | Real Estate Media & Short-Form Content Production",
    description:
      "The media team behind your listings. Short-form content for real estate professionals — filmed, edited, and delivered ready to publish. Part of the 10GetsYou20 brand.",
  },

  hero: {
    eyebrow: "Real Estate Media Production",
    headline: {
      lead: "The media team ",
      accent: "behind your listings",
      tail: ".",
    },
    subheadline:
      "A short-form media partner for real estate professionals — filmed from one guided conversation, edited by producers who know your market, delivered in 48 hours.",
    primaryCtaLabel: "See how it works",
    secondaryCtaLabel: "Visit 10GetsYou20.com",
    trustLine:
      "A production division of the 10GetsYou20 brand · U.S.-based producers",
  },

  services: {
    heading: "A full media package, from one session.",
    subheading:
      "Every listing turned into a package of short-form media assets — the same core coverage a full-day shoot would give you, without the schedule.",
    items: [
      {
        icon: Film,
        title: "Listing Media",
        description:
          "A production pass on every listing — filmed, edited, and packaged for social from one conversation.",
      },
      {
        icon: Camera,
        title: "Story Cuts",
        description:
          "Vertical story segments built around the moments buyers remember from a home.",
      },
      {
        icon: Layout,
        title: "Multi-Platform Delivery",
        description:
          "Every asset reformatted for the platforms your audience actually spends time on.",
      },
      {
        icon: Newspaper,
        title: "Metadata Kit",
        description:
          "Titles, descriptions, and hashtags shipped with the video set — nothing left for you to write.",
      },
      {
        icon: ImageIcon,
        title: "Custom Thumbnails",
        description:
          "Branded, high-converting thumbnails per asset, tuned to the tap.",
      },
      {
        icon: MessagesSquare,
        title: "Producer-Led Interviews",
        description:
          "A guided 10-minute conversation with a U.S. producer replaces the script and the shoot day.",
      },
      {
        icon: ClipboardList,
        title: "Posting Playbook",
        description:
          "A day-by-day plan for how each asset drops across your platforms.",
      },
      {
        icon: ShieldCheck,
        title: "Content Approval",
        description:
          "Everything delivered to you first — nothing goes live without your sign-off.",
      },
    ],
  },

  accentHue: 225,
};
