import Link from "next/link";

const BOOK_LINK = `https://wa.me/254721446206?text=${encodeURIComponent(
  "Hello HealthPro Surgery, I’d like to book a consultation."
)}`;

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link className="brand" href="/" aria-label="HealthPro Surgery home">
          <span className="brandMark" aria-hidden="true">H</span>
          <span className="brandText">
            <span className="brandName">HealthPro Surgery</span>
            <span className="brandSub">Mombasa · Kenya</span>
          </span>
        </Link>

        <nav className="links" aria-label="Main">
          <Link className="link" href="/about">About</Link>
          <Link className="link" href="/services">Services</Link>
          <Link className="link" href="/consulting-hospitals">Hospitals</Link>
          <Link className="link" href="/second-opinion">Second Opinion</Link>
          <Link className="link" href="/media">Media</Link>
          <Link className="link" href="/contact">Contact</Link>
          <a className="navCta" href={BOOK_LINK} target="_blank" rel="noreferrer">
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
