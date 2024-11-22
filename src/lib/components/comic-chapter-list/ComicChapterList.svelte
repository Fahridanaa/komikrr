<script lang="ts">
  import { formatRelativeTime } from "$lib/utils/helpers";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { Button } from "$lib/components/ui/button";
  import { Clock, BookOpen } from "lucide-svelte";

//   export let slug: string;

  const totalChapters = 10;

  const chapters = Array.from({ length: totalChapters }, (_, i) => ({
    number: totalChapters - i,
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
  }));

  function padChapterNumber(num: number): string {
    return num.toString().padStart(2, "0");
  }
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
      {#each chapters as chapter (chapter.number)}
        <a
          href="/"
          class="block"
        >
          <div class="group flex items-center justify-between rounded-lg border p-3 hover:bg-muted transition-colors">
            <div class="flex items-center gap-3">
              <span class="font-medium group-hover:text-primary transition-colors">
                Chapter {chapter.number}
              </span>
            </div>
            <div class="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock class="w-4 h-4" />
              <span>
                {formatRelativeTime(chapter.date)}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </ScrollArea>
</div>
