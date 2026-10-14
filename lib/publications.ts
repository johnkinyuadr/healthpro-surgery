// Peer-reviewed publications (from Google Scholar export, verified against journal pages).
// Add new items at the top; the page groups them by year.

export const SCHOLAR_PROFILE = "https://scholar.google.com/citations?user=f6vrkE0AAAAJ&hl=en";

export type Publication = {
  title: string;
  authors: string; // as published; Dr Murithi's name is highlighted automatically
  journal: string;
  year: number;
  details?: string; // volume(issue): pages
  url?: string;
  doi?: string;
  type:
    | "Original research"
    | "Clinical audit"
    | "Case report"
    | "Technical report"
    | "Conference abstract";
  topic: string;
  summary: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Strengthening Vascular Surgery Training in Sub-Saharan Africa: 1-Year Kenyan Experience",
    authors:
      "Kirengo T, Ibrahim H, Musajee M, Gill H, Murithi JK, Odula P, Garnham A, Sandford B, Sallam M, Grant I",
    journal: "Journal of Surgical Research",
    year: 2026,
    details: "322: 27–34",
    url: "https://pubmed.ncbi.nlm.nih.gov/41962523/",
    doi: "10.1016/j.jss.2026.03.047",
    type: "Original research",
    topic: "Surgical education",
    summary:
      "Evaluates a Kenyan vascular surgery training programme that ran Fundamentals and Advanced Skills courses in 2024 and 2025, training 56 participants across three oversubscribed courses. At one year, every respondent from the first cohort reported greater confidence in managing urgent vascular cases, fasciotomy and amputation, and over 90% had referred patients to a vascular surgeon — supporting Kenya's potential as a regional training hub.",
  },
  {
    title: "Strengthening Vascular Surgery in Sub-Saharan Africa: 1-Year Kenyan Experience (SRS274)",
    authors: "Kirengo T, Ibrahim H, Musajee M, Gill H, Murithi JK, Odula P, Garnham A, Sandford B",
    journal: "British Journal of Surgery",
    year: 2026,
    details: "113 (Suppl 2): znag018.251",
    type: "Conference abstract",
    topic: "Surgical education",
    summary:
      "Conference presentation of the first-year results of the Kenyan vascular surgery training programme, later published in full in the Journal of Surgical Research.",
  },
  {
    title: "Open Thoracoabdominal Aortic Replacement in a Low-Resource Setting",
    authors: "Sadia O, Hussein K, Kinyua J, Faulds J",
    journal: "African Annals of Thoracic and Cardiovascular Surgery",
    year: 2025,
    details: "17(4): 27–32",
    url: "https://academicjournals.org/journal/AATCVS/article-abstract/FD45A1874013",
    doi: "10.5897/AATCVS025.0085",
    type: "Technical report",
    topic: "Aortic surgery",
    summary:
      "Describes the open repair of a 15 cm extent III thoracoabdominal aortic aneurysm, and the novel techniques used to control blood loss and protect the organs and spinal cord where the resources routinely used for this operation are not available.",
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
  {
    title: "The Canadian Head CT Rule: A Hospital Audit",
    authors: "Kinyua J",
    journal: "Annals of African Surgery",
    year: 2018,
    details: "15(2): 57–61",
    url: "https://www.annalsofafricansurgery.com/the-canadian-head-ct-rule-a-hospita",
    doi: "10.4314/aas.v15i2.5",
    type: "Clinical audit",
    topic: "Trauma & emergency care",
    summary:
      "A retrospective audit of 38 adults with minor head injury in Mombasa, all of whom underwent CT scanning. Applying the Canadian CT Head Rule would have indicated scans in only 14, with a high negative predictive value — showing that the rule could safely reduce unnecessary CT imaging in this setting.",
  },
  {
    title: "Bilateral Congenital Absence of the Patella in an Adult: Case Report",
    authors: "Murithi JK, Rashid MM, Noorani SK",
    journal: "East African Orthopaedic Journal",
    year: 2018,
    details: "12(2): 73–76",
    url: "https://www.ajol.info/index.php/eaoj/article/view/180023",
    type: "Case report",
    topic: "Orthopaedics",
    summary:
      "Reports an adult presenting with bilateral congenital absence of the patella, a rare developmental anomaly of the knee.",
  },
  {
    title: "Management and Outcome of Testicular Torsion",
    authors: "Murithi J, Mwachi A, Abdalla R, Chavda S",
    journal: "Annals of African Surgery",
    year: 2017,
    details: "14(2): 104–107",
    url: "https://www.annalsofafricansurgery.com/management-and-outcome-of-testicula",
    doi: "10.4314/aas.v14i2.11",
    type: "Original research",
    topic: "Urological emergencies",
    summary:
      "A review of 90 patients treated for testicular torsion at Coast General Hospital, Mombasa, between 2011 and 2015. Testicular salvage was achieved in only about one in five, largely because of delays in presentation and diagnosis — highlighting the need for earlier recognition and referral.",
  },
  {
    title: "Laparoscopic Cystogastrostomy in the Management of Pancreatic Pseudocysts",
    authors: "Abdihakin M, Kinyua J",
    journal: "Annals of African Surgery",
    year: 2016,
    details: "13(1): 39–41",
    url: "https://www.annalsofafricansurgery.com/laparoscopic-cystogastrostomy-in-th",
    type: "Case report",
    topic: "Laparoscopic surgery",
    summary:
      "Describes laparoscopic cystogastrostomy for persistent pancreatic pseudocysts following chronic pancreatitis, demonstrating a minimally invasive alternative to the open drainage traditionally used in the region, with no recurrence at three-month follow-up.",
  },
];
