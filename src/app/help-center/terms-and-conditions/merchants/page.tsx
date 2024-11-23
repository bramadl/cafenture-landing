import { type Metadata } from "next";
import { type WebPage } from "schema-dts";

import { Blog } from "@cafenture/components/core/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@cafenture/components/ui/breadcrumb";
import { HomeUrl, UserTermsAndConditionsUrl } from "@cafenture/content/menus";
import { Section } from "@cafenture/components/core/section";
import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd, baseUrl } from "@cafenture/lib/seo";
import { getTermsAndCondition } from "@cafenture/content/remotes/terms-and-conditions";

export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/help-center/terms-and-conditions/merchants`,
  },
  description:
    "Sebagai mitra platform, pastikan Anda memahami hak dan kewajiban Anda saat menggunakan layanan kami.",
  title: "Syarat dan Ketentuan: Mitra Platform",
};

export default async function Page() {
  const { content } = await getTermsAndCondition("forMerchants");

  return (
    <WithLd<WebPage>
      className="pt-[100px]"
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
              name: "Syarat dan Ketentuan",
              item: `${baseUrl}/help-center/terms-and-conditions`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Syarat dan Ketentuan: Mitra",
              item: `${baseUrl}/help-center/terms-and-conditions/merchants`,
            },
          ],
        },
        name: "Syarat dan Ketentuan: Mitra Platform | Cafenture Indonesia",
        description:
          "Sebagai mitra platform, pastikan Anda memahami hak dan kewajiban Anda saat menggunakan layanan kami.",
        mainEntityOfPage: `${baseUrl}/help-center/terms-and-conditions/merchants`,
        url: `${baseUrl}/help-center/terms-and-conditions/merchants`,
      })}
    >
      <Section id="article" className="gap-0 sm:gap-0 xl:max-w-[768px] mx-auto">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={HomeUrl.url}>
                {HomeUrl.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={UserTermsAndConditionsUrl.url}>
                {UserTermsAndConditionsUrl.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Untuk Mitra</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Blog>{content.html}</Blog>
      </Section>
    </WithLd>
  );
}
