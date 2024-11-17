import { Section } from "@cafenture/components/core/section";
import { NotFound as Illustration } from "@cafenture/components/svg/undraw/not-found";

export default function NotFound() {
  return (
    <Section id="module-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0">
        <Section.Title as="h1">
          Halaman yang Anda Cari Tidak Ditemukan
        </Section.Title>
        <Section.Caption>
          Mohon maaf, halaman yang Anda tuju tidak tersedia. <br /> Silahkan
          kembali ke beranda atau jelajahi halaman lain yang kami dalam situs
          kami.
        </Section.Caption>
      </Section.Header>
      <Illustration className="w-[50%] mx-auto" />
    </Section>
  );
}
