import {CalendarDays, MapPin, PackageCheck, ShieldCheck, Tag} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {FavoriteButton} from "@/features/favorites/components/favorite-button";
import {formatDate, formatPrice} from "@/lib/formatters";

import type {Product} from "../types/product.types";

type ProductInfoCardProps = {
    product: Product;
};

export function ProductInfoCard({product}: ProductInfoCardProps) {
    return (
        <Card className="overflow-hidden rounded-[1.75rem] border-border/70 bg-card/90 shadow-sm shadow-black/[0.03] dark:shadow-black/20 sm:rounded-[2rem]">
            <CardContent className="space-y-6 p-5 sm:space-y-7 sm:p-6">
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {product.isFeatured ? <Badge className="rounded-full px-3 py-1">مميز</Badge> : null}

                        <Badge variant="secondary" className="rounded-full px-3 py-1">
                            {product.category}
                        </Badge>

                        <Badge variant="outline" className="rounded-full px-3 py-1">
                            {product.condition}
                        </Badge>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-2xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
                            {product.title}
                        </h1>

                        <p className="text-2xl font-black text-primary sm:text-4xl">{formatPrice(product.price)}</p>
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

                <div className="rounded-3xl border border-border/70 bg-muted/30 p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <h2 className="text-base font-bold sm:text-lg">وصف المنتج</h2>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        {product.description}
                    </p>
                </div>

                <FavoriteButton productId={product.id} variant="full" />
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
        <div className="rounded-3xl border border-border/70 bg-background/70 p-4 transition-colors hover:bg-secondary/60">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">{icon}</span>
                <span>{label}</span>
            </div>

            <p className="line-clamp-1 font-bold text-foreground">{value}</p>
        </div>
    );
}
