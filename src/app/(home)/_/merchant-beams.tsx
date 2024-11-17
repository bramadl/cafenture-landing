"use client";

import { type RefObject, Fragment, forwardRef, useRef } from "react";

import { AnimatedBeam } from "@cafenture/components/ui/animated-beam";
import { DummyLogo } from "@cafenture/content/mocks/logos";
import { Logo } from "@cafenture/components/ui/logo";
import { cn } from "@cafenture/lib/utils";

const LogoContainer = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("z-10 p-4 rounded-2xl bg-slate-200", className)}
    >
      {children}
    </div>
  );
});
LogoContainer.displayName = "LogoContainer";

const BeamContainer = ({
  _option,
  baseRef,
  containerRef,
  fromRef,
  position,
  leftSide = true,
  size,
  toRef,
}: {
  _option: 1 | 2 | 3 | 4;
  baseRef: RefObject<HTMLDivElement>;
  containerRef: RefObject<HTMLDivElement>;
  fromRef: RefObject<HTMLDivElement>;
  position: string;
  leftSide?: boolean;
  size: string;
  toRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <Fragment>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        reverse={!leftSide}
      />
      <LogoContainer
        ref={baseRef}
        className={cn(
          "absolute",
          position,
          leftSide ? "!left-[-100%]" : "!right-[-100%]"
        )}
      >
        <DummyLogo className={size} option={_option} />
      </LogoContainer>
      <LogoContainer ref={fromRef} className={cn("absolute", position)}>
        <DummyLogo className={size} option={_option} />
      </LogoContainer>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={baseRef}
        toRef={fromRef}
        reverse={!leftSide}
      />
    </Fragment>
  );
};

export const MerchantBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLDivElement>(null);

  const _merchant1Ref = useRef<HTMLDivElement>(null);
  const merchant1Ref = useRef<HTMLDivElement>(null);

  const _merchant2Ref = useRef<HTMLDivElement>(null);
  const merchant2Ref = useRef<HTMLDivElement>(null);

  const _merchant3Ref = useRef<HTMLDivElement>(null);
  const merchant3Ref = useRef<HTMLDivElement>(null);

  const _merchant4Ref = useRef<HTMLDivElement>(null);
  const merchant4Ref = useRef<HTMLDivElement>(null);

  const _merchant5Ref = useRef<HTMLDivElement>(null);
  const merchant5Ref = useRef<HTMLDivElement>(null);

  const _merchant6Ref = useRef<HTMLDivElement>(null);
  const merchant6Ref = useRef<HTMLDivElement>(null);

  const _merchant7Ref = useRef<HTMLDivElement>(null);
  const merchant7Ref = useRef<HTMLDivElement>(null);

  const _merchant8Ref = useRef<HTMLDivElement>(null);
  const merchant8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] sm:h-[640px] rounded-[64px] bg-slate-50 border border-secondary-200 shadow overflow-hidden"
    >
      <div id="left-merchants">
        <BeamContainer
          _option={1}
          baseRef={_merchant1Ref}
          containerRef={containerRef}
          fromRef={merchant1Ref}
          position="left-[5%] sm:left-[5%] top-[15%]"
          size="size-6 sm:size-12"
          toRef={containerRef}
        />

        <BeamContainer
          _option={2}
          baseRef={_merchant2Ref}
          containerRef={containerRef}
          fromRef={merchant2Ref}
          position="left-[15%] sm:left-[25%] bottom-[35%] sm:bottom-[35%]"
          size="size-4 sm:size-6"
          toRef={containerRef}
        />

        <BeamContainer
          _option={3}
          baseRef={_merchant3Ref}
          containerRef={containerRef}
          fromRef={merchant3Ref}
          position="left-[15%] sm:left-[15%] top-[35%] sm:top-[40%]"
          size="size-4 sm:size-6"
          toRef={containerRef}
        />

        <BeamContainer
          _option={4}
          baseRef={_merchant4Ref}
          containerRef={containerRef}
          fromRef={merchant4Ref}
          position="left-[5%] sm:left-[10%] bottom-[15%]"
          size="size-6 sm:size-10"
          toRef={containerRef}
        />
      </div>

      <LogoContainer
        ref={mainRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800"
      >
        <Logo className="size-16 sm:size-[150px]" type="light" />
      </LogoContainer>

      <div id="right-merchants">
        <BeamContainer
          _option={4}
          baseRef={_merchant5Ref}
          containerRef={containerRef}
          fromRef={merchant5Ref}
          leftSide={false}
          position="right-[5%] sm:right-[5%] bottom-[15%]"
          size="size-6 sm:size-12"
          toRef={containerRef}
        />

        <BeamContainer
          _option={3}
          baseRef={_merchant6Ref}
          containerRef={containerRef}
          fromRef={merchant6Ref}
          leftSide={false}
          position="right-[15%] sm:right-[25%] top-[35%] sm:top-[35%]"
          size="size-4 sm:size-6"
          toRef={containerRef}
        />

        <BeamContainer
          _option={2}
          baseRef={_merchant7Ref}
          containerRef={containerRef}
          fromRef={merchant7Ref}
          leftSide={false}
          position="right-[15%] sm:right-[15%] bottom-[35%] sm:bottom-[40%]"
          size="size-4 sm:size-6"
          toRef={containerRef}
        />

        <BeamContainer
          _option={1}
          baseRef={_merchant8Ref}
          containerRef={containerRef}
          fromRef={merchant8Ref}
          leftSide={false}
          position="right-[5%] sm:right-[10%] top-[15%]"
          size="size-6 sm:size-10"
          toRef={containerRef}
        />
      </div>
    </div>
  );
};
