/**
 * Update NEXT_PUBLIC_SITE_URL (in .env.production or your host's env settings)
 * to the real domain before going live. This placeholder keeps local builds
 * and previews working without a purchased domain.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://komalhira.com";
const url = rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`;

// Only production deploys are indexable. Vercel preview/staging stays noindex.
export const isIndexable = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const siteConfig = {
  name: "Komal Hira",
  title: "Komal Hira — Visual Artist",
  role: "Visual Artist",
  location: "Lahore, Pakistan",
  email: "Komalrasheed44@gmail.com",
  phone: "+92-333-3514162",
  url,
  description:
    "Komal Hira is a Lahore-based visual artist working in oil on canvas. Her paintings render abstract biomorphic assemblages of shapes and symbols, drawn from memory, fragrance, and feeling.",
} as const;

export function absoluteUrl(path: string = "/"): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${siteConfig.url}${clean}`;
}
