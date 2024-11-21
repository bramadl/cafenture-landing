import { JoinWaitlist } from "@cafenture/components/core/join-waitlist";
import { Section } from "@cafenture/components/core/section";
// import { Button } from "@cafenture/components/ui/button";
import { Tag } from "@cafenture/components/ui/tag";
import { Trophy } from "@phosphor-icons/react/dist/ssr";

export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section
      id="hero-section"
      className="pt-[100px] min-h-screen justify-between overflow-hidden"
    >
      <Section.Header className="md:flex-1 pt-20 sm:pt-24">
        <Tag className="gap-2 sm:gap-3 sm:pr-4">
          <Trophy className="text-warning size-6" weight="fill" />
          <span>
            Platform rekomendasi kedai kopi{" "}
            <span className="hidden sm:inline-block">terlengkap</span>{" "}
            <span className="sm:hidden">#1</span>
          </span>
        </Tag>
        <Section.Title as="h1">
          Dirancang Untuk Memudahkan Anda Menemukan{" "}
          <span className="text-primary">Kedai Kopi</span> yang Sempurna
        </Section.Title>
        <Section.Caption>
          Cafenture adalah platform terlengkap dan terdepan untuk para pencinta
          kedai kopi yang mencari lebih dari secangkir kopi. Kami menemani Anda
          dari pengalaman menjelajah hingga rekomendasi personal
        </Section.Caption>
        <div className="flex lg:hidden items-center gap-4 mt-6">
          <JoinWaitlist />
          {/* <Button>Buka Aplikasi</Button> */}
          {/* <Button variant="outline">Daftar Sekarang</Button> */}
        </div>
      </Section.Header>
      {children}
    </Section>
  );
};
