import {BarChart3, LayoutDashboard, PackageSearch, Settings} from "lucide-react";
import type {LucideIcon} from "lucide-react";

export type AdminNavItem = {
    label: string;
    href: string;
    icon: LucideIcon;
    description: string;
};

export const adminNavItems: AdminNavItem[] = [
    {
        label: "نظرة عامة",
        href: "/admin",
        icon: LayoutDashboard,
        description: "إحصائيات السوق والرؤى السريعة",
    },
    {
        label: "المنتجات",
        href: "/admin/products",
        icon: PackageSearch,
        description: "إدارة وعرض منتجات السوق",
    },
    {
        label: "التحليلات",
        href: "/admin/analytics",
        icon: BarChart3,
        description: "مؤشرات الأداء والتوزيع",
    },
    {
        label: "الإعدادات",
        href: "/admin/settings",
        icon: Settings,
        description: "إعدادات إدارية تجريبية",
    },
];
