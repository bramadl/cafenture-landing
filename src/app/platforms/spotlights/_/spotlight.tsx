import { type FC, type HTMLAttributes } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";

import {
  type Spotlight as ISpotlight,
  type Thumbnail,
} from "@cafenture/content/remotes/spotlights";
import { Badge } from "@cafenture/components/ui/badge";
import { cn } from "@cafenture/lib/utils";

interface SpotlightComponents {
  Author: FC<
    HTMLAttributes<HTMLDivElement> & Pick<ISpotlight, "createdAt" | "createdBy">
  >;
  Description: FC<HTMLAttributes<HTMLParagraphElement>>;
  Thumbnail: FC<HTMLAttributes<HTMLDivElement> & Thumbnail>;
  Tags: FC<
    HTMLAttributes<HTMLDivElement> & {
      tags?: string[];
    }
  >;
  Title: FC<
    HTMLAttributes<HTMLHeadingElement> & {
      url: string;
    }
  >;
}

export const Spotlight: FC<HTMLAttributes<HTMLDivElement>> &
  SpotlightComponents = ({ ...props }) => {
  return (
    <article
      {...props}
      className={cn("flex flex-col gap-4", props.className)}
    />
  );
};

Spotlight.Tags = function Tags({ tags = ["Tag 1", "Tag 2"], ...props }) {
  return (
    <div {...props} className={cn("flex items-center gap-4", props.className)}>
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
};

Spotlight.Title = function Title({ url, ...props }) {
  return (
    <h2
      {...props}
      className={cn(
        "text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors",
        props.className
      )}
    >
      <Link className="after:absolute after:inset-0" href={url} scroll>
        {props.children}
      </Link>
    </h2>
  );
};

Spotlight.Description = function Description({ ...props }) {
  return (
    <p
      {...props}
      className={cn("text-secondary line-clamp-3", props.className)}
    />
  );
};

Spotlight.Author = function Author({
  createdAt,
  createdBy: { name, picture },
}) {
  return (
    <div className="flex flex-row items-center gap-3 mt-6">
      <Image
        alt={name}
        className="rounded-full"
        height="32"
        src={picture}
        width="32"
      />
      <p className="text-secondary text-sm">
        Ditulis oleh <strong>{name}</strong> <br /> pada{" "}
        {format(createdAt, "dd MMMM yyyy", { locale: id })}
      </p>
    </div>
  );
};

Spotlight.Thumbnail = function Thumbnail({
  fileName,
  height,
  url,
  width,
  ...props
}) {
  return (
    <figure
      {...props}
      className={cn("w-full aspect-video overflow-hidden bg-slate-200", props.className)}
    >
      <Image
        alt={fileName}
        className="w-full h-full object-cover object-bottom select-none pointer-events-none"
        height={height}
        src={url}
        width={width}
      />
    </figure>
  );
};
