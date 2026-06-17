import type {Metadata} from "next";

import {Card, CardContent} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "إدارة المنتجات | Mini Marketplace Gaza",
    description: "صفحة إدارة منتجات السوق داخل لوحة التحكم.",
};

export default function AdminProductsPage() {
    return (
        <Card className="rounded-[2rem] border-border/70 bg-card/85">
            <CardContent className="p-6">
                <p className="font-bold text-foreground">صفحة إدارة المنتجات ستُفصل في Sprint القادم.</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    حاليًا جدول المنتجات موجود داخل صفحة النظرة العامة. في الخطوة القادمة سننقله هنا مع البحث والفلاتر.
                </p>
            </CardContent>
        </Card>
    );
}
