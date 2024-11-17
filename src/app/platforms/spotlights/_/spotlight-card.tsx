import { Spotlight } from "./spotlight";

export const SpotlightCard = () => {
  return (
    <article className="group relative flex flex-col rounded-lg overflow-hidden bg-slate-50 border border-slate-200 shadow">
      <figure className="w-full aspect-video bg-slate-200 animate-pulse"></figure>
      <Spotlight className="p-4 xl:p-6">
        <Spotlight.Tags />
        <header className="flex flex-col gap-2">
          <Spotlight.Title url="/platforms/spotlights/slug">
            Mengenal Pentingnya Platform Rekomendasi
          </Spotlight.Title>
          <Spotlight.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            corrupti vero incidunt repellendus, rerum ea quisquam repudiandae,
            hic et eius debitis omnis optio. Nam quae tenetur quam atque amet.
            Neque obcaecati dolore, soluta libero facere qui reprehenderit
            necessitatibus natus reiciendis molestias amet officia nam dolorem
            mollitia quaerat ut nobis hic inventore harum sint adipisci! Culpa
            commodi mollitia repellendus perspiciatis quibusdam vitae obcaecati
            sequi totam.
          </Spotlight.Description>
        </header>
        <Spotlight.Author />
      </Spotlight>
    </article>
  );
};
