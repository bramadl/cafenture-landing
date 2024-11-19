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
import { getTermsAndCondition } from "@cafenture/content/remotes/terms-and-conditions";

export default async function Page() {
  const { content } = await getTermsAndCondition("forMerchants");

  return (
    <main className="pt-[100px]">
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
    </main>
  );
}
