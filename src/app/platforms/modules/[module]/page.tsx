import { type Metadata } from "next";
import { type WebPage } from "schema-dts";
import { notFound } from "next/navigation";
import Image from "next/image";

import { Article } from "@cafenture/components/core/article";
import { Dots } from "@cafenture/components/svg/background/dots";
import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";
import { WithLd } from "@cafenture/components/core/with-ld";
import { baseLd } from "@cafenture/lib/seo";
import { cn } from "@cafenture/lib/utils";
import { modules } from "@cafenture/content/modules/modules";

export const generateMetadata = async ({
  params,
}: PageProps<Promise<{ module: string }>>): Promise<Metadata> => {
  const moduleFromParams = (await params).module;
  const appModule = modules.find(
    (m) => m.base.slug === `/platforms/modules/${moduleFromParams}`
  );

  if (!appModule) throw new Error("No module can be found!");
  const {
    base: { slug },
    seo: { description, title },
  } = appModule;

  return {
    title,
    description,
    alternates: {
      canonical: process.env.__NEXT_PRIVATE_ORIGIN + slug,
    },
  };
};

export default async function Page({
  params,
}: PageProps<Promise<{ module: string }>>) {
  const moduleFromParams = (await params).module;
  const appModule = modules.find(
    (module) => module.base.slug === `/platforms/modules/${moduleFromParams}`
  );

  if (!appModule) return notFound();
  const {
    base: { description, label, slug, title },
    features,
    seo,
  } = appModule;

  return (
    <WithLd<WebPage>
      jsonLd={({ baseUrl }) => ({
        ...baseLd,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: `${baseUrl}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tentang Platform",
              item: `${baseUrl}/platforms`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${label} Module`,
              item: `${baseUrl}/platforms/modules/${module}`,
            },
          ],
        },
        name: seo.title,
        description: seo.description,
        mainEntity: {
          "@type": "ItemList",
          name: "Fitur Cafenture",
          itemListOrder: "http://schema.org/ItemListOrderAscending",
          itemListElement: features.map((feature, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: feature.name,
            description: feature.description,
          })),
        },
        url: `${baseUrl}/platforms/modules/${slug}`,
      })}
    >
      <Section id="module-section" className="pt-[100px]">
        <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0 lg:items-start">
          <Tag>
            <h1>{label}</h1>
          </Tag>
          <Section.Title as="h2" className="lg:text-left">
            {title}
          </Section.Title>
          <Section.Caption className="lg:text-left">
            {description}
          </Section.Caption>
        </Section.Header>
        <ul className="flex flex-col gap-[100px]">
          {features.map(
            (
              { description, details, icon: Icon, image, keyPoints, name },
              key
            ) => (
              <li
                key={key}
                className="flex flex-col md:flex-row items-center gap-12 lg:gap-[100px]"
              >
                <Article
                  className={cn(
                    "flex-1",
                    key % 2 === 0 ? "order-2 md:order-1" : "order-2"
                  )}
                  description={details || description}
                  details={keyPoints}
                  title={name}
                >
                  <Icon className="size-5 text-secondary" />
                </Article>
                <figure
                  className={cn(
                    "relative w-full md:w-auto md:flex-1 aspect-[12/8] rounded-lg overflow-hidden",
                    key % 2 === 0 ? "order-1 md:order-2" : "order-1"
                  )}
                >
                  {image && (
                    <Image
                      alt={`Cafenture Indonesia: (${label}) ${name}`}
                      blurDataURL={image.blurDataURL}
                      className="w-full h-full object-contain"
                      height={image.height}
                      src={image.src}
                      width={image.width}
                    />
                  )}
                  <Dots />
                </figure>
              </li>
            )
          )}
        </ul>
      </Section>
    </WithLd>
  );
}
