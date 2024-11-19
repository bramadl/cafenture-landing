import { type FC, type HTMLAttributes } from "react";

import { cn } from "@cafenture/lib/utils";

export const Blog: FC<
  HTMLAttributes<HTMLDivElement> & { useMarkUp?: boolean }
> = ({ children, useMarkUp = true, ...props }) => {
  if (!useMarkUp) {
    return (
      <div
        {...props}
        className={cn(
          "flex-1 max-w-none prose first:prose-h2:mt-0",
          props.className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      {...props}
      className={cn(
        "flex-1 max-w-none prose first:prose-h2:mt-0",
        props.className
      )}
      dangerouslySetInnerHTML={{ __html: children as TrustedHTML }}
    />
  );
};
