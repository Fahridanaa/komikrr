<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
</script>

<main class="min-h-screen bg-background">
	<header
		class="sticky top-0 py-1 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-14 items-center justify-between px-4">
			<a href={`/`} class="flex items-center gap-2">
				<Button variant="ghost" size="sm">
					<ChevronLeft className="w-4 h-4 mr-2" />
					Back to Series
				</Button>
			</a>
			<div class="flex items-center gap-2">
				<a href={`/`}>
					<Button variant="outline" size="sm">
						<ChevronLeft className="w-4 h-4 mr-2" />
						Previous
					</Button>
				</a>
				<span class="text-sm font-medium">Chapter 2</span>
				<a href={`/`}>
					<Button variant="outline" size="sm">
						Next
						<ChevronRight className="w-4 h-4 ml-2" />
					</Button>
				</a>
			</div>
		</div>
	</header>

	<div class="container mx-auto max-w-4xl py-8">
		<div></div>

		<div class="mt-8 flex items-center justify-end gap-4">
			<a href="/">
				<Button variant="outline" size="lg">
					<ChevronLeft className="w-4 h-4 mr-2" />
					Previous Chapter
				</Button>
			</a>
			<a href="/">
				<Button variant="outline" size="lg">
					Next Chapter
					<ChevronRight className="w-4 h-4 ml-2" />
				</Button>
			</a>
		</div>
	</div>
</main>
