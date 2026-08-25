import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

const routes = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/gallery/", changeFrequency: "monthly" as const, priority: 0.9 },
  {
    path: "/commissions/",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  { path: "/about/", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/contact/", changeFrequency: "yearly" as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
