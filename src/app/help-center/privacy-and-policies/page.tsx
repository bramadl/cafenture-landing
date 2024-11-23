import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";
import { getPrivacyAndPolicy } from "@cafenture/content/remotes/privacy-and-policy";

import { HelpCenterSubMenu } from "../_/help-center-submenu";
import { HeroSection } from "../_/hero-section";
import { WithLd } from "@cafenture/components/core/with-ld";
import { WebPage } from "schema-dts";
import { baseLd, baseUrl } from "@cafenture/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/help-center/privacy-and-policies`,
  },
  description:
    "Halaman ini menjelaskan bagaimana Cafenture Indonesia melindungi privasi Anda, termasuk pengumpulan, penggunaan, dan penyimpanan data pribadi Anda.",
  title: "Kebijakan dan Privasi Akun Pengguna",
};

export default async function Page() {
  const content = await getPrivacyAndPolicy();

  return (
    <WithLd<WebPage>
      jsonLd={({ baseUrl }) => ({
        ...baseLd,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: `${baseUrl}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pusat Dukungan",
              item: `${baseUrl}/help-center`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Kebijakan dan Privasi",
              item: `${baseUrl}/help-center/privacy-and-policies`,
            },
          ],
        },
        name: "Kebijakan dan Privasi Akun Pengguna | Cafenture Indonesia",
        description:
          "Halaman ini menjelaskan bagaimana Cafenture Indonesia melindungi privasi Anda, termasuk pengumpulan, penggunaan, dan penyimpanan data pribadi Anda.",
        mainEntityOfPage: `${baseUrl}/help-center/privacy-and-policies`,
        url: `${baseUrl}/help-center/privacy-and-policies`,
      })}
    >
      <HeroSection
        label="Kebijakan dan Privasi"
        description="Pahami bagaimana kami melindungi privasi Anda, termasuk pengumpulan, penggunaan, dan penyimpanan data pribadi Anda."
      >
        Memahami Lebih Dalam tentang Kebijakan dan Privasi{" "}
        <span className="text-primary">Cafenture Indonesia</span>
      </HeroSection>
      <Section
        id="article"
        className="xl:flex-row xl:justify-start sm:gap-0 xl:gap-[100px]"
      >
        <PinnedSection>
          <HelpCenterSubMenu menus={content.tableOfContent} />
        </PinnedSection>
        <Blog className="xl:first:mt-0 mt-12 lg:mt-16 xl:mt-0">
          {content.content.html}
        </Blog>
      </Section>
    </WithLd>
  );
}
