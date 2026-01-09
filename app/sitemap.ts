import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.healthprosurgery.com";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
  ];
}
