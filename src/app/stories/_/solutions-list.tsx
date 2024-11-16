import { Card } from "@cafenture/components/core/cards";
import { solutions } from "@cafenture/content/solutions";

export const SolutionsList = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-6 xl:gap-12">
      {solutions.map((solution, key) => (
        <Card key={key} {...solution} />
      ))}
    </div>
  );
};
