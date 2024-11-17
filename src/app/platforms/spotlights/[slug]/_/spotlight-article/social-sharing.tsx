import { type FC, type HTMLAttributes } from "react";

import { cn } from "@cafenture/lib/utils";

import { ShareButtons } from "./share-buttons";

export const SocialSharing: FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div {...props} className={cn("flex flex-col gap-4", props.className)}>
      <h3 className="text-lg sm:text-xl font-semibold">Bagikan Halaman Ini</h3>
      <div className="flex flex-wrap gap-4">
        <ShareButtons />
      </div>
    </div>
  );
};
