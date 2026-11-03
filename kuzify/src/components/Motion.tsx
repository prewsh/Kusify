'use client';

import { useEffect } from 'react';

// Fades elements marked with data-reveal into view as they scroll on screen.
// Content stays visible if JavaScript is off or the reader prefers reduced motion.
export default function Motion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const reveal = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    const watch = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((element) => reveal.observe(element));
    watch();
    const changes = new MutationObserver(watch);
    changes.observe(document.body, { childList: true, subtree: true });

    return () => {
      reveal.disconnect();
      changes.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
