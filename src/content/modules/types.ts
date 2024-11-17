import type { Feature } from "../features";

export interface Module {
  base: {
    description: string;
    label: string;
    slug: string;
    title: React.ReactNode;
  };
  features: Feature[];
  seo: {
    title: string;
    description: string;
  };
}
