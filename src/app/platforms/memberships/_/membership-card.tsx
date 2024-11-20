import { type FC, type HTMLAttributes } from "react";

import { Logo } from "@cafenture/components/ui/logo";
import { WavyLines } from "@cafenture/components/svg/wavy-lines";
import { cn } from "@cafenture/lib/utils";

export const MembershipCard: FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "relative flex flex-col justify-between gap-8 p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white w-full aspect-video",
        props.className
      )}
    >
      <WavyLines className="absolute w-full h-full inset-0 pointer-events-none" />
      <Logo className="w-6 md:w-10 h-6 md:h-10 object-contain" type="light" usePNG />
      <div className="font-mono">
        <p className="text-sm md:text-3xl lg:text-base md:mb-2 lg:mb-0">
          Bintang Ramadhan
        </p>
        <p className="text-xs md:text-xl lg:text-sm text-secondary-400">
          ID No. 4721 9627 1635 8047
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-xl lg:text-sm">
        <p className="font-sans uppercase text-secondary-400">Exp</p>
        <p className="font-mono">17.03.2024</p>
      </div>
    </div>
  );
};
