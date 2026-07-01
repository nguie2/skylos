"use client";

import { useEffect } from "react";

export function HeaderScrollEffect() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header) return;

    const onScroll = () => {
      const scrolled = window.pageYOffset > 24;
      header.classList.toggle("glass-nav-scrolled", scrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

export function CardHoverEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll(".bento-card");

    const handlers = Array.from(cards).map((card) => {
      const img = card.querySelector("img");

      const onEnter = () => {
        if (img) img.style.transform = "scale(1.05)";
      };
      const onLeave = () => {
        if (img) img.style.transform = "scale(1)";
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      return { card, onEnter, onLeave };
    });

    return () => {
      handlers.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return null;
}
