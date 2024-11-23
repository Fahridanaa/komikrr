<script lang="ts">
  import { Star } from 'lucide-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  import * as Card from '$lib/components/ui/card';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import { Badge } from '$lib/components/ui/badge';
  import type { Comic } from '$lib/types/comic';

  export let comics: Comic[];

  const plugin = Autoplay({ delay: 8000, stopOnInteraction: true });
</script>

<Carousel.Root
  plugins={[plugin]}
  class="w-full"
  on:mouseenter={plugin.stop}
  on:mouseleave={plugin.reset}
>
  <Carousel.Content>
    {#each comics as comic}
      <Carousel.Item>
        <Card.Root class="relative overflow-hidden">
          <Card.CardContent class="relative flex h-[400px] p-0">
            <div class="absolute inset-0">
              <img
                src={comic.coverImageUrl}
                alt={comic.title}
                class="h-full w-full object-cover blur-sm brightness-[0.2]"
              />
            </div>
            <div class="relative z-10 flex w-full gap-4 p-8 text-white">
              <div class="flex-1 space-y-4">
                <div>
                  <Badge variant="default" class="mt-2 bg-white text-black text-sm">{comic.type}</Badge>
                  <h2 class="text-2xl font-semibold transition-colors">
                    <a href={`/comic/${comic.id}`}>{comic.title}</a>
                  </h2>
                  <div class="flex items-center gap-2">
                    <Star class="h-5 w-5 text-yellow-400" />
                    <span>{comic.rating ?? 'N/A'}</span>
                  </div>
                  <p class="mt-2 flex gap-2 text-muted-foreground">
                     {#each comic.genres as genre}
                      <Badge variant="secondary" class="rounded-full">{genre}</Badge>
                     {/each}
                  </p>
                </div>

                <div class="space-y-2">
                  <h4 class="font-semibold">Synopsis</h4>
                  <p class="line-clamp-4">
                    {comic.synopsis}
                  </p>
                </div>

                <div class="space-y-1 text-sm">
                  <p>
                    <span class="font-semibold">Status:</span>
                    {' '}{comic.status}
                  </p>
                  <p>
                    <span class="font-semibold">Author:</span>
                    {' '}{comic.author}
                  </p>
                </div>
              </div>

              <div class="flex flex-shrink-0 items-center">
                <a href={`/comic/${comic.id}`} class="block">
                  <img
                    src={comic.coverImageUrl}
                    alt={comic.title}
                    class="h-60 w-48 rounded-lg object-cover transition-transform hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </Card.CardContent>
        </Card.Root>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
</Carousel.Root>
