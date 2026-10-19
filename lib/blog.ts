import type { Post } from "./posts/types";
import theCostOfWaiting from "./posts/the-cost-of-waiting";
import healthInvestment from "./posts/health-is-your-greatest-investment";
import fearIsNotADiagnosis from "./posts/fear-is-not-a-diagnosis";
import artAndScience from "./posts/art-and-science-of-healing";
import smallSteps from "./posts/small-steps-strong-life";
import usisubiri from "./posts/usisubiri";
import afyaNiMtaji from "./posts/afya-ni-mtaji";
import alcoholAndSurgery from "./posts/alcohol-and-surgery";
import usingAi from "./posts/using-ai-for-your-health";
import smokingAndSurgery from "./posts/smoking-and-surgery";

export type { Post };

// Order shown on the blog page (newest / featured first).
export const POSTS: Post[] = [
  smokingAndSurgery,
  usingAi,
  alcoholAndSurgery,
  theCostOfWaiting,
  healthInvestment,
  artAndScience,
  fearIsNotADiagnosis,
  smallSteps,
  usisubiri,
  afyaNiMtaji,
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post) {
  const words = post.body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string, lang: "en" | "sw") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === "sw" ? "sw-KE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
