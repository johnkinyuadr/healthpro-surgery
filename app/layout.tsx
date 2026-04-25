import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.healthprosurgery.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HealthPro Surgery | Vascular, Laparoscopic & General Surgery in Mombasa",
    template: "%s | HealthPro Surgery",
  },
  description:
    "HealthPro Surgery in Mombasa, Kenya — vascular surgery, general surgery, laparoscopic surgery, and GI endoscopy including colonoscopy and OGD. Now located at Aga Khan Hospital Mombasa, Drs Plaza, First Floor.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "HealthPro Surgery",
    title: "HealthPro Surgery | Mombasa",
    description:
      "Vascular, general & laparoscopic surgery and GI endoscopy services in Mombasa, Kenya. Now at Aga Khan Hospital Mombasa, Drs Plaza, First Floor.",
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
    <html lang="en">
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

        <div
          style={{
            backgroundColor: "#1e40af",
            color: "white",
            textAlign: "center",
            padding: "10px 14px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          📍 HealthPro Surgery has moved to{" "}
          <strong>Aga Khan Hospital Mombasa, Drs Plaza, First Floor</strong>
        </div>

        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}