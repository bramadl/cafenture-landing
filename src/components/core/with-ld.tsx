import { Thing, WithContext } from "schema-dts";

export const WithLd = <T extends Thing>({
  children,
  jsonLd,
}: {
  children: React.ReactNode;
  jsonLd: WithContext<T>;
}) => {
  return (
    <main>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};
