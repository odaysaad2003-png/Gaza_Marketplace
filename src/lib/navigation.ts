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
        label: "أضف منتجك",
        href: "/products/create",
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
