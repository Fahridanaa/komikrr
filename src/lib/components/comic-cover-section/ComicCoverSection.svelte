<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";

  export let title: string;
  export let status: string;
  export let type: string;
  export let coverImage: string = "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=500&h=700&fit=crop";
</script>

<div class="space-y-4">
  <div class="aspect-[3/4] overflow-hidden rounded-lg">
    <img
      src={coverImage}
      alt="{title} Cover"
      class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      width="300"
      height="400"
      loading="eager"
    />
  </div>
  <div class="space-y-2">
    <Badge
      variant="outline"
      class="w-full justify-center text-sm capitalize"
    >
      {status}
    </Badge>
    <Badge
      variant="secondary"
      class="w-full justify-center text-sm capitalize"
    >
      {type}
    </Badge>
  </div>
</div>
