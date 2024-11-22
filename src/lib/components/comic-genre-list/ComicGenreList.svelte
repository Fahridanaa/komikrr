<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";

  export let genres: string[];
</script>

<div class="space-y-2">
  <h2 class="font-semibold">Genres</h2>
  <div class="flex flex-wrap gap-2">
    {#each genres as genre (genre)}
      <Badge variant="secondary">
        {genre}
      </Badge>
    {/each}
  </div>
</div>
