"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@cafenture/lib/utils";

import { Button } from "../ui/button";
import {
  NavigationMenu as NavigationMenuUi,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

const platform = {
  modules: [
    {
      name: "Pengelolaan Akun",
      features: [
        {
          name: "Pengaturan Keamanan",
          description:
            "Dapatkan informasi terlengkap mengenai promosi kedai kopi  yang terbaru dan terpercaya.",
        },
        {
          name: "Pengaturan Pemberitahuan",
          description:
            "Dapatkan beberapa pilihan kedai kopi dihimpun berdasarkan tema tertentu yang menyesuaikan preferensi.",
        },
        {
          name: "Pengaturan Profil",
          description:
            "Dapatkan kemudahan dalam pengalaman pencarian kedai kopi yang divisualisasikan dalam bentuk peta.",
        },
        {
          name: "Wishlist dan Koleksi",
          description:
            "Dapatkan rekomendasi kedai kopi yang disesuaikan secara elegan, berdasarkan preferensi Anda.",
        },
        {
          name: "Poin dan Hadiah",
          description:
            "Dapatkan koleksi kedai kopi yang dibentuk oleh komunitas sebagai referensi tempat terbaik.",
        },
        {
          name: "Pengaturan Preferensi",
          description:
            "Dapatkan kemudahan dalam pencarian kedai kopi menggunakan bahasa natural yang didukung AI.",
        },
      ],
    },
    {
      name: "Penjelajahan Kedai Kopi",
      features: [
        {
          name: "Informasi Promosi",
          description:
            "Dapatkan informasi terlengkap mengenai promosi kedai kopi  yang terbaru dan terpercaya.",
        },
        {
          name: "Mesin Rekomendasi",
          description:
            "Dapatkan rekomendasi kedai kopi yang disesuaikan secara elegan, berdasarkan preferensi Anda.",
        },
        {
          name: "Kurasi Cerdas",
          description:
            "Dapatkan beberapa pilihan kedai kopi dihimpun berdasarkan tema tertentu yang menyesuaikan preferensi.",
        },
        {
          name: "Mesin Peta",
          description:
            "Dapatkan kemudahan dalam pengalaman pencarian kedai kopi yang divisualisasikan dalam bentuk peta.",
        },
        {
          name: "Jelajahi Koleksi",
          description:
            "Dapatkan koleksi kedai kopi yang dibentuk oleh komunitas sebagai referensi tempat terbaik.",
        },
        {
          name: "Mesin Pencarian",
          description:
            "Dapatkan kemudahan dalam pencarian kedai kopi menggunakan bahasa natural yang didukung AI.",
        },
      ],
    },
    {
      name: "Informasi Kedai Kopi",
      features: [
        {
          url: "",
          name: "Nilai Pencocokan Cerdas",
          description:
            "Dapatkan informasi terlengkap mengenai promosi kedai kopi  yang terbaru dan terpercaya.",
        },
        {
          url: "",
          name: "Tema dan Fasilitas",
          description:
            "Dapatkan rekomendasi kedai kopi yang disesuaikan secara elegan, berdasarkan preferensi Anda.",
        },
        {
          url: "",
          name: "Informasi Esensial",
          description:
            "Dapatkan beberapa pilihan kedai kopi dihimpun berdasarkan tema tertentu yang menyesuaikan preferensi.",
        },
        {
          url: "",
          name: "Penawaran dan Promosi",
          description:
            "Dapatkan kemudahan dalam pengalaman pencarian kedai kopi yang divisualisasikan dalam bentuk peta.",
        },
        {
          url: "",
          name: "Peta dan Navigasi",
          description:
            "Dapatkan koleksi kedai kopi yang dibentuk oleh komunitas sebagai referensi tempat terbaik.",
        },
        {
          url: "",
          name: "Ulasan Kedai Kopi",
          description:
            "Dapatkan kemudahan dalam pencarian kedai kopi menggunakan bahasa natural yang didukung AI.",
        },
      ],
    },
  ],
  memberships: [
    {
      url: "/memberships",
      benefit: "Keuntungan Anggota",
    },
    {
      url: "/memberships/plans",
      benefit: "Memulai Keanggotaan",
    },
  ],
};

export const NavigationMenu = () => {
  const [selectedMenu, setSelectedMenu] = React.useState<number>(0);
  const showModule = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <NavigationMenuUi className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Beranda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="lg:w-[600px] grid lg:grid-cols-[250px_1fr] gap-6 p-6">
              <li className="row-span-3 bg-slate-200 rounded-lg"></li>
              <ListItem href="/about-us" title="Mengenal Cafenture">
                Pelajari misi kami, visi, dan bagaimana kami merancang platform
                kami.
              </ListItem>
              <ListItem href="#" title="Cafenture Merchants">
                Daftarkan kedai kopi Anda dan jadilah bagian dari partner kami.
              </ListItem>
              <ListItem href="#" title="Cafenture Spotlights">
                Baca tulisan kami yang menawarkan cerita, pengalaman, dan
                pelajaran.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tentang Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="lg:w-[768px] xl:w-[960px] grid lg:grid-cols-[250px_1px_1fr] gap-6 p-6">
              <li className="my-3 flex flex-col">
                <ul className="w-full flex-1 flex flex-col justify-between gap-6">
                  <li className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-sm">Modul Utama</p>
                      <ul className="flex flex-col gap-0">
                        {platform.modules.map((module, key) => (
                          <li key={key}>
                            <Button
                              className={cn(
                                "w-full justify-start text-left hover:bg-slate-100 text-slate-500 hover:text-slate-500",
                                selectedMenu === key && "bg-slate-50"
                              )}
                              variant="ghost"
                              onMouseEnter={() => showModule(key)}
                            >
                              {module.name}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-sm">
                        Keanggotaan Membership
                      </p>
                      <ul className="flex flex-col gap-0">
                        {platform.memberships.map((membership, key) => (
                          <li key={key}>
                            <Button
                              asChild
                              className="w-full justify-start text-left hover:bg-slate-100 text-slate-500 hover:text-slate-500"
                              variant="ghost"
                            >
                              <Link href={membership.url}>
                                {membership.benefit}
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Button
                      className="text-primary w-full justify-start"
                      size="sm"
                      variant="ghost"
                    >
                      Panduan dan Dukungan Teknis
                    </Button>
                  </li>
                </ul>
              </li>
              <li className="my-3">
                <Separator orientation="vertical" />
              </li>
              <li>
                <ul className="grid grid-cols-2 gap-6">
                  {platform.modules[selectedMenu].features.map(
                    (feature, key) => (
                      <ListItem key={key} href="#" title={feature.name}>
                        {feature.description}
                      </ListItem>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref target="_blank">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pusat Dukungan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuUi>
  );
};

const ListItem = React.forwardRef<
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
