import type { LucideIcon } from "lucide-react";

export type SiteVariantId = "studio" | "media" | "videos" | "clips" | "reels";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SiteConfig {
  /** Slug identifier for this variant. */
  id: SiteVariantId;
  /** Primary hostname that resolves to this variant. */
  hostname: string;
  /** All hostnames that resolve to this variant (bare + www). */
  hostnames: string[];

  brand: {
    /** "10GetsYou20" — always constant */
    parent: string;
    /** "Studio" / "Media" / "Videos" / "Clips" / "Reels" */
    suffix: string;
    /** Full brand name — "10GetsYou20 Studio" */
    full: string;
  };

  meta: {
    title: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    headline: {
      lead: string;
      accent: string;
      tail: string;
    };
    subheadline: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    trustLine: string;
  };

  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };

  /**
   * Subtle per-variant accent-hue shift, expressed as HSL hue (0-360).
   * The design language stays constant; only the accent hue rotates
   * a few degrees so each site has its own subtle color identity while
   * still reading as the same brand family.
   */
  accentHue: number;
}
