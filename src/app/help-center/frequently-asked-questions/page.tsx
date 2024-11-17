import { Blog } from "@cafenture/components/core/blog";
import { FrequentlyAskedQuestions } from "@cafenture/content/help-center/frequently-asked-questions";

export default function Page() {
  return <Blog>{FrequentlyAskedQuestions.content}</Blog>;
}
