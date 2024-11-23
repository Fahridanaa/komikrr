<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="min-h-screen bg-background">
	<section class="bg-gray-950 py-8">
		<div>
			{#each data.images as image}
				<img src={image.url} alt="Chapter page" class="mx-auto w-full max-w-3xl" />
			{/each}
		</div>
	</section>
	<section class="my-8 flex items-center justify-end gap-4 px-4">
		{#if Number(data.chapterNumber) > 1}
			<a href={`/comics/${data.comicSlug}/chapter-${String(Number(data.chapterNumber) - 1).padStart(2, '0')}`}>
				<Button variant="outline" size="sm">
					<ChevronLeft className="w-4 h-4 mr-2" />
					Previous
				</Button>
			</a>
		{/if}
		{#if Number(data.chapterNumber) < Number(data.totalChapters)}
			{console.log(data.totalChapters)}
			<a href={`/comics/${data.comicSlug}/chapter-${String(Number(data.chapterNumber) + 1).padStart(2, '0')}`}>
				<Button variant="outline" size="sm">
					Next
					<ChevronRight className="w-4 h-4 ml-2" />
				</Button>
			</a>
		{/if}
	</section>
</article>
