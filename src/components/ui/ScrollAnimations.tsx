"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Reveal Observer for .revelar elements (Fer Palacio engine)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("abierta");
            // Optional: once revealed, unobserve to keep performance 60fps
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05,
      }
    );

    const elements = document.querySelectorAll(".revelar, .pincelada, .iza, .resaltador");
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically mounted elements / page load
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        ".revelar:not(.abierta), .pincelada:not(.abierta), .iza:not(.abierta), .resaltador:not(.abierta)"
      );
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
