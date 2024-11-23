import { type Module } from "./types";
import { CoffeeShopDiscoveryFeatures } from "../features";
import { ModuleCoffeeShopDiscoveryUrl } from "../menus";

export const CoffeeShopDiscoveryModule: Module = {
  base: {
    description:
      "Modul penjelajahan kedai kopi memungkinkan pengguna untuk menemukan berbagai kedai kopi, dan promosi dengan fitur eksplorasi yang dirancang untuk mempermudah pencarian, meningkatkan keterlibatan, dan memberikan rekomendasi personal.",
    label: ModuleCoffeeShopDiscoveryUrl.label,
    slug: ModuleCoffeeShopDiscoveryUrl.url,
    title: (
      <>
        Jelajahi Ribuan <span className="text-primary">Kedai Kopi</span> yang
        Dikurasi dan Direkomendasi Secara Personal
      </>
    ),
  },
  features: CoffeeShopDiscoveryFeatures,
  seo: {
    title: "Tentang Platform: Module Coffee Shop Discovery",
    description:
      "Fitur eksplorasi terlengkap yang memudahkan pencarian dan memberikan rekomendasi kedai kopi personal sesuai preferensi Anda.",
  },
};
