import { headers } from "next/headers";
import { resolveConfigForHost, type SiteConfig } from "@/config";

/**
 * Read the request host from Next.js server headers and resolve
 * the matching SiteConfig. Called in Server Components and
 * generateMetadata.
 */
export function getSiteConfig(): SiteConfig {
  const host = headers().get("host");
  return resolveConfigForHost(host);
}

/**
 * Canonical origin (protocol + host) for the current request, used
 * for canonical + OpenGraph URLs.
 */
export function getSiteOrigin(): string {
  const h = headers();
  const host = h.get("host") ?? "10getsyou20studio.com";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}
