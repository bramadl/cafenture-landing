import { addIdsToH2Tags, extractH2WithId } from "@cafenture/lib/content-parser";

export interface IPrivacyAndPolicy {
  tableOfContent: TableOfContent[];
  content: {
    html: string;
  };
}

export async function getPrivacyAndPolicy() {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query PrivacyAndPolicy {
        privacyAndPolicies(stage: DRAFT) {
          content {
            html
          }
        }
      }`,
    }),
  });

  const json = await response.json();
  const content = json.data.privacyAndPolicies[0] as IPrivacyAndPolicy;

  content.tableOfContent = extractH2WithId(content.content.html);
  content.content.html = addIdsToH2Tags(content.content.html);

  return content as IPrivacyAndPolicy;
}
