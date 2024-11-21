"use client";

import { ArrowRight, List } from "@phosphor-icons/react";
import { useState } from "react";
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
  HomeUrl,
  ModuleAccountManagementUrl,
  ModuleCoffeeShopDiscoveryUrl,
  ModuleCoffeeShopInformationUrl,
  UserPrivacyAndPoliciesUrl,
  UserQuestionsUrl,
  UserTermsAndConditionsUrl,
} from "@cafenture/content/menus";

// import { Button } from "../ui/button";
import { JoinWaitlist } from "./join-waitlist";

export const MobileNavigationMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
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
              className="inline-flex items-center gap-4 font-semibold text-lg"
              href={HomeUrl.url}
              onClick={closeDrawer}
            >
              <ArrowRight />
              {HomeUrl.label}
            </Link>
          </li>
          <li className="flex flex-col gap-4">
            <p className="inline-flex items-center gap-4 font-semibold text-lg">
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
                      className="inline-flex items-center gap-4 text-base after:absolute after:inset-0"
                      href={link.url}
                      onClick={closeDrawer}
                    >
                      <ArrowRight />
                      {link.label}
                    </Link>
                    <p className="text-secondary text-sm">{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col gap-4">
            <p className="inline-flex items-center gap-4 font-semibold text-lg">
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
                      className="inline-flex items-center gap-4 text-base after:absolute after:inset-0"
                      href={link.url}
                      onClick={closeDrawer}
                    >
                      <ArrowRight />
                      {link.label}
                    </Link>
                    <p className="text-secondary text-sm">{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col gap-4">
            <p className="inline-flex items-center gap-4 font-semibold text-lg">
              Pusat Dukungan
            </p>
            <ul className="flex flex-col gap-6">
              {[
                UserQuestionsUrl,
                UserPrivacyAndPoliciesUrl,
                UserTermsAndConditionsUrl,
              ].map((link, key) => (
                <li key={key}>
                  <div className="relative flex flex-col gap-2">
                    <Link
                      className="inline-flex items-center gap-4 text-base after:absolute after:inset-0"
                      href={link.url}
                      onClick={closeDrawer}
                    >
                      <ArrowRight />
                      {link.label}
                    </Link>
                    <p className="text-secondary text-sm">{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex items-center gap-4 p-6 border-t">
          <JoinWaitlist />
          {/* <Button className="flex-1">Buka Aplikasi</Button>
          <Button className="flex-1" variant="outline">
            Daftar Sekarang
          </Button> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
