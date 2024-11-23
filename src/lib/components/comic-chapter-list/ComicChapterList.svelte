<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import {  BookOpen } from "lucide-svelte";
  import { slugify } from "$lib/utils/helpers";

  export let slug: string;
  export let chapters: string[];
</script>

<div class="space-y-4">
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <BookOpen class="w-5 h-5" />
      Chapter List
    </h2>
  </div>

  <ScrollArea class="h-[600px] rounded-md border p-4">
    <div class="space-y-4">
      {#each chapters as chapter}
        <a
          href="/comics/{slug}/{slugify(chapter)}"
          class="block"
        >
          <div class="group flex items-center justify-between rounded-lg border p-3 hover:bg-muted transition-colors">
            <div class="flex items-center gap-3">
              <span class="font-medium group-hover:text-primary transition-colors">
                {chapter}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </ScrollArea>
</div>
