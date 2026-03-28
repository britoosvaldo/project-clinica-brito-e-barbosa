import { useEffect } from "react";

export default function useRevealOnScroll({
  selector = ".reveal",
  root = null,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true,
} = {}) {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      { root, rootMargin, threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, root, rootMargin, threshold, once]);
}
