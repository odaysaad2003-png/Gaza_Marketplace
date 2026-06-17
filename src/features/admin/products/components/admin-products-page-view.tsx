"use client";

import * as React from "react";
import Link from "next/link";
import {PackageSearch, Plus} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {SkeletonList} from "@/components/shared/loading-skeleton";
import {useProducts} from "@/features/products/hooks/use-products";
import {AdminProductsTable} from "@/features/admin/components/admin-products-table";

import {AdminProductsEmptyState} from "./admin-products-empty-state";
import {AdminProductsToolbar} from "./admin-products-toolbar";
import {filterAdminProducts, getActiveAdminFiltersCount} from "../utils/filter-admin-products";
import type {AdminProductsFiltersState} from "../types/admin-products.types";

const defaultFilters: AdminProductsFiltersState = {
    search: "",
    category: "all",
    city: "all",
    condition: "all",
    featured: "all",
    sort: "latest",
};

export function AdminProductsPageView() {
    const {data: products = [], isLoading, isError, refetch} = useProducts();
    const [filters, setFilters] = React.useState<AdminProductsFiltersState>(defaultFilters);

    const filteredProducts = React.useMemo(() => {
        return filterAdminProducts(products, filters);
    }, [products, filters]);

    const activeFiltersCount = getActiveAdminFiltersCount(filters);

    function clearFilters() {
        setFilters(defaultFilters);
    }

    return (
        <div className="space-y-6">
            <section className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
                <div className="relative p-5 sm:p-7">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-3xl space-y-3">
                            <div className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                                إدارة المنتجات
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                                    Products Management
                                </h1>

                                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                                    صفحة إدارية لفرز ومراجعة منتجات السوق الحالية. العمليات الحساسة مثل التعديل والحذف
                                    مؤجلة حتى مرحلة Backend و Auth.
                                </p>
                            </div>
                        </div>

                        <Button asChild className="rounded-full shadow-sm shadow-primary/20">
                            <Link href="/products/create">
                                <Plus className="ml-2 h-4 w-4" />
                                إضافة منتج
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {isLoading ? (
                <AdminProductsPageSkeleton />
            ) : isError ? (
                <Card className="rounded-[2rem] border-destructive/30 bg-card/85">
                    <CardContent className="p-6">
                        <p className="font-bold text-destructive">تعذر تحميل المنتجات.</p>
                        <p className="mt-2 text-sm text-muted-foreground">حدث خطأ أثناء قراءة بيانات Mock API.</p>

                        <Button type="button" variant="outline" className="mt-5 rounded-full" onClick={() => refetch()}>
                            إعادة المحاولة
                        </Button>
                    </CardContent>
                </Card>
            ) : products.length === 0 ? (
                <Card className="rounded-[2rem] border-dashed border-border/80 bg-card/80">
                    <CardContent className="flex flex-col items-center justify-center px-6 py-14 text-center">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <PackageSearch className="h-7 w-7" />
                        </div>

                        <h2 className="text-xl font-bold text-foreground">لا توجد منتجات بعد</h2>

                        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                            عندما تتم إضافة منتجات، ستظهر هنا لإدارتها وفرزها داخل لوحة التحكم.
                        </p>

                        <Button asChild className="mt-6 rounded-full">
                            <Link href="/products/create">إضافة أول منتج</Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <AdminProductsToolbar
                        filters={filters}
                        activeFiltersCount={activeFiltersCount}
                        onFiltersChange={setFilters}
                        onClearFilters={clearFilters}
                    />

                    {filteredProducts.length === 0 ? (
                        <AdminProductsEmptyState onClearFilters={clearFilters} />
                    ) : (
                        <AdminProductsTable products={filteredProducts} />
                    )}
                </>
            )}
        </div>
    );
}

function AdminProductsPageSkeleton() {
    return (
        <div className="space-y-6">
            <div className="rounded-[2rem] border border-border/70 bg-card/85 p-5">
                <div className="mb-4 h-10 w-full animate-pulse rounded-full bg-muted" />

                <SkeletonList
                    count={5}
                    className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
                    itemClassName="h-10 rounded-full"
                />
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="h-6 w-44 animate-pulse rounded-full bg-muted" />
                    <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
                </div>

                <SkeletonList count={7} className="grid gap-3" itemClassName="h-14 rounded-2xl" />
            </div>
        </div>
    );
}
