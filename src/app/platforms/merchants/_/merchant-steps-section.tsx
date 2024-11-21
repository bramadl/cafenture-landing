import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

export const MerchantsStepsSection = () => {
  return (
    <Section id="steps-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Langkah Menjadi Mitra</Tag>
        <Section.Title className="lg:text-left">
          Tiga langkah Mudah Menjadi Mitra{" "}
          <span className="text-primary">Cafenture Indonesia</span>
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Proses sederhana kami memastikan Anda dapat segera bergabung dan
          memanfaatkan semua keuntungan menjadi mitra kami.
        </Section.Caption>
      </Section.Header>
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-32">
        <div className="relative flex flex-col md:items-center gap-6 md:max-w-[240px]">
          <div className="hidden md:block absolute top-4 left-[calc(50%+16px)] w-[calc(100%+128px-32px)] border-b border-neutral-200" />
          <div className="border border-neutral-300 w-8 h-8 flex items-center justify-center text-secondary text-sm font-semibold rounded-full">
            01
          </div>
          <p className="md:text-center text-secondary font-medium">
            Kunjungi dan Lengkapi Formulir Online{" "}
            <a
              className="text-primary"
              href="https://forms.gle/vKBA8RPiYVrMECwC6"
              target="_blank"
              rel="nofollow"
            >
              Di Sini
            </a>
          </p>
        </div>
        <div className="relative flex flex-col md:items-center gap-6 md:max-w-[240px]">
          <div className="hidden md:block absolute top-4 left-[calc(50%+16px)] w-[calc(100%+128px-32px)] border-b border-neutral-200" />
          <div className="border border-neutral-300 w-8 h-8 flex items-center justify-center text-secondary text-sm font-semibold rounded-full">
            02
          </div>
          <p className="md:text-center text-secondary font-medium">
            Tunggu Hasil Verifikasi dan Konfirmasi Tim Kami
          </p>
        </div>
        <div className="relative flex flex-col md:items-center gap-6 md:max-w-[240px]">
          <div className="border border-neutral-300 w-8 h-8 flex items-center justify-center text-secondary text-sm font-semibold rounded-full">
            03
          </div>
          <p className="md:text-center text-secondary font-medium">
            Anda Siap Menjadi Mitra Terpercaya Kami
          </p>
        </div>
      </div>
    </Section>
  );
};
