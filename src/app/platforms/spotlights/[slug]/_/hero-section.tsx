import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@cafenture/components/ui/breadcrumb";
import { CafentureSpotlightsUrl, HomeUrl } from "@cafenture/content/menus";
import { Section } from "@cafenture/components/core/section";

import { Spotlight } from "../../_/spotlight";

export const HeroSection = ({
  caption,
  tags,
  thumbnail: { fileName, height, url, width },
  title,
}: {
  caption: string;
  tags: string[];
  thumbnail: Thumbnail;
  title: string;
}) => {
  return (
    <Section
      id="hero-section"
      className="relative pt-[100px] xl:flex-row xl:min-h-screen"
    >
      <Section.Header className="xl:flex-1 pt-20 sm:pt-24 mx-0 lg:items-start">
        <Breadcrumb className="xl:-mt-64 mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={HomeUrl.url}>
                {HomeUrl.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={CafentureSpotlightsUrl.url}>
                {CafentureSpotlightsUrl.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Spotlight.Tags tags={tags} />
        <Section.Title as="h1" className="sm:leading-tight lg:text-left">
          {title}
        </Section.Title>
        <Section.Caption className="lg:text-left">{caption}</Section.Caption>
      </Section.Header>
      <figure className="xl:flex-1 aspect-video overflow-hidden bg-slate-200">
        <Image
          alt={`Cafenture Indonesia: (Spotlight) ${fileName}`}
          className="w-full h-full object-cover pointer-events-none select-none"
          height={height}
          src={url}
          width={width}
        />
      </figure>
    </Section>
  );
};
