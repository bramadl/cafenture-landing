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
import {} from "next-share";

import { Fragment } from "react";

export const ShareButtons = () => {
  return (
    <Fragment>
      <TwitterShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={"https://github.com/next-share"}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </Fragment>
  );
};
