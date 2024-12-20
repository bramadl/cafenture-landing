import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  type FC,
  type HTMLAttributes,
} from "react";

import { cn } from "@cafenture/lib/utils";

type SectionProps = ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
> & {
  Header: FC<HTMLAttributes<HTMLDivElement>>;
  Title: FC<
    HTMLAttributes<HTMLHeadingElement> & {
      as?: keyof Pick<HTMLElementTagNameMap, "h1" | "h2">;
      keyword?: string;
    }
  >;
  Caption: FC<HTMLAttributes<HTMLParagraphElement>>;
};

export const Section: SectionProps = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <section
      {...props}
      ref={ref}
      className={cn(
        "container mx-auto px-6 sm:px-8 lg:px-16 flex flex-col gap-16 sm:gap-[100px]",
        "pt-16 sm:pt-[100px]",
        props.className
      )}
    />
  );
}) as SectionProps;
Section.displayName = "Section";

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

Section.Title = function Title({ as = "h2", keyword, ...props }) {
  const Component = as;
  return (
    <div>
      <Component className="sr-only">{keyword || props.children}</Component>
      <p
        {...props}
        className={cn(
          "max-w-[768px] lg:text-center text-2xl sm:text-4xl font-bold leading-normal sm:leading-normal",
          props.className
        )}
      />
    </div>
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
