import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HealthPro Surgery",
    template: "%s | HealthPro Surgery",
  },
  description: "HealthPro Surgery — Vascular & Laparoscopic Surgery in Mombasa, Kenya.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>

<a
  className="fab"
  href={`https://wa.me/254721446206?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to book a consultation."
  )}`}
  target="_blank"
  rel="noreferrer"
>
  <span aria-hidden="true">💬</span>
  <span className="fabText">WhatsApp</span>
</a>

        <Footer />
      </body>
    </html>
  );
}
