"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

import { Fragment, useEffect, useState } from "react";

export const ShareButtons = ({
  caption,
  tags,
  title,
}: {
  caption: string;
  tags: string[];
  title: string;
}) => {
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    if ("location" in window) setUrl(location.href);
  }, []);

  if (!url) return null;
  return (
    <Fragment>
      <TwitterShareButton
        hashtags={tags.map((tag) => tag.replaceAll(" ", ""))}
        url={url}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={tags[0].replaceAll(" ", "")}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} summary={caption}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title} separator=" - ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </Fragment>
  );
};
