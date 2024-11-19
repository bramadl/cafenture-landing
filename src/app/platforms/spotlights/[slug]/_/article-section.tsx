import { type FC, type HTMLAttributes } from "react";

import { Section } from "@cafenture/components/core/section";

export const ArticleSection: FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return <Section {...props} id="article" className="xl:flex-row xl:justify-start sm:gap-12" />;
};
