import { BackgroundStories } from "./_/background-stories";
import { CallToActionSection } from "../(home)/_/cta-section";
import { BackgroundSection } from "./_/background-section";
import { HeroSection } from "./_/hero-section";
import { MarketBeams } from "./_/market-beams";
import { ReachabilitySection } from "./_/reachability-section";
import { SolutionsList } from "./_/solutions-list";
import { SolutionsSection } from "./_/solutions-section";

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
