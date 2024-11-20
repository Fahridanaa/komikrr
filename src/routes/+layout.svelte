<script lang="ts">
    import '../app.css';
    import NavigationBar from '$lib/components/ui/navigation-bar';
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<svelte:head>
	<title>Komikrr - Tempat Baca Komik</title>
</svelte:head>
<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
    <NavigationBar logo="/logo.png" items={data.navItems} />
</header>
<main class="max-w-[1224px] mx-auto md:p-8 p-4 flex flex-1 flex-col gap-4 md:gap-8">
	<slot />
</main>
