export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function addIdsToH2Tags(html: string): string {
  return html.replace(/<h2>(.*?)<\/h2>/g, (match, content) => {
    const slug = toSlug(content);
    return `<h2 id="${slug}">${content}</h2>`;
  });
}

export function extractH2WithId(html: string): { id: string; label: string }[] {
  const h2Array: { id: string; label: string }[] = [];

  const regex = /<h2>(.*?)<\/h2>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const content = match[1];
    const id = toSlug(content);
    h2Array.push({ id, label: content });
  }

  return h2Array;
}
