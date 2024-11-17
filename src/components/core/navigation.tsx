import Link from "next/link";

import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { DesktopNavigationMenu } from "./desktop-navigation-menu";
import { MobileNavigationMenu } from "./mobile-navigation-menu";

export const Navigation = () => {
  return (
    <div id="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur shadow flex items-end lg:items-center h-[100px]">
      <nav className="container mx-auto flex items-center justify-between p-6 lg:py-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-center gap-4">
          <Link aria-label="Buka Halaman Beranda" href="/">
            <Logo className="w-12 h-12" />
          </Link>
        </div>
        <div className="flex-1 hidden lg:flex items-center justify-center gap-4">
          <DesktopNavigationMenu />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button className="hidden lg:flex">Buka Aplikasi</Button>
          <MobileNavigationMenu />
        </div>
      </nav>
    </div>
  );
};
