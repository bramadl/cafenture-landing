"use client";

import { gsap } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis)
      lenis.scrollTo("#article", {
        lock: true,
        offset: -+gsap.getProperty("#article", "paddingTop"),
      });
  }, [lenis]);

  return children;
}
