import Link from "next/link";
import {
  CafentureMembershipUrl,
  CafentureMerchantUrl,
  CafentureSpotlightsUrl,
  CafentureStoryUrl,
  EmailContactUrl,
  ModuleAccountManagementUrl,
  ModuleCoffeeShopDiscoveryUrl,
  ModuleCoffeeShopInformationUrl,
  UserFaqUrl,
  UserPrivacyUrl,
  UserSupportUrl,
  WhatsAppContactUrl,
} from "./menus";

const menus = [
  {
    label: "Tentang Kami",
    items: [CafentureStoryUrl, CafentureMerchantUrl, CafentureSpotlightsUrl],
  },
  {
    label: "Tentang Platform",
    items: [
      ModuleAccountManagementUrl,
      ModuleCoffeeShopDiscoveryUrl,
      ModuleCoffeeShopInformationUrl,
      CafentureMembershipUrl,
    ],
  },
  {
    label: "Pusat Dukungan",
    items: [UserPrivacyUrl, UserFaqUrl, UserSupportUrl],
  },
  {
    label: "Hubungi Kami",
    items: [EmailContactUrl, WhatsAppContactUrl],
  },
];

export const FooterMenu = () => {
  return (
    <div className="grid grid-cols-4 gap-16">
      {menus.map((menu) => (
        <ul key={menu.label} className="flex flex-col gap-6">
          <li className="font-semibold text-lg">{menu.label}</li>
          <li>
            <ul className="flex flex-col gap-4">
              {menu.items.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-secondary hover:text-black transition"
                    href={item.url}
                    target={item.external ? "_blank" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};
