import Image from "next/image";

import { getFeaturedSpotlight } from "@cafenture/content/remotes/spotlights";

import { Spotlight } from "./spotlight";

export const FeaturedSpotlight = async () => {
  const { caption, createdBy, createdAt, slug, thumbnail, title } =
    await getFeaturedSpotlight();

  return (
    <section className="group relative w-full grid xl:grid-cols-[1.25fr_2fr] grid-rows-1 gap-0 xl:gap-16 rounded-xl bg-slate-50">
      <Spotlight className="justify-center p-6 pt-0 xl:pr-0 xl:p-16">
        <header className="flex flex-col gap-2">
          <h2 className="text-secondary font-semibold text-sm">
            Spotlight Unggulan
          </h2>
          <Spotlight.Title url={`/platforms/spotlights/${slug}`}>
            {title}
          </Spotlight.Title>
        </header>
        <Spotlight.Description className="line-clamp-3">
          {caption}
        </Spotlight.Description>
        <Spotlight.Author createdAt={createdAt} createdBy={createdBy} />
      </Spotlight>
      <figure className="row-start-1 xl:col-start-2 aspect-video p-6">
        <Image
          alt={`Cafenture Indonesia: (Spotlight) ${thumbnail.fileName}`}
          className="w-full h-full object-cover rounded-lg pointer-events-none select-none"
          height={thumbnail.height}
          src={thumbnail.url}
          width={thumbnail.width}
        />
      </figure>
    </section>
  );
};
