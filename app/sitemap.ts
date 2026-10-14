import type { MetadataRoute } from "next";

const PATHS = [
  "/",
  "/about",
  "/services",
  "/services/vascular-surgery",
  "/services/varicose-veins",
  "/services/dialysis-access",
  "/services/carotid-disease",
  "/services/hernia-surgery",
  "/services/gallbladder-surgery",
  "/services/gi-endoscopy",
  "/consulting-hospitals",
  "/second-opinion",
  "/online-second-opinion",
  "/patient-guides/diabetic-foot",
  "/media",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.healthprosurgery.com";
  const now = new Date();
  return PATHS.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now,
    priority: p === "/" ? 1 : p.startsWith("/services") ? 0.8 : 0.6,
  }));
}
