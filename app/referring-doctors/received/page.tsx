import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referral Received",
  description: "Your patient referral has been received — HealthPro Surgery, Mombasa.",
  robots: { index: false },
};

export default function ReferralReceivedPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Referral received
        </div>
        <h1 className="h1">Thank you for your referral</h1>
        <p className="p" style={{ maxWidth: 760 }}>
          Our office will contact the patient to arrange an appointment, usually within one working
          day. You will receive a written summary after the consultation.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello Dr Kinyua, I have just sent a referral on the website. Sending the reports and imaging now.\n\nPatient:\n")}
            target="_blank"
            rel="noreferrer"
          >
            Send reports on WhatsApp
          </a>
          <Link className="btn" href="/referring-doctors">
            Back to referring doctors
          </Link>
        </div>
        <p className="small" style={{ marginTop: 14 }}>
          If the patient&apos;s condition worsens before they are seen, please call {WHATSAPP_DISPLAY}.
        </p>
      </section>
    </>
  );
}
