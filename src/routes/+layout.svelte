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
<main>
    <slot />
</main>
