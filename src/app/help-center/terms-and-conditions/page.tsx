import { Fragment } from "react";

import { Blog } from "@cafenture/components/core/blog";
import { PinnedSection } from "@cafenture/components/core/pinned-section";

import { HelpCenterSubMenu } from "../_/help-center-submenu";

export default function Page() {
  return (
    <Fragment>
      <PinnedSection>
        <HelpCenterSubMenu menus={[]} />
      </PinnedSection>
      <Blog>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        laborum, error optio harum blanditiis a at nemo nostrum fugit reiciendis
        quia iusto, itaque voluptas!
      </Blog>
    </Fragment>
  );
}
