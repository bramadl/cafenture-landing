import { addIdsToH2Tags, extractH2WithId } from "@cafenture/lib/content-parser";

export interface ITermsAndCondition {
  tableOfContent: TableOfContent[];
  content: {
    html: string;
  };
}

export async function getTermsAndCondition(
  target: "forMerchants" | "forUsers"
) {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query TermsAndCondition {
        termsAndConditions(stage: DRAFT, where: {forMerchant: ${
          target === "forMerchants"
        }}) {
          content {
            html
          }
        }
      }`,
    }),
  });

  const json = await response.json();
  const content = json.data.termsAndConditions[0] as ITermsAndCondition;

  content.tableOfContent = extractH2WithId(content.content.html);
  content.content.html = addIdsToH2Tags(content.content.html);

  return content as ITermsAndCondition;
}
