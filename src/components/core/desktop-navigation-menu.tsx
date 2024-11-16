"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { forwardRef, useState } from "react";
import Link from "next/link";

import {
  AccountManagementFeatures,
  CoffeeShopDiscoveryFeatures,
  CoffeeShopInformationFeatures,
} from "@cafenture/content/features";
import { cn } from "@cafenture/lib/utils";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

import {
  CafentureMembershipUrl,
  CafentureMerchantUrl,
  CafentureSpotlightsUrl,
  CafentureStoryUrl,
  HelpCenterUrl,
  HomeUrl,
  ModuleAccountManagementUrl,
  ModuleCoffeeShopDiscoveryUrl,
  ModuleCoffeeShopInformationUrl,
} from "../../content/menus";
import { WavyLines } from "../svg/wavy-lines";
import { Logo } from "../ui/logo";

const menus = [
  {
    ...ModuleAccountManagementUrl,
    features: AccountManagementFeatures,
  },
  {
    ...ModuleCoffeeShopDiscoveryUrl,
    features: CoffeeShopDiscoveryFeatures,
  },
  {
    ...ModuleCoffeeShopInformationUrl,
    features: CoffeeShopInformationFeatures,
  },
];

export const DesktopNavigationMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const showModule = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={HomeUrl.url} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {HomeUrl.label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[600px] grid grid-cols-[240px_1fr] gap-4 p-6">
              <li className="relative row-span-3 flex flex-col justify-between p-6 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg">
                <Logo className="size-16" type="light" />
                <article>
                  <p className="font-semibold text-lg text-white">
                    Cafenture Indonesia
                  </p>
                  <p className="text-sm text-white/75">
                    Platform Rekomendasi Kedai Kopi Pertama di Indonesia
                  </p>
                  <small className="inline-block mt-8 text-white text-xs">
                    Produk PT ABV Digital Indonesia
                  </small>
                </article>
                <WavyLines className="absolute inset-0 pointer-events-none rotate-90 scale-[2]" />
              </li>
              {[
                CafentureStoryUrl,
                CafentureMerchantUrl,
                CafentureSpotlightsUrl,
              ].map((link, key) => (
                <ListItem key={key} href={link.url} title={link.label}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tentang Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[860px] grid grid-cols-[240px_1px_1fr] gap-4 p-6">
              <li className="my-3 flex flex-col">
                <ul className="w-full flex-1 flex flex-col justify-between gap-6">
                  <li className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="font-medium text-sm">Modul Utama</p>
                      <ul className="flex flex-col gap-2">
                        {menus.map((menu, key) => (
                          <li key={key}>
                            <Button
                              asChild
                              className={cn(
                                "group w-full justify-start hover:bg-slate-100 text-slate-500 hover:text-slate-500",
                                selectedMenu === key && "bg-slate-50"
                              )}
                              onMouseEnter={() => showModule(key)}
                              size="sm"
                              variant="ghost"
                            >
                              <Link href={menu.url}>
                                <ArrowRight className="mr-1 group-hover:mr-2 transition-[margin] size-4" />
                                {menu.label}
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Button
                      asChild
                      className="group w-full justify-start text-primary"
                      size="sm"
                      variant="ghost"
                    >
                      <Link href={CafentureMembershipUrl.url}>
                        <ArrowRight className="mr-1 group-hover:mr-2 transition-[margin] size-4" />
                        {CafentureMembershipUrl.label}
                      </Link>
                    </Button>
                  </li>
                </ul>
              </li>
              <li className="my-3">
                <Separator orientation="vertical" />
              </li>
              <li>
                <ul className="grid grid-cols-2 gap-4">
                  {menus[selectedMenu].features.map((feature, key) => (
                    <li
                      key={key}
                      className="flex flex-col gap-2 p-3 rounded-md"
                    >
                      <p className="text-sm font-medium">{feature.name}</p>
                      <p className="line-clamp-3 text-sm text-secondary">
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={HelpCenterUrl.url} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {HelpCenterUrl.label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col gap-2 p-3 rounded-md select-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50",
            className
          )}
          {...props}
        >
          <p className="text-sm font-medium">{title}</p>
          <p className="line-clamp-3 text-sm text-secondary">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
