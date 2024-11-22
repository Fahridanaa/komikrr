<!-- src/lib/components/comic-carousel/CarouselDots.svelte -->
<script lang="ts">
  import { cn } from "$lib/utils";

  export let api: { selectedScrollSnap: () => number; scrollTo: (index: number) => void } | null = null;
  export let count = 0;

  $: activeIndex = api ? api.selectedScrollSnap() : 0;

  function onClick(index: number) {
    api?.scrollTo(index);
  }
</script>

<div class="flex justify-center mt-4 gap-2">
  {#each Array(count) as _, index}
    <button
      class={cn(
        "w-2 h-2 rounded-full transition-all focus:outline-none",
        activeIndex === index ? "bg-primary" : "bg-primary/20"
      )}
      aria-label={`Go to slide ${index + 1}`}
      on:click={() => onClick(index)}
    ></button>
  {/each}
</div>
