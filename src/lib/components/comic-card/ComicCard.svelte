<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import type { Comic } from '$lib/types/comic';
	import { slugify } from "$lib/utils/helpers";

  export let comic;
</script>

<Card.Root class="group overflow-hidden">
  <Card.CardHeader class="relative p-0">
    <a href={`/comics/${comic.slug}`}>
      <div class="relative aspect-[3/4] overflow-hidden rounded-t-lg">
        <img
          src={comic.coverImageUrl}
          alt={comic.title}
          class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <Badge class="absolute right-2 top-2 bg-primary text-primary-foreground">
          {comic.type}
        </Badge>
      </div>
      <Card.CardTitle
        class="line-clamp-2 px-2 md:px-4 py-2 text-base transition-colors group-hover:text-primary"
      >
        {comic.title}
      </Card.CardTitle>
    </a>
  </Card.CardHeader>
  <Card.CardContent class="p-0 pb-2 px-2 md:px-4 flex flex-col-reverse pt-0 sm:gap-0">
    {#each comic.twoLatestChapter as chapter}
      <a href="/comics/{comic.slug}/{slugify(chapter)}">
        <div
          class="flex justify-center bg-gray-200 py-2 text-sm transition-colors hover:bg-gray-300 rounded-lg mb-2"
        >
          <span>{chapter}</span>
        </div>
      </a>
    {/each}
  </Card.CardContent>
</Card.Root>
