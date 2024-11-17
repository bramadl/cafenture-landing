import { type Module } from "./types";
import { AccountManagementFeatures } from "../features";
import { ModuleAccountManagementUrl } from "../menus";

export const AccountManagementModule: Module = {
  base: {
    description:
      "Modul pengelolaan akun dirancang agar pengguna dapat mengatur berbagai aspek dari akun mereka, termasuk pengaturan profil, preferensi, langganan, keamanan, notifikasi, hingga fitur loyalitas seperti poin dan hadiah.",
    label: ModuleAccountManagementUrl.label,
    slug: ModuleAccountManagementUrl.url,
    title: (
      <>
        Kontrol Penuh Terhadap Pencocokan dan Pengalaman Pencarian{" "}
        <span className="text-primary">Kedai Kopi</span>
      </>
    ),
  },
  features: AccountManagementFeatures,
  seo: {
    title: "Tentang Platform: Module Account Management",
    description:
      "Kelola berbagai aspek dari akun yang dapat mengontrol bagaimana hasil pencocokan, rekomendasi, dan pencarian menjadi lebih personal.",
  },
};
