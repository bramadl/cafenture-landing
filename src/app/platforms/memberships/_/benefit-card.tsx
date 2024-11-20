"use client";

import { useRef, type FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "usehooks-ts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { Article } from "@cafenture/components/core/article";

interface BenefitCardProps {
  description: string;
  index: number;
  name: string;
  title: string;
}

export const BenefitCard: FC<BenefitCardProps> = ({
  description,
  index,
  name,
  title,
}) => {
  const { height = 0, width = 0 } = useWindowSize();

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const height = +gsap.getProperty(containerRef.current, "height");
      const padding = +gsap.getProperty(containerRef.current, "paddingTop");

      const circle = containerRef.current.querySelector(".circle");
      const name = containerRef.current.querySelector(".name");
      const line = containerRef.current.querySelector(".line-shadow");

      gsap.to(circle, {
        backgroundColor: "#3b82f6",
        scrollTrigger: {
          start: "start center",
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(name, {
        color: "#020617",
        scrollTrigger: {
          start: "start center",
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(line, {
        height: +gsap.getProperty(
          containerRef.current.querySelector(".line"),
          "height"
        ),
        scrollTrigger: {
          trigger: containerRef.current,
          start: () => `start center`,
          end: () => `${height}px center+=${padding}px`,
          scrub: true,
        },
      });
    },
    { scope: containerRef, dependencies: [height, width], revertOnUpdate: true }
  );

  return (
    <section
      ref={containerRef}
      className="relative [&>.line]:last:h-10 grid md:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-[100px] last:pb-0 pb-10"
    >
      <div className="line absolute top-0 left-5 w-px h-full bg-slate-200" />
      <div className="line-shadow absolute top-0 left-5 w-px h-0 bg-gradient-to-b from-[#3b82f6] to-[#2563eb]" />

      <div className="flex items-start gap-10">
        <div className="circle relative shrink-0 w-10 h-10 rounded-full bg-slate-200 after:absolute after:inset-0 after:scale-105 after:border after:border-slate-200 after:animate-ping after:rounded-full" />
        <div className="flex flex-col gap-4">
          <div className="name text-4xl font-semibold text-secondary/25">
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
