import { PROFILES } from "@/lib/site";

// Small row of links to Dr Kinyua's professional profiles.
export default function ProfileLinks() {
  return (
    <div className="profileLinks">
      <span>Profiles:</span>
      {PROFILES.map((p) => (
        <a key={p.label} href={p.href} target="_blank" rel="noreferrer me">
          {p.label} ↗
        </a>
      ))}
    </div>
  );
}
