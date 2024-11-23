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
<article class="min-h-screen bg-background">
	<section class="container mx-auto px-4 py-8">
		<Card.Root class="overflow-hidden bg-card">
			<div class="grid gap-6 p-6 md:grid-cols-[300px_1fr]">
				<CoverSection title={data.comic.title} status={data.comic.status} type={data.comic.type} coverImage={data.comic.coverImageUrl} />

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

					<ChapterList slug={data.comic.slug} chapters={data.comicChapters} />
					<slot />
				</div>
			</div>
		</Card.Root>
	</section>
</article>
