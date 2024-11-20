// src/lib/components/navigation-bar/index.ts
import NavigationBar from './NavigationBar.svelte';

type Props = {
    logo: string;
    items: { name: string; href: string; }[];
    isAuth?: boolean;
  };

export { NavigationBar, type Props };
export default NavigationBar;
