<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import PopularList from "$lib/components/popular-list/PopularList.svelte";
  import type { Comic } from '$lib/types/comic';

  export let weeklyComics: Comic[];
  export let monthlyComics: Comic[];
  export let allTimeComics: Comic[];
</script>

<Tabs.Root value="weekly">
  <Tabs.TabsList class="grid w-full grid-cols-3">
    <Tabs.TabsTrigger value="weekly">Weekly</Tabs.TabsTrigger>
    <Tabs.TabsTrigger value="monthly">Monthly</Tabs.TabsTrigger>
    <Tabs.TabsTrigger value="all">All Time</Tabs.TabsTrigger>
  </Tabs.TabsList>
  <Card.Root>
    <Card.CardContent class="p-0">
      <Tabs.TabsContent value="weekly" class="mt-0">
        <PopularList comics={weeklyComics} />
      </Tabs.TabsContent>
      <Tabs.TabsContent value="monthly" class="mt-0">
        <PopularList comics={monthlyComics} />
      </Tabs.TabsContent>
      <Tabs.TabsContent value="all" class="mt-0">
        <PopularList comics={allTimeComics} />
      </Tabs.TabsContent>
    </Card.CardContent>
  </Card.Root>
</Tabs.Root>
