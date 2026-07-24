import {
  Zap,
  Sparkles,
  Layers,
  UserSquare2,
  Star,
  Wand2,
  Type,
  ImageIcon,
} from "lucide-react";
import type { SiteConfig } from "./types";

export const clipsConfig: SiteConfig = {
  id: "clips",
  hostname: "10getsyou20clips.com",
  hostnames: ["10getsyou20clips.com", "www.10getsyou20clips.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Clips",
    full: "10GetsYou20 Clips",
  },

  meta: {
    title: "10GetsYou20 Clips | Short Property Clips for Real Estate Agents",
    description:
      "Twenty short property clips per listing, delivered in 48 hours. Hook-first, vertical, ready for TikTok, Reels, and Shorts. A clips division of the 10GetsYou20 brand.",
  },

  hero: {
    eyebrow: "One listing. Twenty clips. Zero editing.",
    headline: {
      lead: "Short property clips ",
      accent: "that get seen",
      tail: ".",
    },
    subheadline:
      "Hook-first vertical clips for TikTok, Reels, and Shorts — cut, captioned, and delivered from one 10-minute conversation with a U.S.-based producer.",
    primaryCtaLabel: "See a session",
    secondaryCtaLabel: "Visit 10GetsYou20.com",
    trustLine:
      "The short-form clips division of the 10GetsYou20 brand · U.S.-based producers",
  },

  services: {
    heading: "Twenty clips built to earn the scroll-stop.",
    subheading:
      "Every session ships twenty distinct clips — not one video sliced eight ways. Different hooks, different angles, all from one conversation.",
    items: [
      {
        icon: Zap,
        title: "Hook Clips",
        description:
          "Clips built around a single strong opening — the two seconds that stop the thumb.",
      },
      {
        icon: Sparkles,
        title: "Property Highlights",
        description:
          "One clip per notable feature of the home — pool, kitchen, view, land, price.",
      },
      {
        icon: Layers,
        title: "Story Clips",
        description:
          "Sequence-driven clips that walk a viewer through the space in under 30 seconds.",
      },
      {
        icon: UserSquare2,
        title: "Broker Intros",
        description:
          "Short intro clips that let your voice do the selling — same energy as a referral call.",
      },
      {
        icon: Star,
        title: "Feature Clips",
        description:
          "Clips built around the specific detail that will close a buyer on this listing.",
      },
      {
        icon: Wand2,
        title: "Transition Cuts",
        description:
          "Motion, sound, and pacing tuned for retention — the small things that keep viewers watching.",
      },
      {
        icon: Type,
        title: "Caption Overlays",
        description:
          "Bold, on-brand captions on every clip — accessible and platform-native.",
      },
      {
        icon: ImageIcon,
        title: "Custom Thumbnails",
        description:
          "A thumbnail per clip, tuned to earn the tap in every feed.",
      },
    ],
  },

  accentHue: 285,
};
