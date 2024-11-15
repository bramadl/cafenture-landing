import { type FC, type HTMLAttributes } from "react";

import { cn } from "@cafenture/lib/utils";

export const Tag: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "inline-flex items-center gap-3 p-3 rounded-full border border-neutral-200 text-secondary text-sm font-semibold",
        props.className
      )}
    />
  );
};
