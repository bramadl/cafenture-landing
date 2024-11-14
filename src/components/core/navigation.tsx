import Link from "next/link";

import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { NavigationMenu } from "./navigation-menu";

export const Navigation = () => {
  return (
    <nav className="pt-16 px-0 flex items-end">
      <div className="container mx-auto flex items-center md:px-16 xl:px-0">
        <div className="flex items-center justify-center gap-4">
          <Link aria-label="Buka Halaman Beranda" href="/">
            <Logo className="w-12 h-12" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <NavigationMenu />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button>Buka Aplikasi</Button>
        </div>
      </div>
    </nav>
  );
};
