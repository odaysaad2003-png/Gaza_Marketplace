import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {formatDate, formatPrice} from "@/lib/formatters";
import type {Product} from "@/features/products/types/product.types";

type AdminInsightsSectionProps = {
    topCategory: [string, number] | null;
    topCity: [string, number] | null;
    highestPriceProduct: Product | null;
    latestProduct: Product | null;
};

export function AdminInsightsSection({
    topCategory,
    topCity,
    highestPriceProduct,
    latestProduct,
}: AdminInsightsSectionProps) {
    return (
        <Card className="rounded-[2rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
            <CardHeader>
                <CardTitle className="text-xl font-black text-foreground">رؤى سريعة</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <InsightItem
                    label="أكثر تصنيف نشاطًا"
                    value={topCategory ? topCategory[0] : "غير متوفر"}
                    helper={topCategory ? `${topCategory[1]} منتجات` : "لا توجد بيانات كافية"}
                />

                <InsightItem
                    label="أكثر مدينة ظهورًا"
                    value={topCity ? topCity[0] : "غير متوفر"}
                    helper={topCity ? `${topCity[1]} منتجات` : "لا توجد بيانات كافية"}
                />

                <InsightItem
                    label="أغلى منتج"
                    value={highestPriceProduct?.title ?? "غير متوفر"}
                    helper={highestPriceProduct ? formatPrice(highestPriceProduct.price) : "لا توجد بيانات كافية"}
                />

                <InsightItem
                    label="أحدث منتج"
                    value={latestProduct?.title ?? "غير متوفر"}
                    helper={latestProduct ? formatDate(latestProduct.createdAt) : "لا توجد بيانات كافية"}
                />
            </CardContent>
        </Card>
    );
}

type InsightItemProps = {
    label: string;
    value: string;
    helper: string;
};

function InsightItem({label, value, helper}: InsightItemProps) {
    return (
        <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
            <Badge variant="secondary" className="rounded-full">
                {label}
            </Badge>

            <p className="mt-4 line-clamp-1 text-base font-bold text-foreground">{value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{helper}</p>
        </div>
    );
}
