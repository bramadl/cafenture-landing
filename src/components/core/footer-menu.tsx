import {
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import {
  CafentureMembershipUrl,
  CafentureMerchantUrl,
  CafentureSpotlightsUrl,
  CafentureStoryUrl,
  EmailContactUrl,
  InstagramUrl,
  ModuleAccountManagementUrl,
  ModuleCoffeeShopDiscoveryUrl,
  ModuleCoffeeShopInformationUrl,
  UserFaqUrl,
  UserPrivacyUrl,
  UserSupportUrl,
  WhatsAppContactUrl,
} from "../../content/menus";

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
];

export const FooterMenu = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
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
      <ul className="flex flex-col gap-6">
        <li className="font-semibold text-lg">Hubungi Kami</li>
        <li>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                className="inline-flex items-center gap-2 text-secondary hover:text-black transition"
                href={WhatsAppContactUrl.url}
                target="_blank"
              >
                <WhatsappLogo className="size-5" />
                {WhatsAppContactUrl.label}
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-2 text-secondary hover:text-black transition"
                href={EmailContactUrl.url}
                target="_blank"
              >
                <EnvelopeSimple className="size-5" />
                {EmailContactUrl.label}
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-2 text-secondary hover:text-black transition"
                href={InstagramUrl.url}
                target="_blank"
              >
                <InstagramLogo className="size-5" />
                {InstagramUrl.label}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};