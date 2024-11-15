import { type FC, type HTMLAttributes } from "react";
import { type Icon } from "@phosphor-icons/react";

import { memberships } from "@cafenture/content/memberships";
import { cn } from "@cafenture/lib/utils";

interface MembershipCardProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  icon: Icon;
  title: string;
}

const MembershipCard: FC<MembershipCardProps> = ({
  description,
  icon: Icon,
  title,
  ...props
}) => {
  return (
    <article
      {...props}
      className={cn("flex flex-col gap-4 sm:gap-6", props.className)}
    >
      <figure className="self-start sm:self-center p-4 sm:p-6 rounded-full bg-slate-50">
        <Icon className="size-6 sm:size-8 text-primary" weight="fill" />
      </figure>
      <section className="flex flex-col sm:text-center gap-2 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-secondary">{description}</p>
      </section>
    </article>
  );
};

const MembershipGrid: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <div {...props} className="grid sm:grid-cols-3 gap-6 xl:gap-12" />;
};

export const MembershipBenefits = () => {
  return (
    <MembershipGrid>
      {memberships.benefits.map((benefit, key) => (
        <MembershipCard key={key} {...benefit} />
      ))}
    </MembershipGrid>
  );
};
