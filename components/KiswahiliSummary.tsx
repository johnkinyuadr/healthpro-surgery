// Collapsible Kiswahili summary shown on key pages.
export default function KiswahiliSummary({ children }: { children: React.ReactNode }) {
  return (
    <details className="kiswahili" lang="sw">
      <summary>
        <span className="kiswahiliTag">Kiswahili</span> Muhtasari kwa Kiswahili
      </summary>
      <div className="kiswahiliBody">{children}</div>
    </details>
  );
}
