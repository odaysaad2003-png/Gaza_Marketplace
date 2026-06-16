"use client";

import Link from "next/link";
import {Heart, ShoppingBag} from "lucide-react";

import {SkeletonList} from "@/components/shared/loading-skeleton";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {ProductGrid} from "@/features/products/components/product-grid";
import {useProducts} from "@/features/products/hooks/use-products";
import {useFavorites} from "../hooks/use-favorites";

export function FavoritesView() {
    const {favoriteIds, favoriteCount, clearFavorites, isHydrated} = useFavorites();

    const {data: products, isLoading, isError, refetch} = useProducts();

    const favoriteProducts = products?.filter((product) => favoriteIds.includes(product.id)) ?? [];

    if (!isHydrated || isLoading) {
        return <FavoritesSkeleton />;
    }

    if (isError) {
        return (
            <div className="rounded-[2rem] border border-destructive/30 bg-destructive/10 p-8 text-center">
                <h2 className="text-2xl font-bold text-destructive">حدث خطأ أثناء تحميل المفضلة</h2>

                <p className="mt-3 text-sm text-muted-foreground">لم نتمكن من تحميل المنتجات الآن. حاول مرة أخرى.</p>

                <Button className="mt-6" variant="outline" onClick={() => refetch()}>
                    إعادة المحاولة
                </Button>
            </div>
        );
    }

    if (favoriteCount === 0) {
        return <FavoritesEmptyState />;
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-3 rounded-[2rem] border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-bold">منتجاتك المحفوظة</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        لديك {favoriteProducts.length} منتج محفوظ في المفضلة.
                    </p>
                </div>

                <Button variant="outline" onClick={clearFavorites}>
                    مسح المفضلة
                </Button>
            </div>

            <ProductGrid products={favoriteProducts} />
        </div>
    );
}

function FavoritesEmptyState() {
    return (
        <div className="rounded-[2rem] border bg-card p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-2xl font-bold">لا توجد منتجات في المفضلة</h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                احفظ المنتجات التي تعجبك من خلال الضغط على زر القلب، ثم ارجع لهذه الصفحة لمراجعتها بسرعة.
            </p>

            <Button asChild className="mt-6 rounded-2xl">
                <Link href="/products">
                    <ShoppingBag className="h-5 w-5" />
                    تصفح المنتجات
                </Link>
            </Button>
        </div>
    );
}

function FavoritesSkeleton() {
    return (
        <div className="space-y-8">
            <div className="rounded-[2rem] border bg-card p-5">
                <Skeleton className="h-7 w-48" />
                <Skeleton className="mt-3 h-4 w-64" />
            </div>

            <SkeletonList
                count={4}
                className="gap-5 sm:grid-cols-2 lg:grid-cols-4"
                itemClassName="h-[315px] overflow-hidden rounded-3xl border bg-card"
            />
        </div>
    );
}
