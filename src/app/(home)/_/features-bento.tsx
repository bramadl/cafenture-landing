import { type FC, type HTMLAttributes } from "react";
import { type Icon } from "@phosphor-icons/react";

import {
  AccountManagementFeatures,
  CoffeeShopDiscoveryFeatures,
  CoffeeShopInformationFeatures,
} from "@cafenture/content/features";
import { cn } from "@cafenture/lib/utils";
import { Article } from "@cafenture/components/core/article";

interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  figures?: {
    layout: "one-column" | "two-column" | "two-column-reversed" | "three-rows";
  };
  icon: Icon;
  title: string;
}

const BentoCard: FC<BentoCardProps> = ({
  description,
  figures = {
    layout: "two-column",
  },
  icon: Icon,
  title,
  ...props
}) => {
  const Figure = () => {
    switch (figures.layout) {
      case "one-column":
        return <div className="w-full h-[100px] rounded-lg bg-slate-200" />;
      case "two-column":
        return (
          <figure className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
          </figure>
        );
      case "two-column-reversed":
        return (
          <figure className="grid grid-cols-[1fr_2fr] gap-4">
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
          </figure>
        );
      case "three-rows":
        return (
          <figure className="flex flex-col gap-4">
            <div className="w-full h-[250px] rounded-lg bg-slate-200" />
            <div className="w-full h-[50px] rounded-lg bg-slate-200" />
            <div className="w-full h-[50px] rounded-lg bg-slate-200" />
          </figure>
        );
    }
  };

  return (
    <section
      {...props}
      className={cn(
        "flex flex-col justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-secondary-200 shadow",
        props.className
      )}
    >
      {Figure()}
      <Article description={description} title={title}>
        <Icon className="size-5 text-secondary" />
      </Article>
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
      <BentoCard
        className="sm:col-span-1"
        icon={AccountManagementFeatures[3].icon}
        title={AccountManagementFeatures[3].name}
        description={AccountManagementFeatures[3].description}
      />
      <BentoCard
        figures={{ layout: "one-column" }}
        icon={AccountManagementFeatures[4].icon}
        title={AccountManagementFeatures[4].name}
        description={AccountManagementFeatures[4].description}
      />
      <BentoCard
        className="sm:row-span-2"
        figures={{ layout: "three-rows" }}
        icon={CoffeeShopDiscoveryFeatures[1].icon}
        title={CoffeeShopDiscoveryFeatures[1].name}
        description={CoffeeShopDiscoveryFeatures[1].description}
      />
      <BentoCard
        className="sm:row-span-2"
        figures={{ layout: "three-rows" }}
        icon={CoffeeShopDiscoveryFeatures[5].icon}
        title={CoffeeShopDiscoveryFeatures[5].name}
        description={CoffeeShopDiscoveryFeatures[5].description}
      />
      <BentoCard
        className="md:col-span-2 xl:col-span-1"
        figures={{ layout: "two-column-reversed" }}
        icon={CoffeeShopDiscoveryFeatures[3].icon}
        title={CoffeeShopDiscoveryFeatures[3].name}
        description={CoffeeShopDiscoveryFeatures[3].description}
      />
      <BentoCard
        figures={{ layout: "one-column" }}
        icon={CoffeeShopInformationFeatures[0].icon}
        title={CoffeeShopInformationFeatures[0].name}
        description={CoffeeShopInformationFeatures[0].description}
      />
      <BentoCard
        icon={CoffeeShopInformationFeatures[3].icon}
        title={CoffeeShopInformationFeatures[3].name}
        description={CoffeeShopInformationFeatures[3].description}
      />
    </BentoGrid>
  );
};
