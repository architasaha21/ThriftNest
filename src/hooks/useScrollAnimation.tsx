
import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  once = true
}: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If once is true, unobserve after becoming visible
          if (once && entry.isIntersecting) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          // If once is false, toggle visibility
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
