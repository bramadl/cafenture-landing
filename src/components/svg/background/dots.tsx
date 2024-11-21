import { type FC, type HTMLAttributes } from "react";
import { cn } from "@cafenture/lib/utils";

export const Dots: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
        props.className
      )}
    />
  );
};
