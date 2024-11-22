<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import CoverSection from '$lib/components/comic-cover-section/ComicCoverSection.svelte';
	import GenreList from '$lib/components/comic-genre-list/ComicGenreList.svelte';
	import * as Separator from '$lib/components/ui/separator';
	import MetaInfo from '$lib/components/comic-meta-info/ComicMetaInfo.svelte';
    import ChapterList from '$lib/components/comic-chapter-list/ComicChapterList.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.comic.title} | Komikrr</title>
</svelte:head>
<main class="min-h-screen bg-background">
	<article class="container mx-auto px-4 py-8">
		<Card.Root class="overflow-hidden bg-card">
			<div class="grid gap-6 p-6 md:grid-cols-[300px_1fr]">
				<CoverSection title={data.comic.title} status={data.comic.status} type={data.comic.type} />

				<div class="space-y-6">
					<div class="space-y-2">
						<h1 class="text-3xl font-bold tracking-tight">
							{data.comic.title}
						</h1>
						<MetaInfo author={data.comic.author} release={data.comic.release} updatedOn={data.comic.updatedOn} />
					</div>

					<Separator.Root class="my-4" />

					<GenreList genres={data.comic.genres} />

					<div class="space-y-2">
						<h2 class="font-semibold">Synopsis</h2>
						<p class="text-muted-foreground leading-relaxed">{data.comic.synopsis}</p>
					</div>

					<Separator.Root class="my-4" />

					<ChapterList />
					<slot />
				</div>
			</div>
		</Card.Root>
		<!-- <header class="mb-8">
        <h1 class="text-3xl font-bold mb-2">{data.comic.title}</h1>
        <p class="text-gray-600">by {data.comic.author}</p>
      </header> -->

		<!-- <div class="flex flex-col gap-8 md:flex-row">
			<img
				src="/assets/cover.jpg"
				alt={data.comic.title}
				class="w-full rounded-lg shadow-lg md:w-1/3"
			/>

			<div class="flex-1">
				<p class="mb-4 text-lg">{data.comic.synopsis}</p>

				<div class="mb-4 grid grid-cols-2 gap-4">
					<div>
						<h2 class="font-semibold">Type</h2>
						<p>{data.comic.type}</p>
					</div>
					<div>
						<h2 class="font-semibold">Status</h2>
						<p>{data.comic.status}</p>
					</div>
					<div>
						<h2 class="font-semibold">Release Date</h2>
						<p>{data.comic.release.toLocaleDateString()}</p>
					</div>
					<div>
						<h2 class="font-semibold">Last Updated</h2>
						<p>{data.comic.updatedOn.toLocaleDateString()}</p>
					</div>
				</div>

				<div class="mb-4">
					<h2 class="mb-2 font-semibold">Genres</h2>
					<div class="flex flex-wrap gap-2">
						{#each data.comic.genres as genre}
							<span class="rounded-full bg-gray-200 px-2 py-1 text-sm">{genre}</span>
						{/each}
					</div>
				</div>

				{#if data.comic.rating}
					<div>
						<h2 class="font-semibold">Rating</h2>
						<p>{data.comic.rating}/10</p>
					</div>
				{/if}
			</div>
		</div>
		 -->
	</article>
</main>
