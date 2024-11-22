<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import ComicCard from '$lib/components/comic-card/ComicCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let currentPage = 1;
  // Adjust items per page based on screen size
  let itemsPerPage = 20;

  // Update itemsPerPage when window resizes
  function handleResize() {
    const width = window.innerWidth;
    if (width < 640) { // sm
      itemsPerPage = 8;
    } else if (width < 768) { // md
      itemsPerPage = 12;
    } else if (width < 1024) { // lg
      itemsPerPage = 15;
    } else { // xl and above
      itemsPerPage = 20;
    }
  }

  // Client-side only
  let mounted = false;
  import { onMount } from 'svelte';
  onMount(() => {
    mounted = true;
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  $: totalPages = Math.ceil(data.comics.length / itemsPerPage);
  $: paginatedComics = data.comics.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Ensure current page is valid when itemsPerPage changes
  $: {
    const maxPages = Math.ceil(data.comics.length / itemsPerPage);
    if (currentPage > maxPages) {
      currentPage = maxPages;
    }
  }

  function nextPage() {
    if (currentPage < totalPages) currentPage++;
  }

  function prevPage() {
    if (currentPage > 1) currentPage--;
  }

  // Generate page numbers for pagination
  $: visiblePages = generateVisiblePages(currentPage, totalPages);

  function generateVisiblePages(current: number, total: number) {
    const delta = 1; // Number of pages to show on each side of current page
    const pages: (number | '...')[] = [];

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 || // First page
        i === total || // Last page
        (i >= current - delta && i <= current + delta) // Pages around current
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return pages;
  }
</script>

<div class="container mx-auto px-4 py-8 space-y-8">
  <!-- Grid with responsive columns -->
  <div
    class="min-h-[80vh] grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr"
  >
    {#each paginatedComics as comic}
      <div class="h-full">
        <ComicCard {comic} />
      </div>
    {/each}
  </div>

  <!-- Pagination controls -->
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
    <!-- Mobile view: Stacked -->
    <div class="flex items-center justify-center space-x-2 order-2 sm:order-1">
      <Button
        variant="outline"
        size="icon"
        on:click={prevPage}
        disabled={currentPage === 1}
        class="hidden sm:inline-flex"
      >
        <ChevronLeft class="h-4 w-4" />
      </Button>

      <!-- Desktop pagination numbers -->
      <div class="hidden sm:flex items-center space-x-2">
        {#each visiblePages as page}
          {#if page === '...'}
            <span class="px-2 text-muted-foreground">...</span>
          {:else}
            <Button
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              on:click={() => currentPage = page}
            >
              {page}
            </Button>
          {/if}
        {/each}
      </div>

      <Button
        variant="outline"
        size="icon"
        on:click={nextPage}
        disabled={currentPage === totalPages}
        class="hidden sm:inline-flex"
      >
        <ChevronRight class="h-4 w-4" />
      </Button>
    </div>

    <!-- Mobile pagination controls -->
    <div class="flex items-center space-x-4 sm:hidden order-1">
      <Button variant="outline" on:click={prevPage} disabled={currentPage === 1}>
        <ChevronLeft class="h-4 w-4 mr-2" />
        Previous
      </Button>
      <Button variant="outline" on:click={nextPage} disabled={currentPage === totalPages}>
        Next
        <ChevronRight class="h-4 w-4 ml-2" />
      </Button>
    </div>
  </div>

  <!-- Loading state -->
  {#if !mounted}
    <div class="flex justify-center py-8">
      <div class="animate-pulse">Loading...</div>
    </div>
  {/if}
</div>
