import Link from "next/link";

import { FooterMenu } from "./footer-menu";
import { Logo } from "../ui/logo";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="xl:p-[100px] xl:pb-16 px-0 flex flex-col xl:gap-[100px]">
      <div className="container mx-auto flex items-start justify-between md:px-16 xl:px-0">
        <div className="flex items-center justify-center gap-4">
          <Link aria-label="Buka Halaman Beranda" href="/">
            <Logo className="xl:w-16 xl:h-16" />
          </Link>
        </div>
        <FooterMenu />
      </div>
      <div className="container mx-auto flex flex-col xl:gap-9 md:px-16 xl:px-0">
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-secondary text-sm">
            ©2024 PT ABV Digital. All rights reserved.
          </p>
          <ul className="flex items-center xl:gap-6">
            <li>
              <Link className="text-secondary text-sm" href="#">
                Situs Peta
              </Link>
            </li>
            <li>
              <Link className="text-secondary text-sm" href="#">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link className="text-secondary text-sm" href="#">
                Syarat Ketentuan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
