"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BOOK_LINK = `https://wa.me/254721446206?text=${encodeURIComponent(
  "Hello HealthPro Surgery, I’d like to book a consultation."
)}`;

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consulting-hospitals", label: "Hospitals" },
  { href: "/second-opinion", label: "Second Opinion" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Stop the page scrolling behind the open menu, and close it with Escape.
  useEffect(() => {
    document.body.classList.toggle("menuOpen", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className={open ? "nav navOpen" : "nav"}>
      <div className="navInner">
        <Link className="brand" href="/" aria-label="HealthPro Surgery home">
          <span className="brandMark" aria-hidden="true">H</span>
          <span className="brandText">
            <span className="brandName">HealthPro Surgery</span>
            <span className="brandSub">Mombasa · Kenya</span>
          </span>
        </Link>

        <button
          type="button"
          className="menuToggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" className="menuIcon" />
        </button>

        <nav id="main-menu" className="links" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              className={isActive(l.href) ? "link linkActive" : "link"}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a className="navCta" href={BOOK_LINK} target="_blank" rel="noreferrer">
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
