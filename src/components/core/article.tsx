import { type FC, type HTMLAttributes } from "react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@cafenture/lib/utils";

export const Article: FC<
  HTMLAttributes<HTMLHeadingElement> & {
    description: string;
    details?: string[];
    title: string;
  }
> = ({ description, details, title, ...props }) => {
  return (
    <article {...props} className={cn("flex flex-col gap-1 sm:gap-2", props.className)}>
      <header className="flex flex-col gap-3">
        {props.children}
        <Title>{title}</Title>
      </header>
      <Description>{description}</Description>
      {details && (
        <ul className="flex flex-col gap-4 mt-3">
          {details.map((detail, key) => (
            <li key={key} className="flex items-start gap-4">
              <div className="p-2 rounded bg-secondary-50 text-secondary -translate-y-1">
                <CaretRight className="size-4" weight="bold" />
              </div>
              <p className="text-secondary">{detail}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return (
    <h3
      {...props}
      className="text-lg sm:text-xl font-semibold max-w-[80%] md:max-w-[90%] lg:max-w-[75%] xl:max-w-none"
    />
  );
};

const Description: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  return <p {...props} className="text-secondary" />;
};
