import { Marquee } from "@cafenture/components/ui/marquee";

import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from "./merchant-logos";

export const MerchantsMarquee = () => {
  return (
    <div>
      <h2 className="text-secondary text-center md:text-xl mb-16">
        Dipercayai ratusan mitra lainnya untuk meningkatkan eksposur bisnis
        Kedai Kopi
      </h2>
      <div className="relative w-full flex flex-col items-center justify-center gap-12 overflow-hidden">
        <Marquee className="[--duration:20s]">
          {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((Logo, key) => (
            <Logo key={key} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]
            .reverse()
            .map((Logo, key) => (
              <Logo key={key} />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
      </div>
    </div>
  );
};
