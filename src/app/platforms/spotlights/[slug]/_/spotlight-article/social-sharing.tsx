import { type FC, type HTMLAttributes } from "react";

import { cn } from "@cafenture/lib/utils";

import { ShareButtons } from "./share-buttons";

export const SocialSharing: FC<
  HTMLAttributes<HTMLDivElement> & {
    caption: string;
    tags: string[];
    title: string;
  }
> = ({ caption, tags, title, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-col gap-4", props.className)}>
      <p className="text-lg sm:text-xl font-semibold">Bagikan Halaman Ini</p>
      <div className="flex flex-wrap gap-4">
        <ShareButtons caption={caption} tags={tags} title={title} />
      </div>
    </div>
  );
};
