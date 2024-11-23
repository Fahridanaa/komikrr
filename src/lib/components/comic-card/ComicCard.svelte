<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { Comic } from '$lib/types/comic';
	import { slugify } from '$lib/utils/helpers';

	export let comic;
</script>

<Card.Root class="group flex flex-col justify-between overflow-hidden">
	<Card.CardHeader class="relative p-0">
		<a href={`/comics/${comic.slug}`}>
			<div class="relative aspect-[3/4] overflow-hidden rounded-t-lg">
				<img
					src={comic.coverImageUrl}
					alt={comic.title}
					class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
				/>
				<Badge class="absolute right-2 top-2 bg-primary text-primary-foreground">
					{comic.type}
				</Badge>
			</div>
			<Card.CardTitle
				class="overflow-hidden text-ellipsis px-2 py-2 text-base tracking-tight transition-colors group-hover:text-primary md:px-4"
			>
				<span class="line-clamp-2">{comic.title}</span>
			</Card.CardTitle>
		</a>
	</Card.CardHeader>
	<Card.CardContent class="flex flex-col-reverse p-0 px-2 pb-2 pt-0 sm:gap-0 md:px-4">
		{#each comic.twoLatestChapter as chapter}
			<a href="/comics/{comic.slug}/{slugify(chapter)}">
				<div
					class="mb-2 flex justify-center rounded-lg bg-gray-200 py-2 text-sm transition-colors hover:bg-gray-300"
				>
					<span>{chapter}</span>
				</div>
			</a>
		{/each}
	</Card.CardContent>
</Card.Root>
