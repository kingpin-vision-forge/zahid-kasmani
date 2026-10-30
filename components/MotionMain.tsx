'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap';
import { EASE_OUT, MOTION_OK } from '@/lib/animations/media';

/**
 * A scoped, site-wide reveal layer for editorial content.
 * Elements remain fully visible without JavaScript and when reduced motion is enabled.
 */
export default function MotionMain({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = mainRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-scroll-reveal]', root);

        items.forEach((item) => {
          if (ScrollTrigger.isInViewport(item, 0.05)) return;

          gsap.set(item, { autoAlpha: 0, y: 18 });
          gsap.to(item, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: EASE_OUT,
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: item,
              start: 'top 84%',
              once: true,
            },
          });
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} id="main" tabIndex={-1} className="outline-none">
      {children}
    </main>
  );
}
