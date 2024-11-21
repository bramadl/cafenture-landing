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
        <Tag className="pr-4">Keuntungan Menjadi Mitra</Tag>
        <Section.Title className="lg:text-left">
          Mengapa Bergabung dengan{" "}
          <span className="text-primary">Cafenture Indonesia</span> Adalah
          Tepat?
        </Section.Title>
        <Section.Caption className="lg:text-left">
          Kami mendukung pertumbuhan kedai kopi Anda dengan fitur dan teknologi
          yang dirancang untuk menjangkau audiens yang lebih luas dan
          meningkatkan pengalaman pelanggan.
        </Section.Caption>
      </Section.Header>
      <Tabs defaultValue="tingkatkan-visibilitas">
        <div className="flex items-center justify-center mb-8">
          <TabsList className="self-center mx-auto">
            <TabsTrigger className="flex-1" value="tingkatkan-visibilitas">
              Visibilitas
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="dorong-penjualan">
              Penjualan
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="pemasaran-digital">
              Pemasaran
            </TabsTrigger>
          </TabsList>
        </div>
        {merchants.benefits.map((benefit, key) => (
          <TabsContent key={key} value={benefit.id}>
            <div className="relative w-full grid xl:grid-cols-2 grid-rows-1 items-center gap-0 xl:gap-16 rounded-xl bg-slate-50">
              <div className="flex flex-col gap-4 justify-center p-6 xl:p-16">
                <Article
                  title={benefit.title}
                  description={benefit.description}
                  details={benefit.details}
                />
              </div>
              <figure className="row-start-1 xl:col-start-2 aspect-video rounded-lg overflow-hidden">
                <Image
                  alt={benefit.title}
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
