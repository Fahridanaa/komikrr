<script lang="ts">
  import type { PageData } from './$types';
  import * as ScrollArea from '$lib/components/ui/scroll-area';
  import ComicCarousel from '$lib/components/comic-carousel/ComicCarousel.svelte';
  import ComicCard from '$lib/components/comic-card/ComicCard.svelte';
  import PopularComic from '$lib/components/popular-comics/PopularComic.svelte';

  export let data: PageData;
</script>
<article class="max-w-[1224px] mx-auto md:p-8 p-4 flex flex-1 flex-col gap-4 md:gap-8">
  <section class="hidden w-full md:block">
    <ComicCarousel comics={data.featuredComics} />
  </section>

  <section>
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Popular Comics</h2>
      <ScrollArea.Root class="py-2">
        <div class="grid w-max auto-cols-[200px] grid-flow-col grid-rows-1 gap-4">
          {#each data.popularComics as comic}
            <ComicCard {comic} />
          {/each}
        </div>
        <ScrollArea.ScrollAreaScrollbar orientation="horizontal" />
      </ScrollArea.Root>
    </div>
  </section>

  <section class="relative flex justify-center gap-4">
    <section class="relative flex-[2] space-y-4 overflow-x-hidden">
      <h2 class="text-2xl font-semibold">Latest Updates</h2>
      <div class="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
        {#each data.latestUpdates as comic}
          <ComicCard {comic} />
        {/each}
      </div>
    </section>
    <aside class="hidden max-w-72 flex-1 space-y-2 md:block">
      <h2 class="text-xl font-medium">Popular Comics</h2>
      <PopularComic
        weeklyComics={data.weeklyComics}
        monthlyComics={data.monthlyComics}
        allTimeComics={data.allTimeComics}
      />
    </aside>
  </section>
</article>
