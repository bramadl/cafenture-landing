import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@cafenture/components/ui/accordion";
import { faqs } from "@cafenture/content/faqs";

export const FaqAccordion = () => {
  return (
    <Accordion className="w-full max-w-[960px] mx-auto" collapsible type="single">
      {faqs.map(({ answer, question }, key) => (
        <AccordionItem key={key} value={answer}>
          <AccordionTrigger className="text-left text-lg sm:text-xl font-semibold">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-left text-base text-secondary">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
