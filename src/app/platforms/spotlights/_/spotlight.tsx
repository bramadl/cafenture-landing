import { type FC, type HTMLAttributes } from "react";
import { cn } from "@cafenture/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@cafenture/components/ui/badge";

interface SpotlightComponents {
  Author: FC<HTMLAttributes<HTMLDivElement>>;
  Description: FC<HTMLAttributes<HTMLParagraphElement>>;
  Figure: FC<HTMLAttributes<HTMLDivElement>>;
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
      <Link className="after:absolute after:inset-0" href={url}>
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

Spotlight.Author = function Author() {
  return (
    <div className="flex flex-row items-center gap-3 mt-6">
      <Image
        alt="Jack"
        className="rounded-full"
        height="32"
        src="https://avatar.vercel.sh/jack"
        width="32"
      />
      <p className="text-secondary text-sm">
        Ditulis oleh <strong>Jack</strong> pada 3 Juli 2024
      </p>
    </div>
  );
};

Spotlight.Figure = function Figure({ ...props }) {
  return (
    <figure
      {...props}
      className={cn(
        "w-full aspect-video bg-slate-200 animate-pulse",
        props.className
      )}
    />
  );
};
