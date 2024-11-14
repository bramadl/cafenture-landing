import Link from "next/link";

import { Logo } from "../ui/logo";
import { Separator } from "../ui/separator";

const menus = [
  {
    label: "Tentang Kami",
    items: [
      {
        url: "/about-us",
        text: "Mengenal Cafenture",
      },
      {
        url: "#",
        text: "Cafenture Merchants",
      },
      {
        url: "#",
        text: "Cafenture Spotlights",
      },
    ],
  },
  {
    label: "Tentang Platform",
    items: [
      {
        url: "/platform",
        text: "Pelajari Fitur Lengkap",
      },
      {
        url: "/memberships",
        text: "Keuntungan Anggota",
      },
      {
        url: "/memberships/plans",
        text: "Memulai Keanggotaan",
      },
    ],
  },
  {
    label: "Pusat Dukungan",
    items: [
      {
        url: "#",
        text: "Kebijakan Pengguna",
      },
      {
        url: "#",
        text: "Pertanyaan Pengguna",
      },
      {
        url: "#",
        text: "Dukungan Pengguna",
      },
    ],
  },
  {
    label: "Hubungi Kami",
    items: [
      {
        url: "#",
        text: "cs@cafenture.com",
      },
      {
        url: "#",
        text: "+62 852 1638 8926",
      },
      {
        url: "#",
        text: "+62 812 8370 9830",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="xl:p-[100px] xl:pb-16 px-0 flex flex-col xl:gap-[100px]">
      <div className="container mx-auto flex items-start justify-between md:px-16 xl:px-0">
        <div className="flex items-center justify-center gap-4">
          <Link aria-label="Buka Halaman Beranda" href="/">
            <Logo className="xl:w-16 xl:h-16" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-16">
          {menus.map((menu) => (
            <ul key={menu.label} className="flex flex-col gap-6">
              <li className="font-semibold text-lg">{menu.label}</li>
              <li>
                <ul className="flex flex-col gap-4">
                  {menu.items.map((item) => (
                    <li key={item.text} className="text-secondary">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
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
