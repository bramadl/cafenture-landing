"use client";

import { type FC, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "usehooks-ts";

import { Article } from "@cafenture/components/core/article";
import { memberships } from "@cafenture/content/memberships";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface BenefitCardProps {
  description: string;
  index: number;
  name: string;
  title: string;
}

const BenefitCard: FC<BenefitCardProps> = ({
  description,
  index,
  name,
  title,
}) => {
  return (
    <section className="relative [&>.line]:last:h-10 grid md:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-[100px] last:pb-0 pb-10">
      <div className="line absolute top-0 left-5 w-px h-full bg-slate-200" />
      <div className="line-shadow absolute top-0 left-5 w-px h-0 bg-gradient-to-b from-[#3b82f6] to-[#2563eb]" />

      <div className="flex items-start gap-10">
        <div className="circle relative shrink-0 w-10 h-10 rounded-full bg-slate-200 after:absolute after:inset-0 after:scale-105 after:border after:border-slate-200 after:animate-ping after:rounded-full transition-colors" />
        <div className="flex flex-col gap-4">
          <div className="indicator text-4xl font-semibold text-secondary/25 transition-colors">
            {`0${index + 1}`}
            <h2 className="font-bold text-xl">{name}</h2>
          </div>
          <Article
            className="md:hidden flex-1"
            description={description}
            title={title}
          />
        </div>
      </div>
      <Article
        className="hidden md:flex flex-1"
        description={description}
        title={title}
      />
    </section>
  );
};

export const MembershipsBenefits = () => {
  const { height = 0, width = 0 } = useWindowSize();

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const sections = [...containerRef.current.querySelectorAll("section")];
      sections.forEach((section, index, array) => {
        const height = +gsap.getProperty(section, "height");
        const padding = +gsap.getProperty(section, "paddingTop");

        gsap.to(section.querySelector(".circle"), {
          scrollTrigger: {
            start: "start center",
            end: ScrollTrigger.maxScroll(window),
            trigger: section,
            toggleClass: {
              className: "!bg-primary",
              targets: section.querySelector(".circle"),
            },
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(section.querySelector(".indicator"), {
          scrollTrigger: {
            start: "start center",
            end: () =>
              index === array.length - 1
                ? ScrollTrigger.maxScroll(window)
                : "bottom center",
            trigger: section,
            toggleClass: {
              className: "!text-black",
              targets: section.querySelector(".indicator"),
            },
            toggleActions: "play none none reverse",
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: () => `start center`,
              end: () => `${height}px center+=${padding}px`,
              scrub: true,
            },
          })
          .to(section.querySelector(".line-shadow"), {
            height: +gsap.getProperty(section.querySelector(".line"), "height"),
          });
      });
    },
    { scope: containerRef, dependencies: [height, width], revertOnUpdate: true }
  );

  return (
    <div ref={containerRef} className="relative">
      {memberships.list.map((benefit, key) => (
        <BenefitCard key={key} index={key} {...benefit} />
      ))}
    </div>
  );
};
