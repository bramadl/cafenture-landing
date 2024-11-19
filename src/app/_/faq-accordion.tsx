import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@cafenture/components/ui/accordion";
import { IFaqQuestion } from "@cafenture/content/remotes/faqs";

export const FaqAccordion = ({
  faqs,
}: {
  faqs: Omit<IFaqQuestion, "category">[];
}) => {
  return (
    <Accordion
      className="w-full max-w-[960px] mx-auto"
      collapsible
      type="single"
    >
      {faqs.map(({ answer, question }, key) => (
        <AccordionItem key={key} value={question}>
          <AccordionTrigger className="text-left text-lg font-semibold">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-left text-base text-secondary">
            <div dangerouslySetInnerHTML={{ __html: answer.html }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
