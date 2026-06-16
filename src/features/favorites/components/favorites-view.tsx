"use client";

import Link from "next/link";
import {ArrowLeft, Heart, RefreshCcw, ShoppingBag, Sparkles, Trash2} from "lucide-react";

import {SkeletonList} from "@/components/shared/loading-skeleton";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
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
            <div className="mx-auto max-w-2xl rounded-[2rem] border border-destructive/30 bg-destructive/10 p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <RefreshCcw className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-destructive">حدث خطأ أثناء تحميل المفضلة</h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    لم نتمكن من تحميل المنتجات الآن. حاول مرة أخرى.
                </p>

                <Button className="mt-6 rounded-full" variant="outline" onClick={() => refetch()}>
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
            <Card className="overflow-hidden rounded-[2rem] border-border/70 bg-card/90 p-6 shadow-sm shadow-black/[0.03]">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/70 px-4 py-2 text-sm font-medium text-primary">
                            <Heart className="h-4 w-4 fill-current" />
                            المفضلة
                        </div>

                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                                منتجاتك المحفوظة
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                                هنا تجد المنتجات التي أعجبتك وتريد الرجوع لها بسرعة لاحقًا.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:min-w-80">
                        <div className="rounded-3xl border border-border/70 bg-background/70 p-4">
                            <p className="text-sm text-muted-foreground">عدد المنتجات</p>
                            <p className="mt-1 text-2xl font-black text-primary">{favoriteProducts.length}</p>
                        </div>

                        <div className="rounded-3xl border border-border/70 bg-background/70 p-4">
                            <p className="text-sm text-muted-foreground">الحالة</p>
                            <p className="mt-1 font-bold text-foreground">محفوظة محليًا</p>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button asChild variant="outline" className="rounded-full bg-background/70">
                    <Link href="/products">
                        <ShoppingBag className="h-4 w-4" />
                        تصفح منتجات أخرى
                    </Link>
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={clearFavorites}
                >
                    <Trash2 className="h-4 w-4" />
                    مسح المفضلة
                </Button>
            </div>

            <ProductGrid products={favoriteProducts} />
        </div>
    );
}

function FavoritesEmptyState() {
    return (
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-8 text-center shadow-sm shadow-black/[0.03] sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary/10 text-primary">
                <Heart className="h-10 w-10" />
            </div>

            <div className="mt-7 space-y-3">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/70 px-4 py-2 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" />
                    ابدأ بحفظ المنتجات
                </div>

                <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    لا توجد منتجات في المفضلة بعد
                </h2>

                <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    احفظ المنتجات التي تعجبك من خلال الضغط على زر القلب، ثم ارجع لهذه الصفحة لمراجعتها بسرعة.
                </p>
            </div>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                    asChild
                    size="lg"
                    className="rounded-full px-6 shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                    <Link href="/products">
                        <ShoppingBag className="h-5 w-5" />
                        تصفح المنتجات
                    </Link>
                </Button>

                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-background/70 px-6 transition-all duration-200 hover:-translate-y-0.5"
                >
                    <Link href="/">
                        العودة للرئيسية
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}

function FavoritesSkeleton() {
    return (
        <div className="space-y-8">
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-6">
                <Skeleton className="h-9 w-32 rounded-full" />
                <Skeleton className="mt-5 h-8 w-56" />
                <Skeleton className="mt-3 h-4 w-72" />

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-md">
                    <Skeleton className="h-24 rounded-3xl" />
                    <Skeleton className="h-24 rounded-3xl" />
                </div>
            </div>

            <SkeletonList
                count={4}
                className="gap-5 sm:grid-cols-2 lg:grid-cols-4"
                itemClassName="h-[360px] overflow-hidden rounded-3xl border border-border/70 bg-card"
            />
        </div>
    );
}
