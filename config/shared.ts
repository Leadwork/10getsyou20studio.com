import type { SiteConfig } from "./types";

/**
 * The Calendly booking URL used by the primary hero CTA and the
 * Contact section. Comes from the parent brand at 10getsyou20.com.
 */
export const CALENDLY_URL =
  "https://calendly.com/d/dv2z-8dc-g8v/10-minute-real-estate-demo";

/**
 * The parent brand's canonical marketing site.
 */
export const PARENT_SITE = "https://10getsyou20.com";

/**
 * Hero content shared across all variants. The variants intentionally
 * carry the same primary tagline so the family reads as one brand —
 * differentiation lives in the sub-brand suffix (logo), meta tags,
 * services grid, and accent hue instead of the hero copy.
 *
 * Only the `trustLine` — the tiny caption under the CTAs — is variant-
 * specific, since it names the division.
 */
export const SHARED_HERO: Omit<SiteConfig["hero"], "trustLine"> = {
  eyebrow: "10 Minutes. 20 Short-Form Videos.",
  headline: {
    lead: "Your listings deserve to ",
    accent: "show up everywhere",
    tail: ".",
  },
  subheadline:
    "One 10-minute conversation. We turn it into 20 Reels & Shorts — done for you, delivered fast.",
  primaryCtaLabel: "Get 2 Free Videos. Book Now",
  primaryCtaHref: CALENDLY_URL,
  secondaryCtaLabel: "Visit 10GetsYou20.com",
  secondaryCtaHref: PARENT_SITE,
};
