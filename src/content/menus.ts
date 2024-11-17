export interface MenuUrl {
  external?: boolean;
  description: string;
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

export const HelpCenterUrl: MenuUrl = {
  url: "/help-center",
  label: "Pusat Dukungan",
  description: "",
};

export const UserPrivacyUrl: MenuUrl = {
  url: "/help-center/user-privacies",
  label: "Kebijakan Pengguna",
  description: "",
  external: true,
};

export const UserFaqUrl: MenuUrl = {
  url: "/help-center/user-faqs",
  label: "Pertanyaan Pengguna",
  description: "",
  external: true,
};

export const UserSupportUrl: MenuUrl = {
  url: "/help-center/user-supports",
  label: "Dukungan Pengguna",
  description: "",
  external: true,
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
  url: "#",
  label: "cafenture.indonesia",
  description: "",
  external: true,
};
