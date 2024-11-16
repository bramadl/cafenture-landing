import { type FC, type HTMLAttributes } from "react";

import { cn } from "@cafenture/lib/utils";

export const Section: FC<HTMLAttributes<HTMLDivElement>> & {
  Header: FC<HTMLAttributes<HTMLDivElement>>;
  Title: FC<
    HTMLAttributes<HTMLHeadingElement> & {
      as?: keyof Pick<HTMLElementTagNameMap, "h1" | "h2">;
    }
  >;
  Caption: FC<HTMLAttributes<HTMLParagraphElement>>;
} = ({ ...props }) => {
  return (
    <section
      {...props}
      className={cn(
        "container mx-auto px-6 sm:px-8 lg:px-16 flex flex-col gap-16 sm:gap-[100px]",
        "pt-16 sm:pt-[100px]",
        props.className
      )}
    />
  );
};

Section.Header = function Header({ ...props }) {
  return (
    <header
      {...props}
      className={cn(
        "flex flex-col items-start lg:items-center justify-center gap-4",
        props.className
      )}
    >
      {props.children}
    </header>
  );
};

Section.Title = function Title({ as = "h2", ...props }) {
  const Component = as;
  return (
    <Component
      {...props}
      className={cn(
        "max-w-[768px] lg:text-center text-2xl sm:text-4xl font-bold sm:leading-normal",
        props.className
      )}
    />
  );
};

Section.Caption = function Caption({ ...props }) {
  return (
    <p
      {...props}
      className={cn(
        "max-w-[960px] lg:text-center sm:text-lg text-secondary",
        props.className
      )}
    />
  );
};
