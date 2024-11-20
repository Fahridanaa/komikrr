<script lang="ts">
  import { CircleUser, Menu, Search } from "lucide-svelte";
  import { Input } from "$lib/components/ui/input";
  import type { Props } from "./index.js";
  import { Sheet, SheetContent, SheetTrigger } from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "$lib/components/ui/dropdown-menu";

  type $$Props = Props;

  export let logo: string;
  export let items: $$Props["items"];
  export let isAuth = false;
</script>

<nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
  <ul class="flex ml-6 gap-4">
    {#each items as item}
      <li>
        <a
          href={item.href}
          class="text-base transition-colors duration-300 hover:text-blue-500"
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<Sheet>
  <SheetTrigger asChild>
    <Button
      variant="outline"
      size="icon"
      class="shrink-0 md:hidden"
    >
      <Menu class="h-5 w-5" />
      <span class="sr-only">Toggle navigation menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav class="grid gap-6 text-lg font-medium">
      <a
        href="/"
        class="flex items-center gap-2 text-lg font-semibold"
      >
        <img src={logo} alt="Logo" class="h-6 w-6" />
        <span class="sr-only">Komikrr</span>
      </a>
      <ul class="flex flex-col gap-4">
        {#each items as item}
          <li>
            <a
              href={item.href}
              class="text-base transition-colors duration-300 hover:text-blue-500"
            >
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </SheetContent>
</Sheet>

<div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
  <form class="ml-auto flex-1 sm:flex-initial">
    <div class="relative">
      <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search Title..."
        class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
      />
    </div>
  </form>

  {#if isAuth}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          class="rounded-full"
        >
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  {:else}
    <div class="hidden items-center gap-2 sm:flex">
      <Button variant="default" size="sm">Sign In</Button>
      <Button variant="secondary" size="sm">Sign Up</Button>
    </div>
  {/if}
</div>
