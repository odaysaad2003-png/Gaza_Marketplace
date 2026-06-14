"use client";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {useLatestProducts, useProducts} from "../hooks/use-products";

export function LatestProductsPreview() {
    const {data: latestProducts, isLoading, isError} = useLatestProducts(3);
    const {data: Products} = useProducts();

    return (
        <Card className="overflow-hidden border-primary/10 bg-gradient-to-br from-primary/10 via-background to-muted shadow-sm">
            <CardContent className="p-6">
                <div className="space-y-4 rounded-3xl border bg-background/80 p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-medium">أحدث المنتجات</span>

                        <Badge variant="secondary">من Mock API</Badge>
                    </div>

                    {isLoading ? <LatestProductsSkeleton /> : null}

                    {isError ? (
                        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                            حدث خطأ أثناء تحميل المنتجات. حاول مرة أخرى لاحقًا.
                        </div>
                    ) : null}

                    {!isLoading && !isError ? (
                        <div className="grid gap-3">
                            {Products?.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between gap-4 rounded-2xl border bg-card p-4 transition-colors hover:bg-muted/50"
                                >
                                    <div className="min-w-0">
                                        <h3 className="truncate font-medium">{product.title}</h3>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {product.category} — {product.city}
                                        </p>
                                    </div>

                                    <span className="shrink-0 font-bold text-primary">
                                        ₪ {product.price.toLocaleString("ar")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </CardContent>
        </Card>
    );
}
// emptystat
function LatestProductsSkeleton() {
    return (
        <div className="grid gap-3">
            {Array.from({length: 3}).map((_, index) => (
                <div key={index} className="flex items-center justify-between gap-4 rounded-2xl border bg-card p-4">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-3 w-28" />
                    </div>

                    <Skeleton className="h-5 w-16" />
                </div>
            ))}
        </div>
    );
}
