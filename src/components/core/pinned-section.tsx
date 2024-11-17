"use client";

import { type FC, type HTMLAttributes, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import { useWindowSize } from "usehooks-ts";

import { cn } from "@cafenture/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const PinnedSection: FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { width = 0 } = useWindowSize();

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { force: true, immediate: true, lock: true });
  }, [lenis]);

  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (width < 1208) return;
      if (!ref.current) return;

      setTimeout(() => {
        if (!ref.current) return;

        const nextElement = ref.current.nextElementSibling;
        if (!nextElement) return;

        const navigationHeight = +gsap.getProperty("#nav", "height");
        const parentElementPadding = +gsap.getProperty(
          "#article",
          "paddingTop"
        );

        /**
         * This is the initial Y value from template when the first page loads
         * @see src/app/template.tsx
         */
        const templateInitialY = 16;
        ScrollTrigger.create({
          trigger: ref.current,
          start: () =>
            `top-=${templateInitialY} top+=${
              parentElementPadding + navigationHeight
            }`,
          endTrigger: nextElement,
          end: () => {
            if (ref.current) {
              return `+=${
                nextElement.clientHeight -
                ref.current!.scrollHeight -
                templateInitialY
              }`;
            }

            return 0;
          },
          pin: true,
          pinReparent: true,
        });
      }, 50);
    },
    { dependencies: [lenis, width], revertOnUpdate: true }
  );

  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "xl:w-[320px] flex flex-col gap-16 self-start",
        props.className
      )}
    />
  );
};
