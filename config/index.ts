import { studioConfig } from "./studio";
import { mediaConfig } from "./media";
import { videosConfig } from "./videos";
import { clipsConfig } from "./clips";
import { reelsConfig } from "./reels";
import type { SiteConfig, SiteVariantId } from "./types";

export const siteConfigs: Record<SiteVariantId, SiteConfig> = {
  studio: studioConfig,
  media: mediaConfig,
  videos: videosConfig,
  clips: clipsConfig,
  reels: reelsConfig,
};

export const defaultConfig: SiteConfig = studioConfig;

/**
 * Resolve a SiteConfig for a given hostname.
 *
 * Matching rules:
 *  1. Exact hostname match (bare or www)
 *  2. Substring match on the variant slug (10getsyou20{variant}.com)
 *  3. NEXT_PUBLIC_SITE_VARIANT env override (for previews / local dev)
 *  4. Fall back to the Studio config
 */
export function resolveConfigForHost(host: string | null | undefined): SiteConfig {
  const override = process.env.NEXT_PUBLIC_SITE_VARIANT as SiteVariantId | undefined;
  if (override && siteConfigs[override]) {
    return siteConfigs[override];
  }

  if (!host) return defaultConfig;

  const cleanHost = host.toLowerCase().split(":")[0].replace(/^www\./, "");

  for (const config of Object.values(siteConfigs)) {
    if (config.hostnames.some((h) => h.replace(/^www\./, "") === cleanHost)) {
      return config;
    }
  }

  for (const [id, config] of Object.entries(siteConfigs)) {
    if (cleanHost.includes(id)) {
      return config;
    }
  }

  return defaultConfig;
}

export type { SiteConfig, SiteVariantId, ServiceItem } from "./types";
