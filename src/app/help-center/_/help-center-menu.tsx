"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Article } from "@cafenture/components/core/article";
import {
  UserManualsAndSupportsUrl,
  UserPrivacyAndPoliciesUrl,
  UserQuestionsUrl,
  UserTermsAndConditionsUrl,
} from "@cafenture/content/menus";

export const HelpCenterMenu = () => {
  const pathname = usePathname();

  return (
    <div className="grid xl:grid-cols-3 gap-6">
      {[
        UserManualsAndSupportsUrl,
        UserPrivacyAndPoliciesUrl,
        UserQuestionsUrl,
        UserTermsAndConditionsUrl,
      ]
        .filter((menu) => menu.url !== pathname)
        .map(({ icon: Icon, label, description, url }, key) => (
          <Article
            key={key}
            className="relative group bg-slate-50 p-4 rounded-lg shadow border border-slate-200"
            title={label}
            description={description}
          >
            {Icon && (
              <Link className="after:absolute after:inset-0" href={url}>
                <Icon className="text-secondary size-6" />
              </Link>
            )}
          </Article>
        ))}
    </div>
  );
};
