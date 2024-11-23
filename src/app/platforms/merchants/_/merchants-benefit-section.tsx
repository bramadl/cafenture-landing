import { Article } from "@cafenture/components/core/article";
import { Section } from "@cafenture/components/core/section";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cafenture/components/ui/tabs";
import { Tag } from "@cafenture/components/ui/tag";
import { merchants } from "@cafenture/content/merchants";
import Image from "next/image";

export const MerchantsBenefitSection = () => {
  return (
    <Section id="benefits-section">
      <Section.Header className="mx-0 lg:items-start">
        <Tag className="pr-4">Alasan Menjadi Mitra</Tag>
        <Section.Title className="lg:text-left">
          Mendaftarkan Bisnis <span className="text-primary">Kedai Kopi</span>{" "}
          Anda di Cafenture Adalah Keputusan yang Tepat
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Kami mendukung pertumbuhan kedai kopi Anda dengan fitur dan teknologi
          yang dirancang untuk menjangkau audiens yang lebih luas dan
          meningkatkan pengalaman pelanggan Anda.
        </Section.Caption>
      </Section.Header>
      <Tabs defaultValue="tingkatkan-visibilitas">
        <div className="md:flex items-center justify-center mb-8 overflow-x-auto">
          <TabsList className="md:self-center md:mx-auto">
            <TabsTrigger className="flex-1" value="tingkatkan-visibilitas">
              Tingkatkan Visibilitas
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="dorong-penjualan">
              Dorong Penjualan
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="pemasaran-digital">
              Pemasaran Digital
            </TabsTrigger>
          </TabsList>
        </div>
        {merchants.benefits.map((benefit, key) => (
          <TabsContent key={key} value={benefit.id}>
            <div className="relative w-full grid lg:grid-cols-2 grid-rows-1 items-center rounded-xl bg-slate-50">
              <Article
                className="row-start-2 lg:row-start-1 p-6 pt-0 lg:p-16"
                title={benefit.title}
                description={benefit.description}
                details={benefit.details}
              />
              <figure className="row-start-1 p-6">
                <Image
                  alt={`Cafenture Indonesia: (Menjadi Merchant) ${benefit.title}`}
                  blurDataURL={benefit.image.blurDataURL}
                  className="w-full h-full object-cover rounded shadow"
                  height={benefit.image.height}
                  src={benefit.image}
                  width={benefit.image.width}
                />
              </figure>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};
