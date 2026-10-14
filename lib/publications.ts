// Peer-reviewed publications. Add new items at the top; the page groups them by year.

export const SCHOLAR_PROFILE = "https://scholar.google.com/citations?user=f6vrkE0AAAAJ&hl=en";

export type Publication = {
  title: string;
  authors: string; // as published; Dr Murithi's name is highlighted automatically
  journal: string;
  year: number;
  details?: string; // volume, issue, pages or article number
  url: string;
  doi?: string;
  type: "Original research" | "Case report" | "Review" | "Qualitative study";
  topic: string;
  summary: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Strengthening Vascular Surgery Training in Sub-Saharan Africa: 1-Year Kenyan Experience",
    authors:
      "Kirengo T, Ibrahim H, Musajee M, Gill H, Murithi JK, Odula P, Garnham A, Sandford B; Kenya Vascular Collaborative",
    journal: "Journal of Surgical Research",
    year: 2026,
    url: "https://pubmed.ncbi.nlm.nih.gov/41962523/",
    type: "Original research",
    topic: "Surgical education",
    summary:
      "Reports the first year of a collaborative initiative by the Kenya Vascular Collaborative to strengthen vascular surgery training in Kenya, and its lessons for building vascular surgical capacity across sub-Saharan Africa.",
  },
  {
    title:
      "Axillary Vein to Superior Vena Cava Bypass: Femoral Vein Conduit Vs Synthetic Graft: Effective Treatment Options in a Low Resource Setting",
    authors: "Murithi JK, Faulds J, Sore PA",
    journal: "Annals of Case Reports",
    year: 2023,
    details: "8: 1362",
    url: "https://www.annalsofcasereports.com/article/view/axillary-vein-to-superior-vena-cava-bypass-femoral-vein-conduit-vs-synthetic-graft-effective-treatment-options-in-a-low-resource-setting-",
    doi: "10.29011/2574-7754.101362",
    type: "Case report",
    topic: "Dialysis access",
    summary:
      "Two haemodialysis patients with symptomatic central venous stenosis were treated with open axillary vein to superior vena cava bypass — one using a reversed femoral vein conduit, the other a synthetic ePTFE graft. Both improved, and in one a previously unusable arteriovenous fistula was restored to use, supporting open bypass as an effective and affordable option where endovascular treatment is limited.",
  },
];
