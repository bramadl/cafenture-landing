"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import { JumpToContentButton } from "@cafenture/app/platforms/spotlights/[slug]/_/spotlight-article/jump-to-content-button";

export const HelpCenterSubMenu = ({ menus }: { menus: TableOfContent[] }) => {
  const { height = 0, width = 0 } = useWindowSize();
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
    { dependencies: [height, width], revertOnUpdate: true }
  );

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <p className="text-lg sm:text-xl font-semibold">Dalam Halaman Ini</p>
      <ul className="flex flex-col gap-1 border-l border-slate-300">
        {menus.map((menu, key) => (
          <li key={key}>
            <JumpToContentButton
              id={menu.id}
              isActive={locationHash === menu.id}
              onJumped={setLocationHash}
            >
              {menu.label}
            </JumpToContentButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
