/* eslint-disable @typescript-eslint/no-explicit-any */
interface PageProps<
  P = Promise<any> | undefined,
  S = Promise<any> | undefined
> {
  params: P;
  searchParams: S;
}

interface TableOfContent {
  id: string;
  label: string;
}

interface Thumbnail {
  fileName: string;
  height: number;
  width: number;
  url: string;
}
