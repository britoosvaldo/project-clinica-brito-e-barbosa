import { useEffect } from "react";

export default function useRevealOnScroll({
  selector = ".reveal",
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  once = true,
} = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("reveal--visible");
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, once]);
}
