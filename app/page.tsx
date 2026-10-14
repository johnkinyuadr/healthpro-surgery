import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_HOURS, INSURANCE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const WHATSAPP_NUMBER = "254721446206";
const PHONE_DISPLAY = "0721 446 206";
const EMAIL = "johnkinyua@gmail.com";


const MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Aga%20Khan%20Hospital%20Mombasa%20Drs%20Plaza";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Aga%20Khan%20Hospital%20Mombasa%20Doctors%20Plaza&output=embed";

const SERVICES = [
  {
    title: "Vascular surgery",
    text: "Arterial and venous disease, carotid disease, limb ischaemia and aneurysm assessment, with open and endovascular options.",
    href: "/services/vascular-surgery",
    icon: "M12 3v18M8 7c0 3 8 3 8 6s-8 3-8 6",
  },
  {
    title: "Varicose veins",
    text: "Duplex-guided assessment and endovenous laser ablation (EVLA) for symptomatic veins, swelling, skin changes and ulcers.",
    href: "/services/varicose-veins",
    icon: "M9 3c2 3-2 5 0 8s-2 5 0 10M15 3c-2 3 2 5 0 8s2 5 0 10",
  },
  {
    title: "Dialysis access",
    text: "AV fistula and AV graft creation, planning and salvage, including management of central venous stenosis.",
    href: "/services/dialysis-access",
    icon: "M4 8h10a4 4 0 0 1 0 8H4M14 12h6",
  },
  {
    title: "Laparoscopic surgery",
    text: "Keyhole surgery for hernias, gallbladder disease and other abdominal conditions, supporting a faster recovery.",
    href: "/services/gallbladder-surgery",
    icon: "M12 4v4M12 16v4M4 12h4M16 12h4M12 4a8 8 0 1 0 0.01 0",
  },
  {
    title: "GI endoscopy",
    text: "Diagnostic and therapeutic OGD and colonoscopy, including dilatation of strictures.",
    href: "/services/gi-endoscopy",
    icon: "M5 4h6v6H5zM13 14h6v6h-6zM11 7h3a3 3 0 0 1 3 3v4",
  },
  {
    title: "General & trauma surgery",
    text: "Elective and emergency general surgery, colorectal conditions, and chest and abdominal trauma.",
    href: "/services",
    icon: "M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6zM9 12l2 2 4-4",
  },
];

