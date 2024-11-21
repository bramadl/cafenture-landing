import { Section } from "@cafenture/components/core/section";
import { TwoDevicesMockup } from "@cafenture/components/svg/app-mockups";
// import { Button } from "@cafenture/components/ui/button";
import { JoinWaitlist } from "./join-waitlist";

export const CallToActionSection = () => {
  return (
    <article className="bg-slate-50 mt-16 sm:mt-[100px]">
      <Section
        id="cta-section"
        className="flex-col-reverse lg:flex-row lg:justify-between overflow-hidden !py-0 gap-0 md:gap-0 lg:gap-[100px]"
      >
        <figure className="relative flex-1">
          <TwoDevicesMockup usePNG className="lg:absolute lg:bottom-0 lg:right-0 lg:max-w-[480px] w-full" />
        </figure>
        <section className="flex-1 flex flex-col gap-10 py-16 sm:py-[100px]">
          <header className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl lg:text-xl font-semibold">
              Platform rekomendasi kedai kopi: Dirancang khusus untuk
              menghadirkan pengalaman eksplorasi yang berkelas
            </h2>
            <p className="md:text-lg lg:text-base text-secondary">
              Temukan kedai kopi terbaik melalui platform rekomendasi eksklusif
              yang menyesuaikan preferensi.
            </p>
          </header>
          <footer className="flex items-center gap-4">
            <JoinWaitlist />
            {/* <Button>Buka Aplikasi</Button> */}
            {/* <Button variant="outline">Daftar Sekarang</Button> */}
          </footer>
        </section>
      </Section>
    </article>
  );
};
