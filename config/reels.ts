import {
  Instagram,
  Compass,
  Zap,
  Music,
  UserSquare2,
  Home,
  MapPin,
  ImageIcon,
} from "lucide-react";
import type { SiteConfig } from "./types";
import { SHARED_HERO } from "./shared";

export const reelsConfig: SiteConfig = {
  id: "reels",
  hostname: "10getsyou20reels.com",
  hostnames: ["10getsyou20reels.com", "www.10getsyou20reels.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Reels",
    full: "10GetsYou20 Reels",
  },

  meta: {
    title: "10GetsYou20 Reels | Instagram Reels for Real Estate Agents",
    description:
      "Instagram Reels engineered for real estate. Twenty ready-to-publish Reels per listing, delivered in 48 hours. A Reels division of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Reels · A production division of the 10GetsYou20 brand",
  },

  services: {
    heading: "Everything a real estate Instagram needs.",
    subheading:
      "Reels built around the platform's actual retention curve — hook, hold, payoff, share. Delivered in a set, ready to post.",
    items: [
      {
        icon: Instagram,
        title: "Feed & Explore Reels",
        description:
          "Vertical Reels tuned to the format Instagram surfaces in Explore and the main feed.",
      },
      {
        icon: Compass,
        title: "Neighborhood Reels",
        description:
          "Reels that sell the area, not just the address — the context buyers actually search for.",
      },
      {
        icon: Zap,
        title: "Hook Formulas",
        description:
          "Every Reel opens on a hook proven to survive the two-second scroll test.",
      },
      {
        icon: Music,
        title: "Trending Audio Sync",
        description:
          "Cut to licensed audio that reads as native inside the Instagram experience.",
      },
      {
        icon: UserSquare2,
        title: "Broker Feature Reels",
        description:
          "Producer-led Reels that let your voice carry the pitch — no camera-shy moments.",
      },
      {
        icon: Home,
        title: "Property Reveal Reels",
        description:
          "Room-by-room reveals paced for vertical viewing — no dead space, no wasted seconds.",
      },
      {
        icon: MapPin,
        title: "Story Cuts",
        description:
          "Shorter cuts formatted for Stories placement — the same content, sized for the smaller slot.",
      },
      {
        icon: ImageIcon,
        title: "Custom Thumbnails",
        description:
          "Grid-friendly thumbnails per Reel — because the profile grid is the storefront.",
      },
    ],
  },

  accentHue: 305,
};
