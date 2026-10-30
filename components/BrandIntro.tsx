'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { gsap, useGSAP } from '@/lib/animations/gsap';
import { EASE_IN_OUT, REDUCED_MOTION } from '@/lib/animations/media';

/**
 * First-load brand handoff. The intro logo moves into the measured header logo
 * position, so the loading state and navigation feel like one continuous object.
 */
export default function BrandIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [finished, setFinished] = useState(false);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const logo = logoRef.current;
      const target = document.querySelector<HTMLElement>('[data-brand-target]');

      if (!overlay || !logo || !target) {
        setFinished(true);
        return;
      }

      document.documentElement.dataset.brandIntro = 'active';
      const reducedMotion = window.matchMedia(REDUCED_MOTION).matches;

      const finish = () => {
        delete document.documentElement.dataset.brandIntro;
        setFinished(true);
      };

      if (reducedMotion) {
        gsap.to(overlay, {
          autoAlpha: 0,
          duration: 0.2,
          delay: 0.15,
          ease: 'power1.out',
          onComplete: finish,
        });
        return () => delete document.documentElement.dataset.brandIntro;
      }

      const sourceRect = logo.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const moveX = targetRect.left - sourceRect.left;
      const moveY = targetRect.top - sourceRect.top;

      const timeline = gsap.timeline({ onComplete: finish });
      timeline
        .to(logo, {
          x: moveX,
          y: moveY,
          scaleX: targetRect.width / sourceRect.width,
          scaleY: targetRect.height / sourceRect.height,
          transformOrigin: 'top left',
          duration: 1,
          delay: 0.55,
          ease: EASE_IN_OUT,
        })
        .to(overlay, { autoAlpha: 0, duration: 0.2, ease: 'power1.out' }, '-=0.06');

      return () => {
        timeline.kill();
        delete document.documentElement.dataset.brandIntro;
      };
    },
    { scope: overlayRef },
  );

  if (finished) return null;

  return (
    <div ref={overlayRef} className="brand-intro" aria-hidden="true">
      <Image
        ref={logoRef}
        src="/images/zahid-kasmani-logo-transparent.png"
        alt=""
        width={1452}
        height={1083}
        className="brand-intro-logo"
        priority
      />
    </div>
  );
}
