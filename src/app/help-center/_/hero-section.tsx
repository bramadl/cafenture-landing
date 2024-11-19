import { type FC } from "react";

import { Section } from "@cafenture/components/core/section";
import { Tag } from "@cafenture/components/ui/tag";

interface HeroSectionProps {
  description: string;
  label: string;
  children: React.ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
  description,
  label,
  children,
}) => {
  return (
    <Section id="hero-section" className="pt-[100px]">
      <Section.Header className="md:flex-1 pt-20 sm:pt-24 lg:items-start">
        <Tag>{label}</Tag>
        <Section.Title as="h1" className="lg:text-left">
          {children}
        </Section.Title>
        <Section.Caption className="lg:text-left">
          {description}
        </Section.Caption>
      </Section.Header>
    </Section>
  );
};
