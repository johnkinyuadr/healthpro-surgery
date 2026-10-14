import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "HealthPro Surgery — Dr John Kinyua Murithi, Consultant General, Vascular and Laparoscopic Surgeon, Mombasa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/dr-kinyua.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b2545",
          color: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 56px 64px 72px",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#7fd3d9", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            HealthPro Surgery · Mombasa
          </div>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 1.1 }}>Dr John Kinyua Murithi</div>
          <div style={{ display: "flex", fontSize: 30, color: "#dce6f0", fontFamily: "sans-serif" }}>
            Consultant General, Vascular &amp; Laparoscopic Surgeon
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#b9c6d4", fontFamily: "sans-serif" }}>
            MBChB · FCS(ECSA) · FACS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 24,
              color: "#ffffff",
              fontFamily: "sans-serif",
              borderTop: "2px solid #0a6a73",
              paddingTop: 22,
            }}
          >
            Aga Khan Hospital Mombasa · Doctors&apos; Plaza
          </div>
        </div>
        <div style={{ width: 430, height: "100%", display: "flex", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={430} height={630} style={{ objectFit: "cover", objectPosition: "center 20%" }} alt="" />
        </div>
      </div>
    ),
    size
  );
}
