import Image from "next/image";
import { Spotlight } from "./spotlight";

export const FeaturedSpotlight = () => {
  return (
    <section className="group relative w-full grid xl:grid-cols-[1.25fr_2fr] grid-rows-1 gap-0 xl:gap-16 rounded-xl bg-slate-50">
      <Spotlight className="justify-center p-6 pt-0 xl:pr-0 xl:p-16">
        <header className="flex flex-col gap-2">
          <p className="text-secondary font-semibold text-sm">
            Spotlight Unggulan
          </p>
          <Spotlight.Title url="/platforms/spotlights/slug">
            Mengenal Pentingnya Platform Rekomendasi
          </Spotlight.Title>
        </header>
        <Spotlight.Description className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti
          vero incidunt repellendus, rerum ea quisquam repudiandae, hic et eius
          debitis omnis optio. Nam quae tenetur quam atque amet. Neque obcaecati
          dolore, soluta libero facere qui reprehenderit necessitatibus natus
          reiciendis molestias amet officia nam dolorem mollitia quaerat ut
          nobis hic inventore harum sint adipisci! Culpa commodi mollitia
          repellendus perspiciatis quibusdam vitae obcaecati sequi totam.
        </Spotlight.Description>
        <Spotlight.Author />
      </Spotlight>
      <figure className="row-start-1 xl:col-start-2 aspect-video p-6">
        <Image
          alt="Mengapa Platform Rekomendasi Itu Penting: Temukan Kedai Kopi yang Sempurna untuk Anda"
          className="w-full h-full object-cover rounded-lg pointer-events-none select-none"
          height={320}
          src="https://images.unsplash.com/photo-1651449815995-9419a04685aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={640}
        />
      </figure>
    </section>
  );
};
