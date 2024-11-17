import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@cafenture/components/ui/breadcrumb";
import { Section } from "@cafenture/components/core/section";

import { Spotlight } from "../../_/spotlight";
import { CafentureSpotlightsUrl, HomeUrl } from "@cafenture/content/menus";

export const HeroSection = ({
  caption,
  title,
}: {
  caption: string;
  title: string;
}) => {
  return (
    <Section
      id="hero-section"
      className="relative pt-[100px] xl:flex-row min-h-screen"
    >
      <Section.Header className="md:flex-1 pt-20 sm:pt-24 mx-0 lg:items-start">
        <Breadcrumb className="mb-10">
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
        <Spotlight.Tags />
        <Section.Title as="h1" className="sm:leading-tight lg:text-left">
          {title}
        </Section.Title>
        <Section.Caption className="lg:text-left">{caption}</Section.Caption>
      </Section.Header>
      <figure className="flex-1">
        <Image
          alt="Mengapa Platform Rekomendasi Itu Penting: Temukan Kedai Kopi yang Sempurna untuk Anda"
          className="w-full h-full object-cover pointer-events-none select-none"
          height={320}
          src="https://images.unsplash.com/photo-1651449815995-9419a04685aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={640}
        />
      </figure>
    </Section>
  );
};
