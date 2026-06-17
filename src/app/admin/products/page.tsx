import type {Metadata} from "next";

import {AdminProductsPageView} from "@/features/admin/products/components/admin-products-page-view";

export const metadata: Metadata = {
    title: "إدارة المنتجات | Mini Marketplace Gaza",
    description: "صفحة إدارة وفرز منتجات السوق داخل لوحة التحكم.",
};

export default function AdminProductsPage() {
    return <AdminProductsPageView />;
}
