import type {Metadata} from "next";

import {Card, CardContent} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "التحليلات | Mini Marketplace Gaza",
    description: "صفحة تحليلات إدارية تجريبية.",
};

export default function AdminAnalyticsPage() {
    return (
        <Card className="rounded-[2rem] border-border/70 bg-card/85">
            <CardContent className="p-6">
                <p className="font-bold text-foreground">التحليلات قادمة في Sprint لاحق.</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    سنضيف توزيع المنتجات حسب التصنيف والمدينة، وأعلى المنتجات سعرًا، وأحدث المنتجات.
                </p>
            </CardContent>
        </Card>
    );
}
