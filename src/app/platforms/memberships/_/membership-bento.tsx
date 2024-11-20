import { type FC, type HTMLAttributes } from "react";
import { type Icon } from "@phosphor-icons/react";

import { Article } from "@cafenture/components/core/article";
import { cn } from "@cafenture/lib/utils";
import {
  Gift,
  IdentificationCard,
  Star,
  Tag,
} from "@phosphor-icons/react/dist/ssr";

interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  figures?: {
    layout: "one-column" | "two-column" | "two-column-reversed" | "three-rows";
  };
  icon: Icon;
  title: string;
}

const BentoCard: FC<BentoCardProps> = ({
  description,
  figures = { layout: "two-column" },
  icon: Icon,
  title,
  ...props
}) => {
  const Figure = () => {
    switch (figures.layout) {
      case "one-column":
        return <div className="w-full h-[100px] rounded-lg bg-slate-200" />;
      case "two-column":
        return (
          <figure className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
          </figure>
        );
      case "two-column-reversed":
        return (
          <figure className="grid grid-cols-[1fr_2fr] gap-4">
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
            <div className="w-full h-[100px] rounded-lg bg-slate-200" />
          </figure>
        );
      case "three-rows":
        return (
          <figure className="flex flex-col gap-4">
            <div className="w-full h-[250px] rounded-lg bg-slate-200" />
            <div className="w-full h-[50px] rounded-lg bg-slate-200" />
            <div className="w-full h-[50px] rounded-lg bg-slate-200" />
          </figure>
        );
    }
  };

  return (
    <section
      {...props}
      className={cn(
        "flex flex-col justify-end gap-6 p-6 rounded-2xl bg-slate-50",
        props.className
      )}
    >
      {Figure()}
      <Article description={description} title={title}>
        <Icon className="size-5 text-secondary" />
      </Article>
    </section>
  );
};

const BentoGrid: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        // xl:auto-rows-[22rem]
        "grid md:grid-cols-2 xl:grid-cols-3 gap-6",
        props.className
      )}
    />
  );
};

export const MembershipsBento = () => {
  return (
    <BentoGrid>
      <BentoCard
        className="col-span-2"
        icon={IdentificationCard}
        title="Identitas Keanggotaan yang Berkelas"
        description="Sebagai simbol keanggotaan Anda, kartu membership tidak hanya berfungsi sebagai akses, tetapi juga mencerminkan status Anda sebagai bagian dari komunitas premium."
      />
      <BentoCard
        icon={Gift}
        title="Nikmati Keistimewaan yang Tidak Dimiliki Orang Lain"
        description="Hanya untuk Anda yang menjadi anggota eksklusif, nikmati berbagai promosi istimewa yang dirancang khusus dari pemilik kedai kopi. Penawaran ini tidak tersedia di tempat lain, memberikan Anda keunggulan yang nyata."
      />
      <BentoCard
        icon={Tag}
        title="Keuntungan Lebih di Setiap Transaksi"
        description="Anggota premium mendapatkan lebih dari sekadar promosi biasa. Nikmati penawaran ekstra yang memberikan nilai tambah pada setiap kunjungan Anda ke kedai kopi favorit."
      />
      <BentoCard
        icon={Star}
        title="Hadiah dengan Sentuhan Keistimewaan"
        description="Anggota premium berhak mendapatkan hadiah spesial yang dirancang terbatas dan eksklusif. Dari produk unik hingga pengalaman tak terlupakan, semuanya hanya untuk Anda."
      />
    </BentoGrid>
  );
};
