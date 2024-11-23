"use client";

import { type FC, type RefObject, Fragment, forwardRef, useRef } from "react";
import { User } from "@phosphor-icons/react";
import Image, { type StaticImageData } from "next/image";

import { AnimatedBeam } from "@cafenture/components/ui/animated-beam";
import { Logo } from "@cafenture/components/ui/logo";
import { cn } from "@cafenture/lib/utils";

import KiraKiraKopi from "@cafenture/content/assets/merchants/logos/kirakirakopi.png";
import KopiDeo from "@cafenture/content/assets/merchants/logos/kopi-deo.png";
import KopiKohlie from "@cafenture/content/assets/merchants/logos/kopi-kohlie.png";
import KopiPraja from "@cafenture/content/assets/merchants/logos/kopi-praja.png";
import KopiWangsa from "@cafenture/content/assets/merchants/logos/kopi-wangsa.png";

const LogoContainer = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("z-10 bg-slate-200", className)}>
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
      <LogoContainer ref={userRef} className="p-4 rounded">
        <User className="size-6 rounded text-secondary" weight="fill" />
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
  image: StaticImageData & {
    alt: string;
  };
}

const MerchantBeams: FC<MerchantBeamsProps> = ({
  image,
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
        <Image
          alt={image.alt}
          blurDataURL={image.blurDataURL}
          className={cn("rounded size-14")}
          height={image.height}
          src={image}
          width={image.width}
        />
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
      className="relative w-full h-[480px] sm:h-[640px] flex items-center justify-center gap-12 md:gap-[100px] lg:gap-[200px] rounded-[30px] bg-slate-50 overflow-hidden"
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
      <LogoContainer ref={mainRef} className="bg-slate-800 rounded-2xl p-4">
        <Logo className="size-16 sm:size-[150px]" type="light" />
      </LogoContainer>
      <div className="flex flex-col items-start gap-8">
        {[
          {
            ...KiraKiraKopi,
            alt: "Cafenture Indonesia: (Merchant) Kira Kira Kopi",
          },
          {
            ...KopiDeo,
            alt: "Cafenture Indonesia: (Merchant) Kopi Deo",
          },
          {
            ...KopiKohlie,
            alt: "Cafenture Indonesia: (Merchant) Kopi Kohlie",
          },
          {
            ...KopiPraja,
            alt: "Cafenture Indonesia: (Merchant) Kopi Praja",
          },
          {
            ...KopiWangsa,
            alt: "Cafenture Indonesia: (Merchant) Kopi Wangsa",
          },
        ].map((logo, key) => (
          <MerchantBeams
            key={key}
            image={logo}
            containerRef={containerRef}
            mainRef={mainRef}
          />
        ))}
      </div>
    </div>
  );
};
