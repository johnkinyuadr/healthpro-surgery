"""Build lib/global-surgery-data.json from the Global Surgery Evidence Desk export.

Usage: python3 scripts/build_global_surgery_data.py <export_dir>
  <export_dir>/papers/*.json and <export_dir>/recs/*.json are documents exported
  from the workspace (ArtifactData list with out_dir).

Only items ticked "Show on website" are published, and only their public fields:
citation, source link and public summary for papers; public title, public summary,
theme and linked papers for priorities. Items whose public text names a specific
hospital (see BLOCKED) are skipped and reported, so they can be reworded.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

THEMES = ["capacity", "workforce", "implementation", "financing", "outcomes", "quality"]
BLOCKED = re.compile(r"\b(CGTRH|Coast General|Coast Provincial General)\b", re.I)


def load(folder: Path):
    docs = []
    for f in sorted(folder.glob("*.json")):
        d = json.loads(f.read_text())
        d.setdefault("id", f.stem)
        docs.append(d)
    return docs


def main(export_dir: str):
    root = Path(export_dir)
    papers, priorities, skipped = [], [], []

    for p in load(root / "papers"):
        if not p.get("showOnWebsite") or not (p.get("publicSummary") or "").strip():
            continue
        if BLOCKED.search(p["publicSummary"]):
            skipped.append(f"paper {p['id']}: public summary names a hospital")
            continue
        themes = [t for t in THEMES if (p.get("extraction", {}).get(t) or {}).get("text")] or p.get("themes", [])
        url = p.get("url") or (f"https://doi.org/{p['doi']}" if p.get("doi") else "")
        papers.append({
            "id": p["id"], "title": p.get("title", ""), "authors": p.get("authors", ""),
            "journal": p.get("journal", ""), "year": p.get("year") or None, "volume": p.get("volume", ""),
            "doi": p.get("doi", ""), "url": url, "themes": themes,
            "countries": p.get("countries", []), "summary": p["publicSummary"].strip(),
        })

    paper_ids = {p["id"] for p in papers}
    for r in load(root / "recs"):
        title, summary = (r.get("publicTitle") or "").strip(), (r.get("publicSummary") or "").strip()
        if not r.get("showOnWebsite") or not title or not summary:
            continue
        if BLOCKED.search(title + " " + summary):
            skipped.append(f"priority {r['id']}: public text names a hospital")
            continue
        public_id = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")[:60]
        priorities.append({
            "id": public_id, "title": title, "summary": summary, "theme": r.get("area", ""),
            "evidence": [e for e in r.get("evidence", []) if e in paper_ids],
        })

    papers.sort(key=lambda p: (-(p["year"] or 0), p["title"]))
    order = {t: i for i, t in enumerate(THEMES)}
    priorities.sort(key=lambda r: (order.get(r["theme"], 99), r["title"]))
    out = {"updated": date.today().isoformat(), "papers": papers, "priorities": priorities}
    target = Path(__file__).resolve().parent.parent / "lib" / "global-surgery-data.json"
    target.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
    print(f"{len(papers)} papers, {len(priorities)} priorities -> {target}")
    for s in skipped:
        print("SKIPPED", s)


if __name__ == "__main__":
    main(sys.argv[1])
