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
  body: string;
};
