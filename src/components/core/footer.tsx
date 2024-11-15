import Link from "next/link";

import { FooterMenu } from "./footer-menu";
import { Logo } from "../ui/logo";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col px-6 sm:px-8 lg:px-16 pb-16">
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-16">
        <div className="flex items-center justify-center gap-4">
          <Link aria-label="Buka Halaman Beranda" href="/">
            <Logo className="w-12 h-12 lg:w-16 lg:h-16" />
          </Link>
        </div>
        <FooterMenu />
      </div>
      <div className="flex flex-col gap-16 lg:gap-10 mt-16 lg:mt-[100px]">
        <Separator />
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-secondary text-sm">
            ©2024 PT ABV Digital. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
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