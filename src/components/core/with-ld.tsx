import { baseUrl } from "@cafenture/lib/seo";
import { Thing, WithContext } from "schema-dts";

export const WithLd = <T extends Thing>({
  children,
  className,
  jsonLd,
}: {
  children: React.ReactNode;
  className?: string;
  jsonLd: ({ baseUrl }: { baseUrl: string }) => WithContext<T>;
}) => {
  return (
    <main className={className}>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd({ baseUrl })),
        }}
      />
    </main>
  );
};
