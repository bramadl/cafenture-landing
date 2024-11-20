import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";
import { getPrivacyAndPolicy } from "@cafenture/content/remotes/privacy-and-policy";

import { HelpCenterSubMenu } from "../_/help-center-submenu";
import { HeroSection } from "../_/hero-section";

export default async function Page() {
  const content = await getPrivacyAndPolicy();

  return (
    <main>
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
        <Blog className="xl:first:mt-0 mt-12 lg:mt-16 xl:mt-0">{content.content.html}</Blog>
      </Section>
    </main>
  );
}
