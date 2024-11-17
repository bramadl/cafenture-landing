import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";

import { HelpCenterSubMenu } from "./_/help-center-submenu";
import { HeroSection } from "./_/hero-section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <HeroSection />
      <Section id="article" className="xl:flex-row xl:justify-start">
        <PinnedSection>
          <HelpCenterSubMenu />
        </PinnedSection>
        {children}
      </Section>
    </main>
  );
}
