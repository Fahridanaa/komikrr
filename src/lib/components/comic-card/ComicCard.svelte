<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import type { Comic } from '$lib/types/comic';

  export let comic: Comic;
</script>

<Card.Root class="group overflow-hidden">
  <Card.CardHeader class="relative p-0">
    <a href={`/comics/${comic.slug}`}>
      <div class="relative aspect-[3/4] overflow-hidden rounded-t-lg">
        <img
          src="/assets/cover.jpg"
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
  <Card.CardContent class="p-0 pb-2 px-2 md:px-4 pt-0 flex flex-col gap-2 sm:gap-0">
    <a href="/">
        <div
          class="flex justify-center bg-gray-200 py-2 sm:justify-between sm:bg-white rounded text-sm transition-colors hover:bg-muted"
        >
          <span>Chapter 2</span>
          <span class="hidden sm:block text-muted-foreground">2 days ago</span>
        </div>
      </a>
    <a href="/">
        <div
          class="flex justify-center bg-gray-200 py-2 sm:justify-between sm:bg-white rounded text-sm transition-colors hover:bg-muted"
        >
          <span>Chapter 1</span>
          <span class="hidden sm:block text-muted-foreground">7 days ago</span>
        </div>
      </a>
  </Card.CardContent>
</Card.Root>
