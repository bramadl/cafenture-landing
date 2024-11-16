import { Card } from "@cafenture/components/core/cards";
import { memberships } from "@cafenture/content/memberships";

export const MembershipBenefits = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-6 xl:gap-12">
      {memberships.benefits.map((benefit, key) => (
        <Card key={key} {...benefit} />
      ))}
    </div>
  );
};
