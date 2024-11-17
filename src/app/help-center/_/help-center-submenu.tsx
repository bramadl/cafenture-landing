"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import { JumpToContentButton } from "@cafenture/app/platforms/spotlights/[slug]/_/spotlight-article/jump-to-content-button";
import { helpCenterMenus } from "@cafenture/content/help-center/menus";

export const HelpCenterSubMenu = () => {
  const pathname = usePathname();

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

  const contents = helpCenterMenus.find((menu) => menu.url === pathname);
  if (!contents) return;

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <h3 className="text-lg sm:text-xl font-semibold">Dalam Halaman Ini</h3>
      <ul className="flex flex-col gap-1 border-l border-slate-300">
        {contents.contents.map((link, key) => (
          <li key={key}>
            <JumpToContentButton
              id={link.id}
              isActive={locationHash === link.id}
              onJumped={setLocationHash}
            >
              {link.label}
            </JumpToContentButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
