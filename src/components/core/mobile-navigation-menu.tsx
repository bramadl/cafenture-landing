"use client";

import { ArrowRight, List } from "@phosphor-icons/react";
import Link from "next/link";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@cafenture/components/ui/drawer";
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
} from "@cafenture/content/menus";
import { Button } from "../ui/button";

export const MobileNavigationMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger
        asChild
        className="lg:hidden w-12 h-12 flex items-center justify-center outline-none"
      >
        <button aria-label="Open Navigation Menu">
          <List className="size-8" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90%]">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Navigate through the site using the links below
          </DrawerDescription>
        </DrawerHeader>
        <ul
          data-lenis-prevent
          className="w-full h-full flex flex-col justify-between gap-8 p-6 overflow-y-auto"
        >
          <li className="flex flex-col gap-4">
            <Link
              className="inline-flex items-center gap-4 font-semibold text-xl"
              href={HomeUrl.url}
            >
              <ArrowRight />
              {HomeUrl.label}
            </Link>
          </li>
          <li className="flex flex-col gap-4">
            <p className="inline-flex items-center gap-4 font-semibold text-xl">
              Tentang Kami
            </p>
            <ul className="flex flex-col gap-6">
              {[
                CafentureStoryUrl,
                CafentureMerchantUrl,
                CafentureSpotlightsUrl,
              ].map((link, key) => (
                <li key={key}>
                  <div className="relative flex flex-col gap-2">
                    <Link
                      className="inline-flex items-center gap-4 text-lg after:absolute after:inset-0"
                      href={link.url}
                    >
                      <ArrowRight />
                      {link.label}
                    </Link>
                    <p className="text-secondary">{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col gap-4">
            <p className="inline-flex items-center gap-4 font-semibold text-xl">
              Tentang Platform
            </p>
            <ul className="flex flex-col gap-6">
              {[
                ModuleAccountManagementUrl,
                ModuleCoffeeShopDiscoveryUrl,
                ModuleCoffeeShopInformationUrl,
                CafentureMembershipUrl,
              ].map((link, key) => (
                <li key={key}>
                  <div className="relative flex flex-col gap-2">
                    <Link
                      className="inline-flex items-center gap-4 text-lg after:absolute after:inset-0"
                      href={link.url}
                    >
                      <ArrowRight />
                      {link.label}
                    </Link>
                    <p className="text-secondary">{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col gap-4">
            <Link
              className="inline-flex items-center gap-4 font-semibold text-xl"
              href={HelpCenterUrl.url}
            >
              <ArrowRight />
              {HelpCenterUrl.label}
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 p-6 border-t">
          <Button className="flex-1">Buka Aplikasi</Button>
          <Button className="flex-1" variant="outline">
            Daftar Sekarang
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};