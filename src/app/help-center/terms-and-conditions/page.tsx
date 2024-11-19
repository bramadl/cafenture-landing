import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import Link from "next/link";

import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";
import { Section } from "@cafenture/components/core/section";

import { HelpCenterSubMenu } from "../_/help-center-submenu";
import { HeroSection } from "../_/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection
        label="Syarat dan Ketentuan"
        description="Pelajari syarat dan ketentuan penggunaan platform kami, termasuk panduan penggunaan, hak dan kewajiban pengguna, serta kebijakan yang berlaku."
      >
        Syarat dan Ketentuan Penggunaan Platform{" "}
        <span className="text-primary">Cafenture Indonesia</span>
      </HeroSection>
      <Section
        id="article"
        className="xl:flex-row xl:justify-start sm:gap-0 xl:gap-[100px]"
      >
        <PinnedSection>
          <HelpCenterSubMenu
            menus={[
              {
                id: "untuk-pengguna",
                label: "Untuk Pencari Kedai Kopi (Pengguna)",
              },
              { id: "untuk-mitra", label: "Untuk Pemilik Kedai Kopi (Mitra)" },
            ]}
          />
        </PinnedSection>
        <Blog className="xl:first:mt-0 mt-12 lg:mt-16" useMarkUp={false}>
          <Fragment>
            <p>
              <strong>PT. ABV Digital Indonesia</strong> selaku pemilik aplikasi{" "}
              <strong>Cafenture Indonesia</strong> menerapkan Syarat dan
              Ketentuan Penggunaan ini untuk mengatur hubungan antara Perusahaan
              dengan Pemilik Kedai Kopi (Mitra) ataupun Pencari Kedai Kopi
              (Pengguna).
            </p>
            <p>
              Dengan mendaftar dan/atau menggunakan aplikasi Cafenture, Anda
              dianggap telah membaca, memahami dan menyetujui seluruh isi
              &quot;Syarat dan Ketentuan Penggunaan ini&quot;. S&K ini merupakan
              bentuk Perjanjian yang sah dan mengikat antara Anda dengan Kami.
            </p>
            <h2 id="untuk-pengguna">Untuk Pencari Kedai Kopi (Pengguna)</h2>
            <p>
              Sebagai pengguna Cafenture, Anda dapat menikmati pengalaman
              rekomendasi kedai kopi yang dipersonalisasi. Pastikan Anda
              memahami hak dan kewajiban Anda saat menggunakan layanan kami.
              Baca selengkapnya tentang tanggung jawab, hak, dan ketentuan kerja
              sama dalam dokumen ini.
            </p>
            <p className="inline-flex items-center flex-wrap gap-2">
              <Link
                className="inline-flex items-center gap-1 text-primary font-medium bg-primary-100 p-1.5 px-3 rounded text-sm"
                href="/help-center/terms-and-conditions/users"
              >
                Syarat dan Ketentuan
                <ArrowUpRight size={16} />
              </Link>{" "}
            </p>
            <h2 id="untuk-mitra">Untuk Pemilik Kedai Kopi (Mitra)</h2>
            <p>
              Sebagai mitra Cafenture, Anda mendapatkan akses ke fitur promosi
              eksklusif dan dukungan untuk memperluas jangkauan kedai kopi Anda.
              Baca selengkapnya tentang tanggung jawab, hak, dan ketentuan kerja
              sama dalam dokumen ini.
            </p>
            <p className="inline-flex items-center flex-wrap gap-2">
              <Link
                className="inline-flex items-center gap-1 text-primary font-medium bg-primary-100 p-1.5 px-3 rounded text-sm"
                href="/help-center/terms-and-conditions/merchants"
              >
                Syarat dan Ketentuan
                <ArrowUpRight size={16} />
              </Link>{" "}
            </p>
          </Fragment>
        </Blog>
      </Section>
    </main>
  );
}
