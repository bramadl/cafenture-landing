import { type FC } from "react";

import { type Spotlight as ISpotlight } from "@cafenture/content/remotes/spotlights";

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
    <article className="group relative flex flex-col rounded-lg overflow-hidden bg-slate-50 border border-slate-200 shadow">
      <Spotlight.Thumbnail {...thumbnail} />
      <Spotlight className="p-4 xl:p-6">
        <Spotlight.Tags tags={tags} />
        <header className="flex flex-col gap-2">
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
