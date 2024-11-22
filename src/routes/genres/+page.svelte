<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Genre } from '$lib/types/genre';
  import type { PageData } from './$types';

  export let data: PageData;

  let searchQuery = '';
  let filteredGenres: Genre[] = data.genres;

  $: {
    filteredGenres = data.genres.filter(genre =>
      genre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      genre.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
</script>

<div class="container mx-auto px-4 py-8 space-y-6">
  <h1 class="text-4xl font-bold text-center">Comic Genres</h1>

  <div class="max-w-md mx-auto">
    <input
      type="search"
      placeholder="Search genres..."
      class="w-full px-4 py-2 rounded-lg border bg-background hover:bg-accent/50 focus:bg-background transition-colors"
      bind:value={searchQuery}
    />
  </div>

  {#await import('lucide-svelte') then iconsModule}
    {@const icons = iconsModule}
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Comic genres"
    >
      {#each filteredGenres as genre (genre.slug)}
        <div
          class="group"
          transition:fade
          role="listitem"
        >
          <a
            href="/genres/{genre.slug}"
            class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
          >
            <div class="relative overflow-hidden rounded-lg shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
              <div class="aspect-video relative overflow-hidden">
                <img
                  src={genre.image}
                  alt=""
                  class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-colors duration-300"
                  aria-hidden="true"
                ></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <svelte:component
                    this={(icons as any)[genre.icon]}
                    class="w-12 h-12 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div class="p-6">
                <h2 class="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {genre.name}
                </h2>
                <p class="text-muted-foreground line-clamp-2">
                  {genre.description}
                </p>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  {/await}

  {#if filteredGenres.length === 0}
    <div class="text-center py-12 text-muted-foreground">
      <p>No genres found matching "{searchQuery}"</p>
    </div>
  {/if}
</div>
