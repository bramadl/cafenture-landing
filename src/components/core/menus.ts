export interface MenuUrl {
  external?: boolean;
  description: string;
  label: string;
  url: string;
}

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
    "Baca tulisan kami yang menawarkan cerita, pengalaman, dan pelajaran.",
};

export const CafentureMembershipUrl: MenuUrl = {
  url: "/platforms/memberships",
  label: "Cafenture Memberships",
  description: "",
};

export const ModuleAccountManagementUrl: MenuUrl = {
  url: "/modules/account-management",
  label: "Account Management",
  description: "",
};

export const ModuleCoffeeShopDiscoveryUrl: MenuUrl = {
  url: "/modules/coffee-shop-discovery",
  label: "Coffee Shop Discovery",
  description: "",
};

export const ModuleCoffeeShopInformationUrl: MenuUrl = {
  url: "/modules/coffee-shop-information",
  label: "Coffee Shop Profile",
  description: "",
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
