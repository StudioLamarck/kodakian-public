"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal, .reveal-scale, [data-reveal]";

// Déclenche les apparitions au scroll (voir globals.css). Les éléments déjà
// à l'écran ou au-dessus, par exemple après un rechargement au milieu de la
// page, sont affichés tout de suite sans animation.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const show = (el: Element) => el.setAttribute("data-shown", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const el of document.querySelectorAll(SELECTOR)) {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else observer.observe(el);
    }
    root.classList.add("reveal-ready");

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
