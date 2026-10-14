"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  ".serviceCard",
  ".guideCard",
  ".careItem",
  ".hospitalCard",
  ".insurerTile",
  ".credItem",
  ".mythRow",
  ".mediaItem",
  ".priceCard",
  ".visit",
  ".alertCard",
  ".faqItem",
  "main .card",
].join(",");

// Gently fades in content below the fold as it scrolls into view.
// Content already on screen is left alone, and reduced-motion settings are respected.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", `${(i % 3) * 70}ms`);
      // Once revealed, hand control back to the element's normal hover transitions.
      el.addEventListener(
        "transitionend",
        () => {
          if (!el.classList.contains("revealed")) return;
          el.classList.remove("reveal", "revealed");
          el.style.removeProperty("--reveal-delay");
        },
        { once: false }
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
