import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link className="brand" href="/">
          HealthPro Surgery
        </Link>

        <nav className="links">
          <Link className="link" href="/about">About</Link>
          <Link className="link" href="/services">Services</Link>
          <Link className="link" href="/second-opinion">Second Opinion</Link>
          <Link className="link" href="/online-second-opinion">Online Second Opinion</Link>
          <Link className="link" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
