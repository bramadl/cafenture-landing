import { Icon } from "@phosphor-icons/react";
import {
  FileText,
  Question,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export interface MenuUrl {
  external?: boolean;
  description: string;
  icon?: Icon;
  label: string;
  url: string;
}

export const HomeUrl: MenuUrl = {
  url: "/",
  label: "Beranda",
  description: "",
};

export const CafentureStoryUrl: MenuUrl = {
  url: "/stories",
  label: "Mengenal Cafenture",
  description:
    "Pelajari misi, visi, dan bagaimana kami merancang platform kami.",
};

export const CafentureMerchantUrl: MenuUrl = {
  url: "/platforms/merchants",
  label: "Cafenture Merchants",
  description:
    "Daftarkan kedai kopi Anda dan jadilah bagian dari partner kami.",
};

export const CafentureSpotlightsUrl: MenuUrl = {
  url: "/platforms/spotlights",
  label: "Cafenture Spotlights",
  description:
    "Baca tulisan tim kami yang menawarkan cerita, pengalaman, dan pembelajaran.",
};

export const CafenturePlatformUrl: MenuUrl = {
  url: "#",
  label: "Cafenture Platform",
  description:
    "Baca tulisan tim kami yang menawarkan cerita, pengalaman, dan pembelajaran.",
  external: true,
};

export const CafentureMembershipUrl: MenuUrl = {
  url: "/platforms/memberships",
  label: "Cafenture Memberships",
  description: "Lebih dalam mengenal keuntungan dari keanggotaan Cafenture",
};

export const ModuleAccountManagementUrl: MenuUrl = {
  url: "/modules/account-management",
  label: "Account Management",
  description:
    "Modul pengelolaan akun yang mengontrol personalisasi dan rekomendasi.",
};

export const ModuleCoffeeShopDiscoveryUrl: MenuUrl = {
  url: "/modules/coffee-shop-discovery",
  label: "Coffee Shop Discovery",
  description: "Modul penjelajahan kedai kopi yang didukung teknologi terkini.",
};

export const ModuleCoffeeShopInformationUrl: MenuUrl = {
  url: "/modules/coffee-shop-information",
  label: "Coffee Shop Information",
  description:
    "Modul informasi kedai kopi yang memiliki data dan informasi terlengkap.",
};

export const UserPrivacyAndPoliciesUrl: MenuUrl = {
  icon: FileText,
  url: "/help-center/privacy-and-policies",
  label: "Kebijakan dan Privasi",
  description: "Komitmen kami terhadap privasi dan perlindungan data Anda.",
};

export const UserQuestionsUrl: MenuUrl = {
  icon: Question,
  url: "/help-center/frequently-asked-questions",
  label: "Pertanyaan Pengguna",
  description: "Jawaban atas pertanyaan umum yang sering diajukan.",
};

export const UserTermsAndConditionsUrl: MenuUrl = {
  icon: ShieldCheck,
  url: "/help-center/terms-and-conditions",
  label: "Syarat dan Ketentuan",
  description: "Ketentuan dan peraturan yang berlaku untuk penggunaan layanan.",
};

export const EmailContactUrl: MenuUrl = {
  url: "mailto:cs@cafenture.com",
  label: "cs@cafenture.com",
  description: "",
  external: true,
};

export const WhatsAppContactUrl: MenuUrl = {
  url: "https://wa.me/6285216388926",
  label: "+62 852 1638 8926",
  description: "",
  external: true,
};

export const InstagramUrl: MenuUrl = {
  url: "https://instagram.com/cafenture.indonesia",
  label: "cafenture.indonesia",
  description: "",
  external: true,
};

export const TiktokUrl: MenuUrl = {
  url: "https://tiktok.com/cafenture.indonesia",
  label: "cafenture.indonesia",
  description: "",
  external: true,
};
