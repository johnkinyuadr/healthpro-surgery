import { printables } from "@/lib/printables";

// Row of "Download printable sheet" links for a guide page.
export default function DownloadLinks({ keys, label = "Printable sheet (PDF):" }: { keys: string[]; label?: string }) {
  return (
    <div className="downloadRow">
      <span className="small" style={{ fontWeight: 600 }}>
        {label}
      </span>
      {printables(keys).map((p) => (
        <a key={p.key} className="downloadLink" href={p.href} target="_blank" rel="noreferrer" lang={p.lang}>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          {p.title}
        </a>
      ))}
    </div>
  );
}
