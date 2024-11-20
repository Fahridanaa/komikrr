<!-- src/lib/components/comic-card/ComicCard.svelte -->
<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import type { Props } from './index';

  type $$Props = Props;

  export let comic: $$Props['comic'];
</script>

<Card.Root class="group overflow-hidden">
  <Card.CardHeader class="relative p-0">
    <a href={comic.href}>
      <div class="relative aspect-[3/4] overflow-hidden rounded-t-lg">
        <img
          src={comic.coverImage}
          alt={comic.title}
          class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <Badge class="absolute right-2 top-2 bg-primary text-primary-foreground">
          {comic.type}
        </Badge>
      </div>
      <Card.CardTitle
        class="line-clamp-2 px-4 py-2 text-base transition-colors group-hover:text-primary"
      >
        {comic.title}
      </Card.CardTitle>
    </a>
  </Card.CardHeader>
  <Card.CardContent class="p-4 pt-0">
    {#each comic.chapters as chapter}
      <a href={chapter.href} class="block">
        <div
          class="flex justify-between rounded px-2 py-1 text-sm transition-colors hover:bg-muted"
        >
          <span>Chapter {chapter.number}</span>
          <span class="text-muted-foreground">{chapter.timeAgo}</span>
        </div>
      </a>
    {/each}
  </Card.CardContent>
</Card.Root>
