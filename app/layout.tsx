import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.healthprosurgery.com";

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Aga%20Khan%20Hospital%20Mombasa%20Drs%20Plaza";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HealthPro Surgery | Vascular, Laparoscopic & General Surgery in Mombasa",
    template: "%s | HealthPro Surgery",
  },
  description:
    "HealthPro Surgery in Mombasa, Kenya — vascular surgery, general surgery, laparoscopic surgery, GI endoscopy, colonoscopy and OGD. Located at Aga Khan Hospital Mombasa, Drs Plaza, First Floor.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "HealthPro Surgery",
    title: "HealthPro Surgery | Mombasa",
    description:
      "Vascular, general & laparoscopic surgery and GI endoscopy services in Mombasa, Kenya. Located at Aga Khan Hospital Mombasa, Drs Plaza, First Floor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthPro Surgery | Mombasa",
    description:
      "Vascular, general & laparoscopic surgery and GI endoscopy services in Mombasa, Kenya.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
        />
        <meta name="theme-color" content="#0b2545" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3KEQ8MP6MF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3KEQ8MP6MF', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "HealthPro Surgery",
              url: siteUrl,
              telephone: "+254721446206",
              email: "johnkinyua@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aga Khan Hospital Mombasa, Drs Plaza, First Floor",
                addressLocality: "Mombasa",
                addressCountry: "KE",
              },
              medicalSpecialty: [
                "VascularSurgery",
                "GeneralSurgery",
                "LaparoscopicSurgery",
              ],
            }),
          }}
        />

        <a className="topBanner" href={GOOGLE_MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
          Now consulting at{" "}
          <strong>Aga Khan Hospital Mombasa, Doctors&apos; Plaza, First Floor</strong> ·{" "}
          <span className="cta">Get directions</span>
        </a>

        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}