"use client";

import { type FC, type RefObject, Fragment, forwardRef, useRef } from "react";
import { User } from "@phosphor-icons/react";

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

interface UserBeamsProps {
  containerRef: RefObject<HTMLDivElement>;
  mainRef: RefObject<HTMLDivElement>;
}

const UserBeams: FC<UserBeamsProps> = ({ containerRef, mainRef }) => {
  const userRef = useRef<HTMLDivElement>(null);
  return (
    <Fragment>
      <LogoContainer ref={userRef}>
        <User className="size-6 text-secondary" weight="fill" />
      </LogoContainer>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef}
        toRef={mainRef}
      />
    </Fragment>
  );
};

interface MerchantBeamsProps extends UserBeamsProps {
  _option: 1 | 2 | 3 | 4;
}

const MerchantBeams: FC<MerchantBeamsProps> = ({
  _option,
  containerRef,
  mainRef,
}) => {
  const merchantRef = useRef<HTMLDivElement>(null);
  return (
    <Fragment>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={merchantRef}
        toRef={mainRef}
      />
      <LogoContainer ref={merchantRef}>
        <DummyLogo className="size-6" option={_option} />
      </LogoContainer>
    </Fragment>
  );
};

export const MarketBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] sm:h-[640px] flex items-center justify-center gap-12 md:gap-[100px] lg:gap-[200px] rounded-[64px] bg-slate-50 overflow-hidden"
    >
      <div className="flex flex-col items-start gap-8">
        {Array(5)
          .fill(null)
          .map((u, key) => (
            <UserBeams
              key={key}
              containerRef={containerRef}
              mainRef={mainRef}
            />
          ))}
      </div>
      <LogoContainer ref={mainRef} className="bg-slate-800">
        <Logo className="size-16 sm:size-[150px]" type="light" />
      </LogoContainer>
      <div className="flex flex-col items-start gap-8">
        {[1, 2, 3, 4, 1].map((m, key) => (
          <MerchantBeams
            key={key}
            _option={m as 1 | 2 | 3 | 4}
            containerRef={containerRef}
            mainRef={mainRef}
          />
        ))}
      </div>
    </div>
  );
};
