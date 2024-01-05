import { inViewStore } from "@/store/in-view.store";
import { useEffect, useState } from "react";

export function useInView(id: string) {
  const [isVisible, setIsVisible] = useState(false);
  const { setSectionName } = inViewStore((state) => state);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    const currentElement = document.getElementById(id);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setSectionName(id);
    }
  }, [isVisible]);
}
