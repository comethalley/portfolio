import { useRef, useEffect, useState } from 'react';

export function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref as React.RefObject<HTMLDivElement>, inView];
}
