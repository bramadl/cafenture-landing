import { type FC } from "react";

import { Article } from "@cafenture/components/core/article";

import { MembershipCard } from "./membership-card";

interface PricingCardProps {
  description: string;
  label: string;
  price: number;
  title: string;
}

const PricingCard: FC<PricingCardProps> = ({
  description,
  label,
  price,
  title,
}) => {
  return (
    <div className="flex flex-col justify-end p-6 rounded-2xl bg-slate-50">
      <p className="self-start text-sm py-1 px-2 rounded bg-slate-950 text-slate-50 mb-16">
        {label}
      </p>
      <div>
        <p className="font-bold text-secondary text-sm">
          Rp {Intl.NumberFormat("id").format(price)}
        </p>
        <Article title={title} description={description} />
      </div>
    </div>
  );
};

export const PricingGrids = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:col-span-2 flex flex-col lg:flex-row lg:justify-between gap-6 p-6 rounded-2xl bg-slate-50">
        <div className="flex flex-col justify-between">
          <p className="self-start text-sm py-1 px-2 rounded bg-slate-950 text-slate-50 mb-16">
            Kartu Membership
          </p>
          <div className="flex flex-col gap-6">
            <MembershipCard className="lg:hidden" />
            <Article
              title="Identitas Keanggotaan yang Berkelas"
              description="Sebagai simbol keanggotaan Anda, kartu membership tidak hanya berfungsi sebagai akses, tetapi juga mencerminkan status Anda sebagai bagian dari komunitas premium."
            />
          </div>
        </div>
        <MembershipCard className="hidden lg:flex" />
      </div>
      <PricingCard
        description="Nikmati semua manfaat eksklusif tanpa komitmen panjang—diskon tambahan hingga promosi spesial. Bebas perbaharui kapan saja."
        label="Keanggotaan Bulanan"
        price={50_000}
        title="Fleksibilitas Waktu"
      />
      <PricingCard
        description="Dapatkan manfaat penuh sepanjang tahun dengan potongan harga eksklusif, hadiah spesial, dan program loyalitas yang bernilai lebih."
        label="Keanggotaan Tahunan"
        price={480_000}
        title="Investasi Terbaik"
      />
    </div>
  );
};
