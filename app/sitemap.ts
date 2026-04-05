import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_APP_URL ?? "https://ksdrill-portfolio.vercel.app"
  ).replace(/\/$/, "");
  const now = new Date();
  const paths = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/flagship", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/methodology", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/tech-stack", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const }
  ];
  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority
  }));
}
