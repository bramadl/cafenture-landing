import { type Module } from "./types";
import { CoffeeShopInformationFeatures } from "../features";
import { ModuleCoffeeShopInformationUrl } from "../menus";

export const CoffeeShopInformationModule: Module = {
  base: {
    description:
      "Modul Coffee Shop dirancang untuk memberikan pengguna akses mudah ke informasi tentang kedai kopi. Melalui modul ini, pengguna dapat menemukan kedai kopi, membaca dan memberikan ulasan, serta memahami berbagai penilaian mengenai kecocokan kedai tersebut dengan preferensi mereka.",
    label: ModuleCoffeeShopInformationUrl.label,
    slug: ModuleCoffeeShopInformationUrl.url,
    title: (
      <>
        Akses Informasi dan Profil{" "}
        <span className="text-primary">Kedai Kopi</span> Terlengkap dan Terbaru.
      </>
    ),
  },
  features: CoffeeShopInformationFeatures,
  seo: {
    title: "Tentang Platform: Module Coffee Shop Information",
    description:
      "Temukan informasi terlengkap hingga ulasan terbaru dan jelajahi kecocokan kedai kopi dengan preferensi Anda.",
  },
};