const GUIDES = [
  {
    title: "Varicose veins",
    text: "Symptoms, when treatment is needed, and what EVLA involves.",
    href: "/services/varicose-veins",
  },
  {
    title: "Dialysis access",
    text: "Fistula versus graft, planning timelines and complications to watch for.",
    href: "/services/dialysis-access",
  },
  {
    title: "Hernia surgery",
    text: "Hernia types, warning signs and recovery after repair.",
    href: "/services/hernia-surgery",
  },
  {
    title: "Diabetic foot care",
    text: "Daily foot checks, footwear and the warning signs that need urgent care — with video.",
    href: "/patient-guides/diabetic-foot",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a6a73"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

export default function HomePage() {
  const waBookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to book a consultation."
  )}`;

  const waSecondOpinionLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I would like a second opinion.\n\nI am (the patient / a relative / a referring doctor):\nMain concern:\n\nKindly advise the next steps."
  )}`;

  return (
    <div className="home">
      {/* HERO */}
      <section className="bleed bandWhite">
        <div className="wrap homeHero">
          <div className="homeHeroText">
            <div className="eyebrow">Consultant General, Vascular &amp; Laparoscopic Surgeon</div>
            <h1 className="homeHeroTitle">
              Specialist surgical care, explained clearly and delivered safely.
            </h1>
            <p className="lead">
              Vascular, laparoscopic and general surgery, GI endoscopy and dialysis access in
              Mombasa — with evidence-based treatment plans and direct access to your surgeon.
            </p>
            <div className="btnRow" style={{ paddingTop: 6 }}>
              <a className="btn btnPrimary" href={waBookLink} target="_blank" rel="noreferrer">
                Book a consultation
              </a>
              <Link className="btn" href="/second-opinion">
                Online second opinion
              </Link>
            </div>
            <div className="chips">
              <span className="chip">MBChB</span>
              <span className="chip">FCS(ECSA) General Surgery</span>
              <span className="chip">FACS</span>
              <span className="chip">COSECSA Faculty</span>
              <span className="chip">Vascular Fellowship, Paris</span>
            </div>
          </div>

          <div className="homeHeroMedia">
            <div className="portrait">
              <Image
                src="/images/dr-kinyua.jpg"
                alt="Dr John Kinyua Murithi in surgical scrubs"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 460px"
              />
            </div>
            <div className="nameCard">
              <strong>Dr John Kinyua Murithi</strong>
              <span>MBChB, FCS(ECSA), FACS</span>
              <span>Aga Khan Hospital Mombasa · Doctors&apos; Plaza</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bleed band">
        <div className="wrap">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="h2">
                Focused expertise across vascular, minimally invasive and general surgery
              </h2>
            </div>
            <Link className="textLink" href="/services">
              All services →
            </Link>
          </div>
          <div className="serviceGrid">
            {SERVICES.map((s) => (
              <Link key={s.title} className="serviceCard" href={s.href}>
                <Icon d={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SURGEON */}
      <section className="bleed band bandNavy">
        <div className="wrap split">
          <div className="stack">
            <div className="eyebrow">Your surgeon</div>
            <h2 className="h2">Consultant-led care from first consultation to follow-up</h2>
            <p className="lead">
              Dr John Kinyua Murithi is a Consultant General, Vascular and Laparoscopic Surgeon based
              in Mombasa. He completed a vascular fellowship in Paris and has worked as a trauma
              surgeon in Somalia.
            </p>
            <p className="lead">
              At Coast General Teaching and Referral Hospital he serves as Head of Accident and
              Emergency, leads quality-improvement work and trains surgeons as COSECSA faculty.
            </p>
            <Link className="textLink" href="/about">
              Read full profile →
            </Link>
          </div>
          <div className="credGrid">
            <div className="cred">
              <strong>FACS</strong>
              <span>Fellow, American College of Surgeons</span>
            </div>
            <div className="cred">
              <strong>FCS(ECSA)</strong>
              <span>Fellow, College of Surgeons of East, Central &amp; Southern Africa</span>
            </div>
            <div className="cred">
              <strong>Paris</strong>
              <span>Vascular surgery fellowship</span>
            </div>
            <div className="cred">
              <strong>CGTRH</strong>
              <span>Head of Accident &amp; Emergency</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND OPINION */}
      <section className="bleed band bandWhite">
        <div className="wrap split">
          <div className="stack">
            <div className="eyebrow">Online second opinion</div>
            <h2 className="h2">An independent specialist opinion, in writing</h2>
            <p className="lead">
              Share your reports and history from anywhere — including on behalf of a relative. You
              pay only once your case is accepted, and receive a signed written report.
            </p>
            <div className="steps">
              <div className="step">
                <span className="stepNum">1</span>
                <div>
                  <strong>Submit your case.</strong> A short summary and your scan reports, lab
                  results and discharge summaries — no payment yet.
                </div>
              </div>
              <div className="step">
                <span className="stepNum">2</span>
                <div>
                  <strong>Pay once accepted.</strong> We confirm suitability, then send the M-Pesa
                  payment details.
                </div>
              </div>
              <div className="step">
                <span className="stepNum">3</span>
                <div>
                  <strong>Receive your written report.</strong> Within 24 hours of payment; weekend
                  requests may take slightly longer.
                </div>
              </div>
            </div>
          </div>

          <div className="priceCard">
            <div className="priceRow">
              <div>
                <b>Online review</b>
                <small>Written report within 24 hours of payment</small>
              </div>
              <div className="price">KSh 2,000</div>
            </div>
            <div className="priceRow">
              <div>
                <b>In-person consultation</b>
                <small>If examination is required</small>
              </div>
              <div className="price">KSh 3,000</div>
            </div>
            <p className="payNote">Payment is requested only after your case is accepted.</p>
            <Link className="btn btnPrimary" href="/second-opinion#request">
              Submit your case
            </Link>
            <a className="btn" href={waSecondOpinionLink} target="_blank" rel="noreferrer">
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PATIENT GUIDES */}
      <section className="bleed band">
        <div className="wrap">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">Patient guides</div>
              <h2 className="h2">Answers before your appointment</h2>
            </div>
          </div>
          <div className="serviceGrid">
            {GUIDES.map((g) => (
              <Link key={g.title} className="guideCard" href={g.href}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <span className="more">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="bleed" style={{ paddingBottom: 56 }}>
        <div className="wrap insureBand">
          <div>
            <div className="eyebrow">Insurance &amp; payment</div>
            <h2 className="h2">Your insurance is accepted</h2>
            <p className="lead">
              {INSURANCE.local} are accepted, together with major international insurers. Self-pay
              patients can pay by M-Pesa.
            </p>
          </div>
          <div className="insureList">
            <span className="insureTag">All Kenyan insurers</span>
            {INSURANCE.international.map((i) => (
              <span key={i} className="insureTag">
                {i}
              </span>
            ))}
            <span className="insureTag">M-Pesa</span>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="bleed" style={{ paddingBottom: 88 }}>
        <div className="wrap">
          <div className="visit">
            <div className="visitText">
              <div className="eyebrow">Visit the clinic</div>
              <h2 className="h2">Aga Khan Hospital Mombasa</h2>
              <p className="lead">Doctors&apos; Plaza, First Floor, Mombasa</p>
              <div className="visitInfo">
                <div>
                  <b>Clinic hours</b>
                  {CLINIC_HOURS.map((h) => (
                    <span key={h.days} style={{ display: "block" }}>
                      {h.days}: {h.time}
                    </span>
                  ))}
                </div>
                <div>
                  <b>Contact</b>
                  <a href={`tel:+${WHATSAPP_NUMBER}`}>{PHONE_DISPLAY}</a>
                  <br />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
              <div className="btnRow">
                <a className="btn btnPrimary" href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <a className="btn" href={`tel:+${WHATSAPP_NUMBER}`}>
                  Call the clinic
                </a>
              </div>
            </div>
            <div className="visitMap">
              <iframe
                title="Map showing Aga Khan Hospital Mombasa"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
