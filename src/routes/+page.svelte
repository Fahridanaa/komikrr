<script lang="ts">
	import type { PageData } from './$types';
	import * as ScrollArea from '$lib/components/ui/scroll-area';
	import ComicCarousel from '$lib/components/comic-carousel/ComicCarousel.svelte';
	import ComicCard from '$lib/components/comic-card/ComicCard.svelte';
	import PopularComic from '$lib/components/popular-comics/PopularComic.svelte';

	const comic = {
		title: 'Komik Anjay',
		rating: 9.84,
		type: 'Manhwa',
		genres: ['Adventure', 'Fantasy', 'Action'],
		synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
		status: 'Ongoing',
		author: 'John Doe',
		coverImage: '/assets/cover.jpg'
	};

	const comic2 = {
		title: 'Komik Anjay',
		type: 'Manhwa',
		coverImage: '/assets/cover.jpg',
		href: '/',
		chapters: [
			{ number: 2, timeAgo: '20h ago', href: '/' },
			{ number: 1, timeAgo: '20h ago', href: '/' }
		]
	};

	interface ComicMeta {
		title: string;
		author: string;
		type: 'manga' | 'manhwa' | 'manhua';
		status: 'ongoing' | 'completed';
		release: Date;
		updatedOn: Date;
		genres: string[];
		synopsis: string;
	}

	const comics: ComicMeta[] = [
		{
			title: 'Solo Leveling',
			author: 'Chugong',
			type: 'manhwa',
			status: 'completed',
			release: new Date('2018-03-04'),
			updatedOn: new Date('2023-12-25'),
			genres: ['Action', 'Adventure', 'Fantasy', 'Supernatural'],
			synopsis:
				"When mysterious gates appeared in cities around the world, ordinary people received supernatural powers and became known as Hunters. Sung Jin-Woo, the world's weakest Hunter, faces a brutal defeat that changes his destiny forever."
		}
	];

	let { data }: { data: PageData } = $props();
</script>

<section class="hidden w-full md:block">
	<ComicCarousel {comic} />
</section>
<section>
	<article class="space-y-4">
		<h2 class="text-2xl font-semibold">Popular Comic</h2>
		<ScrollArea.Root class="py-2">
			<div class="grid w-max auto-cols-[200px] grid-flow-col grid-rows-1 gap-4">
				{#each Array.from({ length: 10 }) as _, i}
					<ComicCard comic={comic2} />
				{/each}
			</div>
			<ScrollArea.ScrollAreaScrollbar orientation="horizontal" />
		</ScrollArea.Root>
	</article>
</section>
<section class="relative flex justify-center gap-4">
	<article class="relative flex-[2] space-y-4 overflow-x-hidden">
		<h2 class="text-2xl font-semibold">Latest Update</h2>
		<div class="grid auto-rows-auto grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4">
			{#each Array.from({ length: 10 }) as _, i}
				<ComicCard comic={comic2} />
			{/each}
		</div>
	</article>
	<aside class="hidden max-w-72 flex-1 space-y-2 md:block">
		<h2 class="text-xl font-medium">Popular Comics</h2>
		<PopularComic weeklyComics={comics} monthlyComics={comics} allTimeComics={comics} />
	</aside>
</section>
