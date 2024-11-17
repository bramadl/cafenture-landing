/* eslint-disable @typescript-eslint/no-explicit-any */
interface PageProps<
  P = Promise<any> | undefined,
  S = Promise<any> | undefined
> {
  params: P;
  searchParams: S;
}
