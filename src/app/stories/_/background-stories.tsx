import { Article } from "@cafenture/components/core/article";
import { problems } from "@cafenture/content/problems";

export const BackgroundStories = () => {
  return (
    <article className="flex items-stretch justify-between gap-[100px]">
      <ul className="flex-1 max-w-[480px] flex flex-col gap-16">
        {problems.map(({ description, title }, key) => (
          <li key={key}>
            <Article description={description} title={title}>
              <div className="text-4xl font-semibold text-secondary opacity-25">
                {`0${key + 1}`}
              </div>
            </Article>
          </li>
        ))}
      </ul>
      <figure className="hidden flex-1 sm:flex flex-col gap-6">
        <div className="w-full flex-1 rounded-lg bg-slate-200" />
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:shrink-0 w-full xl:w-[300px] h-[150px] md:h-[200px] xl:h-[200px] rounded-lg bg-slate-200" />
          <div className="w-full xl:w-auto xl:flex-1 h-[150px] md:h-[250px] xl:h-[200px] rounded-lg bg-slate-200" />
        </div>
      </figure>
    </article>
  );
};
