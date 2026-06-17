import type {Metadata} from "next";

import {AdminSettingsView} from "@/features/admin/setting/components/admin-settings-view";

export const metadata: Metadata = {
    title: "إعدادات لوحة التحكم | Admin Dashboard",
    description: "واجهة إعدادات إدارية تجريبية داخل Mini Marketplace Gaza تعرض سياسات السوق والمراجعة والتواصل.",
};

export default function AdminSettingsPage() {
    return <AdminSettingsView />;
}
