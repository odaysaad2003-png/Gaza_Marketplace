import {CalendarDays, Heart, MapPin, PackageCheck, Tag} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {formatDate, formatPrice} from "@/lib/formatters";

import type {Product} from "../types/product.types";

type ProductInfoCardProps = {
    product: Product;
};

export function ProductInfoCard({product}: ProductInfoCardProps) {
    return (
        <Card className="rounded-[2rem] border-primary/10 bg-card/95 shadow-sm">
            <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {product.isFeatured ? <Badge>مميز</Badge> : null}
                        <Badge variant="secondary">{product.category}</Badge>
                        <Badge variant="outline">{product.condition}</Badge>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{product.title}</h1>

                        <p className="text-3xl font-extrabold text-primary sm:text-4xl">{formatPrice(product.price)}</p>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <ProductMetaItem icon={<Tag className="h-4 w-4" />} label="التصنيف" value={product.category} />

                    <ProductMetaItem icon={<MapPin className="h-4 w-4" />} label="المدينة" value={product.city} />

                    <ProductMetaItem
                        icon={<PackageCheck className="h-4 w-4" />}
                        label="حالة المنتج"
                        value={product.condition}
                    />

                    <ProductMetaItem
                        icon={<CalendarDays className="h-4 w-4" />}
                        label="تاريخ النشر"
                        value={formatDate(product.createdAt)}
                    />
                </div>

                <div className="space-y-3 border-t pt-6">
                    <h2 className="text-lg font-semibold">وصف المنتج</h2>

                    <p className="leading-8 text-muted-foreground">{product.description}</p>
                </div>

                <Button variant="outline" size="lg" className="w-full rounded-2xl">
                    <Heart className="h-5 w-5" />
                    إضافة إلى المفضلة
                </Button>
            </CardContent>
        </Card>
    );
}

type ProductMetaItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

function ProductMetaItem({icon, label, value}: ProductMetaItemProps) {
    return (
        <div className="rounded-2xl border bg-muted/30 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                {icon}
                <span>{label}</span>
            </div>

            <p className="font-semibold">{value}</p>
        </div>
    );
}
