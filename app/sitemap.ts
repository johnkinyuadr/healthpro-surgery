import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

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
  "/services/endoscopy-preparation",
  "/services/endoscopy-preparation/kiswahili",
  "/your-visit",
  "/consulting-hospitals",
  "/second-opinion",
  "/referring-doctors",
  "/patient-guides",
  "/patient-guides/diabetic-foot",
  "/patient-guides/av-fistula-care",
  "/patient-guides/hernia-repair-recovery",
  "/patient-guides/bilateral-evla",
  "/media",
  "/publications",
  "/blog",
  ...POSTS.map((p) => `/blog/${p.slug}`),
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
