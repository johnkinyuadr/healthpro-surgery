"use client";

import { useEffect } from "react";

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

// Sends Google Analytics events when a visitor starts an enquiry:
// WhatsApp clicks, phone clicks, email clicks, Google review clicks and form submissions.
export default function EnquiryTracking() {
  useEffect(() => {
    const send = (name: string, params: Record<string, unknown>) => {
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag === "function") {
        gtag("event", name, { page_path: window.location.pathname, ...params });
      }
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? "").trim().slice(0, 80);
      if (href.startsWith("https://wa.me/")) send("whatsapp_click", { link_text: label });
      else if (href.startsWith("tel:")) send("phone_click", { link_text: label });
      else if (href.startsWith("mailto:")) send("email_click", { link_text: label });
      else if (href.includes("g.page/r/")) send("review_click", { link_text: label });
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      const service = (form.querySelector('input[name="service"]') as HTMLInputElement | null)?.value;
      send("generate_lead", { form_type: service ?? "Contact / appointment request" });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
