import { type FC, type HTMLAttributes } from "react";
import { type Icon } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import {
  AccountManagementFeatures,
  CoffeeShopDiscoveryFeatures,
  CoffeeShopInformationFeatures,
} from "@cafenture/content/features";
import { Article } from "@cafenture/components/core/article";
import {
  ModuleAccountManagementUrl,
  ModuleCoffeeShopDiscoveryUrl,
  ModuleCoffeeShopInformationUrl,
} from "@cafenture/content/menus";
import { cn } from "@cafenture/lib/utils";

interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  anchor: string;
  description: string;
  icon: Icon;
  title: string;
}

const BentoCard: FC<BentoCardProps> = ({
  anchor,
  description,
  icon: Icon,
  title,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        "group/bento flex flex-col justify-end gap-6 p-6 rounded-2xl bg-slate-50 overflow-hidden",
        props.className
      )}
    >
      <Article
        className="group-hover/bento:translate-y-0 translate-y-12 transition duration-500"
        description={description}
        title={title}
      >
        <Icon className="size-5 text-secondary" />
      </Article>
      <Link
        className="inline-flex items-center gap-2 font-medium text-sm text-primary origin-left scale-90 group-hover/bento:scale-100 group-hover/bento:translate-y-0 translate-y-12 [&>svg]:hover:ml-2 transition duration-500"
        href={anchor}
      >
        Pelajari Lebih Lanjut
        <ArrowRight className="transition-[margin] duration-500" />
      </Link>
    </section>
  );
};

const BentoGrid: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 xl:auto-rows-[320px] gap-6",
        props.className
      )}
    />
  );
};

export const FeaturesBento = () => {
  return (
    <BentoGrid>
      {/* Wishlist dan Koleksi */}
      <BentoCard
        anchor={ModuleAccountManagementUrl.url}
        className="sm:col-span-1"
        icon={AccountManagementFeatures[3].icon}
        title={AccountManagementFeatures[3].name}
        description={AccountManagementFeatures[3].description}
      />

      {/* Poin dan Hadiah */}
      <BentoCard
        anchor={ModuleAccountManagementUrl.url}
        icon={AccountManagementFeatures[4].icon}
        title={AccountManagementFeatures[4].name}
        description={AccountManagementFeatures[4].description}
      />

      {/* Rekomendasi Cerdas */}
      <BentoCard
        anchor={ModuleCoffeeShopDiscoveryUrl.url}
        className="sm:row-span-2"
        icon={CoffeeShopDiscoveryFeatures[1].icon}
        title={CoffeeShopDiscoveryFeatures[1].name}
        description={CoffeeShopDiscoveryFeatures[1].description}
      />

      {/* Pencarian Cerdas */}
      <BentoCard
        anchor={ModuleCoffeeShopDiscoveryUrl.url}
        className="sm:row-span-2"
        icon={CoffeeShopDiscoveryFeatures[5].icon}
        title={CoffeeShopDiscoveryFeatures[5].name}
        description={CoffeeShopDiscoveryFeatures[5].description}
      />

      {/* Peta dan Navigasi */}
      <BentoCard
        anchor={ModuleCoffeeShopDiscoveryUrl.url}
        className="md:col-span-2 xl:col-span-1"
        icon={CoffeeShopDiscoveryFeatures[3].icon}
        title={CoffeeShopDiscoveryFeatures[3].name}
        description={CoffeeShopDiscoveryFeatures[3].description}
      />

      {/* Nilai Pencocokan Cerdas */}
      <BentoCard
        anchor={ModuleCoffeeShopInformationUrl.url}
        icon={CoffeeShopInformationFeatures[0].icon}
        title={CoffeeShopInformationFeatures[0].name}
        description={CoffeeShopInformationFeatures[0].description}
      />

      {/* Daftar Menu Terlengkap */}
      <BentoCard
        anchor={ModuleCoffeeShopInformationUrl.url}
        icon={CoffeeShopInformationFeatures[3].icon}
        title={CoffeeShopInformationFeatures[3].name}
        description={CoffeeShopInformationFeatures[3].description}
      />
    </BentoGrid>
  );
};
