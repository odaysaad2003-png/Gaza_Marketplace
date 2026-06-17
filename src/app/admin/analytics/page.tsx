import type {Metadata} from "next";

import {AdminAnalyticsView} from "@/features/admin/analytics/components/admin-analytics-view";

export const metadata: Metadata = {
    title: "تحليلات السوق | Admin Dashboard",
    description: "لوحة تحليلات إدارية لعرض مؤشرات المنتجات والتصنيفات والمدن والأسعار داخل Mini Marketplace Gaza.",
};

export default function AdminAnalyticsPage() {
    return <AdminAnalyticsView />;
}
