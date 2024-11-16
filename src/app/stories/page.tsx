import { Metadata } from "next";

import { BackgroundStories } from "./_/background-stories";
import { CallToActionSection } from "../(home)/_/cta-section";
import { BackgroundSection } from "./_/background-section";
import { HeroSection } from "./_/hero-section";
import { MarketBeams } from "./_/market-beams";
import { ReachabilitySection } from "./_/reachability-section";
import { SolutionsList } from "./_/solutions-list";
import { SolutionsSection } from "./_/solutions-section";

export const metadata: Metadata = {
  title: "Mengenal Lebih Dalam Platform Kami",
  description:
    "Pelajari latar belakang dan cara kami merancang platform pencarian serta rekomendasi kedai kopi pertama di Indonesia",
  alternates: {
    canonical: process.env.__NEXT_PRIVATE_ORIGIN + "/stories",
  },
};

export default function Page() {
  return (
    <main>
      <HeroSection>
        <MarketBeams />
      </HeroSection>
      <BackgroundSection>
        <BackgroundStories />
      </BackgroundSection>
      <SolutionsSection>
        <SolutionsList />
      </SolutionsSection>
      <ReachabilitySection />
      <CallToActionSection />
    </main>
  );
}
