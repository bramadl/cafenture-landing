import { type FC, type HTMLAttributes } from "react";

export const Article: FC<
  HTMLAttributes<HTMLHeadingElement> & { description: string; title: string }
> = ({ description, title, ...props }) => {
  return (
    <article {...props} className="flex flex-col gap-2 sm:gap-4">
      <header className="flex flex-col gap-3">
        {props.children}
        <Title>{title}</Title>
      </header>
      <Description>{description}</Description>
    </article>
  );
};

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <h3 {...props} className="text-lg sm:text-xl font-semibold max-w-[80%] md:max-w-[90%] lg:max-w-[75%] xl:max-w-none" />;
};

const Description: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  ...props
}) => {
  return <p {...props} className="text-secondary" />;
};
