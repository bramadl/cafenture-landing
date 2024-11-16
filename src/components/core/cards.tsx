import { cn } from "@cafenture/lib/utils";
import { Icon } from "@phosphor-icons/react";
import { FC, HTMLAttributes } from "react";
import { Article } from "./article";

export const Card: FC<
  HTMLAttributes<HTMLDivElement> & {
    description: string;
    icon: Icon;
    title: string;
  }
> = ({ description, icon: Icon, title, ...props }) => {
  return (
    <section
      {...props}
      className={cn("flex flex-col gap-4 sm:gap-6", props.className)}
    >
      <figure className="self-start p-4 rounded-full bg-slate-50">
        <Icon className="size-6 text-primary" weight="fill" />
      </figure>
      <Article description={description} title={title} />
    </section>
  );
};
