import { memberships } from "@cafenture/content/memberships";

import { BenefitCard } from "./benefit-card";

export const MembershipsBenefits = () => {
  return (
    <div className="relative">
      {memberships.list.map(({ description, name, title }, key) => (
        <BenefitCard
          key={key}
          index={key}
          description={description}
          name={name}
          title={title}
        />
      ))}
    </div>
  );
};
