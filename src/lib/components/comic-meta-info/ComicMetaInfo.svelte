<script lang="ts">
  import { Calendar, Clock, User2 } from "lucide-svelte";
  import { format } from "date-fns";

  export let author: string;
  export let release: Date;
  export let updatedOn: Date;
</script>

<div class="flex items-center space-x-2 text-muted-foreground">
  <User2 class="w-4 h-4" />
  <span>{author}</span>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="flex items-center gap-2">
    <Calendar class="w-4 h-4 text-muted-foreground" />
    <span>
      Released {format(new Date(release), "MMM dd, yyyy")}
    </span>
  </div>
  <div class="flex items-center gap-2 col-span-2">
    <Clock class="w-4 h-4 text-muted-foreground" />
    <span>
      Updated {format(new Date(updatedOn), "MMM dd, yyyy")}
    </span>
  </div>
</div>
