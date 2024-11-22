<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import type { Comic } from '$lib/types/comic';

  export let comic: Comic;
</script>

<Card.Root class="group overflow-hidden">
  <Card.CardHeader class="relative p-0">
    <a href={`/comic/${comic.id}`}>
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
        class="line-clamp-2 px-4 py-2 text-base transition-colors group-hover:text-primary"
      >
        {comic.title}
      </Card.CardTitle>
    </a>
  </Card.CardHeader>
  <Card.CardContent class="p-4 pt-0">
    <a href="/" class="block">
        <div
          class="flex justify-between rounded px-2 py-1 text-sm transition-colors hover:bg-muted"
        >
          <span>Chapter 2</span>
          <span class="text-muted-foreground">2 days ago</span>
        </div>
      </a>
    <a href="/" class="block">
        <div
          class="flex justify-between rounded px-2 py-1 text-sm transition-colors hover:bg-muted"
        >
          <span>Chapter 1</span>
          <span class="text-muted-foreground">7 days ago</span>
        </div>
      </a>
  </Card.CardContent>
</Card.Root>
