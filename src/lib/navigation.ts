export type NavItem = {
    label: string;
    href: string;
};

export const mainNavItems: NavItem[] = [
    {
        label: "الرئيسية",
        href: "/",
    },
    {
        label: "المنتجات",
        href: "/products",
    },
   
    {
        label: "المفضلة",
        href: "/favorites",
    },
    {
        label: "لوحة التحكم",
        href: "/admin",
    },
];
