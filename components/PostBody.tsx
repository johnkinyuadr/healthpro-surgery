import React from "react";

// Renders the simple article format used in lib/posts (see lib/posts/types.ts).
function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

export default function PostBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);
  return (
    <div className="postBody">
      {blocks.map((block, i) => {
        const text = block.trim();
        if (text.startsWith("## ")) return <h2 key={i}>{text.slice(3)}</h2>;
        if (text.startsWith("> ")) return <blockquote key={i}>{inline(text.slice(2))}</blockquote>;
        // "![alt text](/blog/photo.jpg "Optional caption")" → full-width photo (1200 × 800 recommended)
        const img = text.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
        if (img) {
          return (
            <figure key={i} className="postFigure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img[2]} alt={img[1]} width={1200} height={800} loading="lazy" decoding="async" />
              {img[3] ? <figcaption>{img[3]}</figcaption> : null}
            </figure>
          );
        }
        const lines = text.split("\n");
        // Markdown table: "| a | b |" rows, second row "| --- | --- |"
        if (lines.length >= 2 && lines.every((l) => l.trim().startsWith("|")) && /^\|[\s:|-]+\|$/.test(lines[1].trim())) {
          const cells = (l: string) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
          const [head, , ...rows] = lines;
          return (
            <div key={i} className="postTableWrap">
              <table className="postTable">
                <thead>
                  <tr>{cells(head).map((c, j) => <th key={j}>{inline(c)}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.map((r, k) => (
                    <tr key={k}>{cells(r).map((c, j) => <td key={j}>{inline(c)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.trim().slice(2))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{inline(text)}</p>;
      })}
    </div>
  );
}
