import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@cafenture/components/core/article";
import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";
import { modules } from "@cafenture/content/modules/modules";
import { cn } from "@cafenture/lib/utils";

export const generateMetadata = async ({
  params,
}: PageProps<Promise<{ module: string }>>): Promise<Metadata> => {
  const moduleFromParams = (await params).module;
  const module = modules.find(
    (module) => module.base.slug === `/modules/${moduleFromParams}`
  );

  if (!module) throw new Error("No module can be found!");
  const {
    base: { slug },
    seo: { description, title },
  } = module;

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
  const module = modules.find(
    (module) => module.base.slug === `/modules/${moduleFromParams}`
  );

  if (!module) return notFound();
  const {
    base: { description, label, title },
    features,
  } = module;

  return (
    <main>
      <Section id="module-section" className="pt-[100px]">
        <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0 lg:items-start">
          <Tag>{label}</Tag>
          <Section.Title as="h1" className="lg:text-left">
            {title}
          </Section.Title>
          <Section.Caption className="lg:text-left">
            {description}
          </Section.Caption>
        </Section.Header>
        <ul className="flex flex-col gap-[100px]">
          {features.map(
            ({ description, details, icon: Icon, keyPoints, name }, key) => (
              <li key={key} className="flex items-center gap-[100px]">
                <Article
                  className={cn(
                    "flex-1",
                    key % 2 === 0 ? "order-1" : "order-2"
                  )}
                  description={details || description}
                  details={keyPoints}
                  title={name}
                >
                  <Icon className="size-5 text-secondary" />
                </Article>
                <figure
                  className={cn(
                    "flex-1",
                    key % 2 === 0 ? "order-2" : "order-1"
                  )}
                >
                  <div className="w-full aspect-[12/8] rounded-lg bg-slate-200" />
                </figure>
              </li>
            )
          )}
        </ul>
      </Section>
    </main>
  );
}
