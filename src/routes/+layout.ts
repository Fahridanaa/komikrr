import type { LayoutLoad } from './$types';

interface NavItem {
    name: string;
    href: string;
}

export const load: LayoutLoad = () => {
    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "List", href: "/list" },
        { name: "Genres", href: "/genres" },
    ];

    return {
        navItems
    };
};
