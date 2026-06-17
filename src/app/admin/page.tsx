import type {Metadata} from "next";

import {AdminDashboardView} from "@/features/admin/components/admin-dashboard-view";

export const metadata: Metadata = {
    title: "لوحة التحكم | Mini Marketplace Gaza",
    description: "لوحة إدارة تدريبية لعرض إحصائيات ومنتجات Mini Marketplace Gaza.",
};

export default function AdminPage() {
    return <AdminDashboardView />;
}
