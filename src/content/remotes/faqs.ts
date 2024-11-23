export interface IFaqCategory {
  context: string;
  description: string;
  hash: string;
}

export interface IFaqQuestion {
  answer: {
    html: string;
    text: string;
  };
  category: IFaqCategory;
  question: string;
}

export async function getFeaturedFaqs() {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetFeaturedFaqs {
        faqQuestions(stage: DRAFT, where: {featured: true}) {
          question
          answer {
            html
            text
          }
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.faqQuestions as Omit<IFaqQuestion, "category">[];
}

export async function getFaqCategories() {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetFaqCategories {
        faqCategories(stage: DRAFT) {
          context
          description
          hash
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.faqCategories as IFaqCategory[];
}

export async function getFaqQuestions() {
  const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT!;
  const response = await fetch(NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query GetFaqQuestions {
        faqQuestions(stage: DRAFT, first: 100) {
          category {
            context
            description
            hash
          }
          question
          answer {
            html
            text
          }
        }
      }`,
    }),
  });

  const json = await response.json();
  return json.data.faqQuestions as IFaqQuestion[];
}

interface FAQ {
  category: {
    context: string;
    description: string;
    hash: string;
  };
  question: string;
  answer: {
    html: string;
    text: string;
  };
}

interface GroupedFAQs {
  [key: string]: {
    context: string;
    description: string;
    hash: string;
    faqs: Array<{
      question: string;
      answer: { html: string; text: string };
    }>;
  };
}

export function groupFAQsByCategory(faqQuestions: FAQ[]): GroupedFAQs {
  return faqQuestions.reduce((acc, faq) => {
    const { context, description, hash } = faq.category;

    if (!acc[hash]) {
      acc[hash] = {
        context,
        description,
        hash,
        faqs: [],
      };
    }

    acc[hash].faqs.push({
      question: faq.question,
      answer: faq.answer,
    });

    return acc;
  }, {} as GroupedFAQs);
}
