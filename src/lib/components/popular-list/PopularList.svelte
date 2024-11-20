<!-- src/lib/components/popular-list/PopularList.svelte -->
<script lang="ts">
	import { type Props } from "./index";


  type $$Props = Props;

  export let comics: $$Props["comics"];
</script>

<div class="divide-y">
  {#each comics.slice(0, 5) as comic, index}
    <article class="relative p-4">
      <div class="absolute right-4 top-0">
        <span class="bg-primary text-primary-foreground px-2 py-1 text-sm font-bold rounded-b">
          {index + 1}
        </span>
      </div>

      <a
        href="/"
        class="flex gap-4 group"
      >
        <img
          src="/assets/cover.jpg"
          alt={comic.title}
          class="w-20 h-28 object-cover rounded"
        />
        <div class="flex-1">
          <h3 class="font-medium group-hover:text-primary transition-colors line-clamp-2">
            {comic.title}
          </h3>
          <p class="text-sm text-muted-foreground mt-1">
            {comic.genres.slice(0, 3).join(", ")}
          </p>
          <p class="text-sm text-muted-foreground mt-1">
            {new Date(comic.release).getFullYear()}
          </p>
        </div>
      </a>
    </article>
  {/each}
</div>
