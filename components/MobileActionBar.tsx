import Link from "next/link";
import { OFFICE_PHONE, waLink } from "@/lib/site";

// Fixed Call / WhatsApp / Book bar shown on phones only.
export default function MobileActionBar() {
  return (
    <nav className="actionBar" aria-label="Quick contact">
      <a href={`tel:+${OFFICE_PHONE}`} className="actionBtn">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
        Call
      </a>
      <a
        href={waLink("Hello HealthPro Surgery, I have an enquiry.")}
        target="_blank"
        rel="noreferrer"
        className="actionBtn"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12z" />
        </svg>
        WhatsApp
      </a>
      <Link href="/contact" className="actionBtn actionBtnPrimary">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </svg>
        Book
      </Link>
    </nav>
  );
}
