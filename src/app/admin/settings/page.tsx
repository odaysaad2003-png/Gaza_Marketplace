
import type {Metadata} from "next";

import {Card, CardContent} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "إعدادات الإدارة | Mini Marketplace Gaza",
    description: "صفحة إعدادات إدارية تجريبية.",
};

export default function AdminSettingsPage() {
    return (
        <Card className="rounded-[2rem] border-border/70 bg-card/85">
            <CardContent className="p-6">
                <p className="font-bold text-foreground">إعدادات إدارية تجريبية.</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    لا يوجد Auth أو Backend حقيقي حاليًا، لذلك هذه الصفحة ستكون Placeholder حتى مرحلة الصلاحيات لاحقًا.
                </p>
            </CardContent>
        </Card>
    );
}