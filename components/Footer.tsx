import Link from "next/link";
import { CLINIC_HOURS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerName">HealthPro Surgery</div>
            <div>
              Dr John Kinyua Murithi, MBChB, FCS(ECSA), FACS — Consultant General, Vascular and
              Laparoscopic Surgeon
            </div>
            <div>Aga Khan Hospital Mombasa, Doctors&apos; Plaza, First Floor</div>
          </div>

          <div className="footerCols">
            <nav className="footerCol" aria-label="Footer">
              <h4>Practice</h4>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/consulting-hospitals">Hospitals</Link>
              <Link href="/media">Media</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/patient-guides">Patient guides</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="footerCol">
              <h4>Second opinion</h4>
              <Link href="/second-opinion">How it works</Link>
              <Link href="/second-opinion#request">Submit a case</Link>
            </div>
            <div className="footerCol">
              <h4>Clinic hours</h4>
              <div className="footerHours">
                {CLINIC_HOURS.map((h) => (
                  <span key={h.days} style={{ display: "contents" }}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="footerCol">
              <h4>Contact</h4>
              <a href="tel:+254721446206">0721 446 206</a>
              <a href="mailto:johnkinyua@gmail.com">johnkinyua@gmail.com</a>
              <Link href="/privacy-policy">Privacy policy</Link>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {year} HealthPro Surgery. All rights reserved.</span>
          <span>In an emergency, go to the nearest Accident &amp; Emergency department.</span>
        </div>
      </div>
    </footer>
  );
}
