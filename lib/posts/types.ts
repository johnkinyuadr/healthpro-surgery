// A blog article. `body` uses simple formatting:
//   blank line        → new paragraph
//   "## Heading"      → section heading
//   "> text"          → pull quote
//   "- item"          → bullet list (consecutive lines)
//   **bold**          → bold text
export type Post = {
  slug: string;
  lang: "en" | "sw";
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO date
  // Optional cover image (in /public/blog). Also used as the link preview on WhatsApp/Facebook.
  // Best size: 1200 × 800 or 1200 × 630 JPEG, under 300 KB.
  image?: { src: string; alt: string; width: number; height: number };
  body: string;
};
