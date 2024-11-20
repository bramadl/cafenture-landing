"use client";

import * as motion from "framer-motion/client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return () => {
      if (ScrollTrigger.getAll().length > 0) ScrollTrigger.killAll();
    };
  }, []);

  return (
    <motion.div
      initial={{ filter: "blur(8px)", y: 16, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
