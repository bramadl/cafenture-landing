import { type FC } from "react";

import { type ISpotlight } from "@cafenture/content/remotes/spotlights";

import { Spotlight } from "./spotlight";

export const SpotlightCard: FC<ISpotlight> = ({
  caption,
  createdAt,
  createdBy,
  tags,
  thumbnail,
  title,
  slug,
}) => {
  return (
    <article className="w-full h-full group relative flex flex-col rounded-lg overflow-hidden bg-slate-50">
      <div className="p-6 pb-0">
        <Spotlight.Thumbnail className="rounded" {...thumbnail} />
      </div>
      <Spotlight className="flex-1 p-4 xl:p-6">
        <Spotlight.Tags tags={tags} />
        <header className="flex-1 flex flex-col gap-2">
          <Spotlight.Title url={`/platforms/spotlights/${slug}`}>
            {title}
          </Spotlight.Title>
          <Spotlight.Description>{caption}</Spotlight.Description>
        </header>
        <Spotlight.Author createdAt={createdAt} createdBy={createdBy} />
      </Spotlight>
    </article>
  );
};
