"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { ReactLenis } from "@cafenture/lib/react-lenis";

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>();
  useEffect(() => {
    function update(time: number) {
      if (!lenisRef.current) return;
      lenisRef.current.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
