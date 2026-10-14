import type { Insurer } from "@/lib/site";
import { INTERNATIONAL_INSURERS, KENYAN_INSURERS, SELF_PAY } from "@/lib/site";

function Tile({ insurer }: { insurer: Insurer }) {
  return (
    <li className={insurer.logo ? "insurerTile hasLogo" : "insurerTile"} title={insurer.name}>
      {insurer.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={insurer.logo} alt={insurer.name} loading="lazy" />
      ) : (
        <span>{insurer.name}</span>
      )}
    </li>
  );
}

export default function InsurerPanel() {
  return (
    <div className="insurerPanel">
      <div className="insurerGroupLabel">Kenyan medical insurers</div>
      <ul className="insurerGrid" aria-label="Kenyan medical insurers accepted">
        {KENYAN_INSURERS.map((i) => (
          <Tile key={i.name} insurer={i} />
        ))}
      </ul>
      <div className="insurerGroupLabel">International insurers</div>
      <ul className="insurerGrid" aria-label="International insurers accepted">
        {INTERNATIONAL_INSURERS.map((i) => (
          <Tile key={i.name} insurer={i} />
        ))}
        <Tile insurer={SELF_PAY} />
      </ul>
    </div>
  );
}
