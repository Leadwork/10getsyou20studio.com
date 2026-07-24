import {
  Film,
  Home,
  Play,
  Youtube,
  Sparkles,
  Music,
  Scissors,
  Tags,
} from "lucide-react";
import type { SiteConfig } from "./types";
import { SHARED_HERO } from "./shared";

export const videosConfig: SiteConfig = {
  id: "videos",
  hostname: "10getsyou20videos.com",
  hostnames: ["10getsyou20videos.com", "www.10getsyou20videos.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Videos",
    full: "10GetsYou20 Videos",
  },

  meta: {
    title: "10GetsYou20 Videos | Listing Videos for Real Estate Agents",
    description:
      "Listing videos delivered in 48 hours. 20 short-form cuts per session, edited by U.S.-based producers. A video production division of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Videos · A production division of the 10GetsYou20 brand",
  },

  services: {
    heading: "Every video you need, from one shoot.",
    subheading:
      "A complete short-form video package built around one guided conversation — no on-site production, no editor to hire.",
    items: [
      {
        icon: Film,
        title: "Listing Video Package",
        description:
          "A full set of 20 short-form videos per listing, cut for every major platform.",
      },
      {
        icon: Home,
        title: "Property Walkthrough Series",
        description:
          "Room-by-room walkthroughs edited into vertical clips buyers actually watch to the end.",
      },
      {
        icon: Play,
        title: "Feature Highlight Cuts",
        description:
          "Short videos built around the specific features that sell a home — pool, view, kitchen, land.",
      },
      {
        icon: Sparkles,
        title: "Buyer-Focused Edits",
        description:
          "Edits paced and captioned for how buyers scroll — hook first, payoff fast.",
      },
      {
        icon: Youtube,
        title: "Vertical Reformatting",
        description:
          "Native 9:16 for Reels, Shorts, and TikTok — no re-cropping on your side.",
      },
      {
        icon: Music,
        title: "Sound & Motion",
        description:
          "Licensed music, motion graphics, and transitions built for retention.",
      },
      {
        icon: Scissors,
        title: "Custom Thumbnails",
        description:
          "Twenty branded thumbnails per set — tuned to earn the tap in a crowded feed.",
      },
      {
        icon: Tags,
        title: "Titles & Metadata",
        description:
          "Suggested titles, descriptions, and tags — paste and post.",
      },
    ],
  },

  accentHue: 260,
};
