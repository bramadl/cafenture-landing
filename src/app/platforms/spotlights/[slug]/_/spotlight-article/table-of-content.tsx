"use client";

import { type FC, type HTMLAttributes, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "usehooks-ts";

import { cn } from "@cafenture/lib/utils";

import { JumpToContentButton } from "./jump-to-content-button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const TableOfContent: FC<
  HTMLAttributes<HTMLDivElement> & { contents: { id: string; label: string }[] }
> = ({ contents, ...props }) => {
  const { width = 0 } = useWindowSize();
  const [locationHash, setLocationHash] = useState<string>();

  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (width < 1208) return;
      if (!ref.current) return;
      const headings = [
        ...document.querySelectorAll<HTMLHeadingElement>("#article h2"),
      ];

      const navigationHeight = +gsap.getProperty("#nav", "height");
      const parentElementPadding = +gsap.getProperty("#article", "paddingTop");

      /**
       * This is the initial Y value from template when the first page loads
       * @see src/app/template.tsx
       */
      const templateInitialY = 16;
      headings.forEach((heading) => {
        ScrollTrigger.create({
          trigger: heading,
          onEnter: () => setLocationHash(heading.id),
          onEnterBack: () => setLocationHash(heading.id),
          start: () =>
            `top-=${templateInitialY} top+=${
              parentElementPadding + navigationHeight
            }`,
        });
      });
    },
    { dependencies: [width], revertOnUpdate: true }
  );

  return (
    <div
      ref={ref}
      {...props}
      className={cn("flex flex-col gap-4", props.className)}
    >
      <h3 className="text-lg sm:text-xl font-semibold">Dalam Halaman Ini</h3>
      <ul className="flex flex-col gap-1 border-l border-slate-300">
        {contents.map((content, key) => (
          <li key={key}>
            <JumpToContentButton
              id={content.id}
              isActive={locationHash === content.id}
              onJumped={setLocationHash}
            >
              {content.label}
            </JumpToContentButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
