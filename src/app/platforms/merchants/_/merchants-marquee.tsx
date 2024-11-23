import Image from "next/image";

import { Marquee } from "@cafenture/components/ui/marquee";
import { cn } from "@cafenture/lib/utils";

import AnomaliCoffee from "@cafenture/content/assets/merchants/logos/anomali-coffee.png";
import Coteca from "@cafenture/content/assets/merchants/logos/coteca.png";
import DancingGoat from "@cafenture/content/assets/merchants/logos/dancing-goat.png";
import NineCupsCoffee from "@cafenture/content/assets/merchants/logos/9-cups-coffee.png";
import DuaMasa from "@cafenture/content/assets/merchants/logos/dua-masa.png";
import FillmoreCoffee from "@cafenture/content/assets/merchants/logos/fillmore-coffee.png";
import GutenMorgen from "@cafenture/content/assets/merchants/logos/guten-morgen.png";
import I15 from "@cafenture/content/assets/merchants/logos/i15.png";
import KiraKiraKopi from "@cafenture/content/assets/merchants/logos/kirakirakopi.png";
import KopiDeo from "@cafenture/content/assets/merchants/logos/kopi-deo.png";
import KopiKohlie from "@cafenture/content/assets/merchants/logos/kopi-kohlie.png";
import KopiPraja from "@cafenture/content/assets/merchants/logos/kopi-praja.png";
import KopiWangsa from "@cafenture/content/assets/merchants/logos/kopi-wangsa.png";
import Kopilot from "@cafenture/content/assets/merchants/logos/kopilot.png";
import Kopiluvium from "@cafenture/content/assets/merchants/logos/kopiluvium.png";
import RelativeCoffee from "@cafenture/content/assets/merchants/logos/relative-coffee.png";
import RelungKopi from "@cafenture/content/assets/merchants/logos/relung-kopi.png";
import Tieambi from "@cafenture/content/assets/merchants/logos/tieambi.png";
import TokoKopiMaru from "@cafenture/content/assets/merchants/logos/toko-kopi-maru.png";

const merchants = [
  {
    ...AnomaliCoffee,
    alt: "Anomali Coffee",
  },
  {
    ...Coteca,
    alt: "Coteca",
  },
  {
    ...DancingGoat,
    alt: "Dancing Goat",
  },
  {
    ...NineCupsCoffee,
    alt: "Nine Cups Coffee",
  },
  {
    ...DuaMasa,
    alt: "Dua Masa",
  },
  {
    ...FillmoreCoffee,
    alt: "Fillmore Coffee",
  },
  {
    ...GutenMorgen,
    alt: "Guten Morgen",
  },
  {
    ...I15,
    alt: "I15 Coffee",
  },
  {
    ...KiraKiraKopi,
    alt: "Kira Kira Kopi",
  },
  {
    ...KopiDeo,
    alt: "Kopi Deo",
  },
  {
    ...KopiKohlie,
    alt: "Kopi Kohlie",
  },
  {
    ...KopiPraja,
    alt: "Kopi Praja",
  },
  {
    ...KopiWangsa,
    alt: "Kopi Wangsa",
  },
  {
    ...Kopilot,
    alt: "Kopilot",
  },
  {
    ...Kopiluvium,
    alt: "Kopiluvium",
  },
  {
    ...RelativeCoffee,
    alt: "Relative Coffee",
  },
  {
    ...RelungKopi,
    alt: "Relung Kopi",
  },
  {
    ...Tieambi,
    alt: "Tieambi",
  },
  {
    ...TokoKopiMaru,
    alt: "Toko Kopi Maru",
  },
];

const firstRow = merchants.slice(0, merchants.length / 2);
const secondRow = merchants.slice(merchants.length / 2);

export const MerchantsMarquee = () => {
  return (
    <div>
      <p className="text-secondary text-center md:text-xl mb-16">
        Dipercayai ratusan mitra lainnya dalam meningkatkan eksposur bisnis
      </p>
      <div className="relative w-full flex flex-col items-center justify-center gap-12 overflow-hidden">
        <Marquee className="[--duration:20s]">
          {firstRow.map((image, key) => (
            <Image
              key={key}
              alt={`Cafenture Indonesia: (Merchant) ${image.alt}`}
              blurDataURL={image.blurDataURL}
              className={cn("rounded size-10")}
              height={image.height}
              src={image}
              width={image.width}
            />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((image, key) => (
            <Image
              key={key}
              alt={`Cafenture Indonesia: (Merchant) ${image.alt}`}
              blurDataURL={image.blurDataURL}
              className={cn("rounded size-10")}
              height={image.height}
              src={image}
              width={image.width}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
      </div>
    </div>
  );
};
