"use client";

import * as React from "react";

import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {useProducts} from "../hooks/use-products";
import type {Product} from "../types/product.types";
import {ProductFilters, type ProductFiltersState} from "./product-filters";
import {ProductGrid} from "./product-grid";

const initialFilters: ProductFiltersState = {
    search: "",
    category: "all",
    city: "all",
    condition: "all",
    minPrice: "",
    maxPrice: "",
    sort: "latest",
};

export function ProductsListingView() {
    const {data: products, isLoading, isError, refetch} = useProducts();

    const [filters, setFilters] = React.useState<ProductFiltersState>(initialFilters);

    const filteredProducts = React.useMemo(() => {
        if (!products) {
            return [];
        }

        return filterAndSortProducts(products, filters);
    }, [products, filters]);

    return (
        <div className="space-y-8">
            <ProductFilters filters={filters} onFiltersChange={setFilters} />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-semibold">كل المنتجات</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {isLoading ? "جارٍ تحميل المنتجات..." : `تم العثور على ${filteredProducts.length} منتج`}
                    </p>
                </div>
            </div>

            {isLoading ? <ProductsGridSkeleton /> : null}

            {isError ? (
                <div className="rounded-3xl border border-destructive/30 bg-destructive/10 p-6 text-center">
                    <h3 className="text-lg font-semibold text-destructive">حدث خطأ أثناء تحميل المنتجات</h3>
                    <p className="mt-2 text-sm text-muted-foreground">حاول تحديث البيانات أو الرجوع لاحقًا.</p>

                    <Button className="mt-4" variant="outline" onClick={() => refetch()}>
                        إعادة المحاولة
                    </Button>
                </div>
            ) : null}

            {!isLoading && !isError && filteredProducts.length > 0 ? <ProductGrid products={filteredProducts} /> : null}

            {!isLoading && !isError && filteredProducts.length === 0 ? (
                <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
                    <h3 className="text-lg font-semibold">لا توجد منتجات مطابقة</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                        جرّب تغيير كلمات البحث أو إزالة بعض الفلاتر لعرض نتائج أكثر.
                    </p>

                    <Button className="mt-5" variant="outline" onClick={() => setFilters(initialFilters)}>
                        إعادة ضبط الفلاتر
                    </Button>
                </div>
            ) : null}
        </div>
    );
}

function filterAndSortProducts(products: Product[], filters: ProductFiltersState) {
    const search = filters.search.trim().toLowerCase();
    const minPrice = Number(filters.minPrice);
    const maxPrice = Number(filters.maxPrice);

    return products
    .filter((product) => {
        const matchesSearch =
            !search ||
            product.title.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        const matchesCategory = filters.category === "all" || product.category === filters.category;

        const matchesCity = filters.city === "all" || product.city === filters.city;

        const matchesCondition = filters.condition === "all" || product.condition === filters.condition;

        const matchesMinPrice = !filters.minPrice || product.price >= minPrice;

        const matchesMaxPrice = !filters.maxPrice || product.price <= maxPrice;

        return (
            matchesSearch && matchesCategory && matchesCity && matchesCondition && matchesMinPrice && matchesMaxPrice
        );
    })
    .sort((a, b) => {
        if (filters.sort === "price-asc") {
            return a.price - b.price;
        }

        if (filters.sort === "price-desc") {
            return b.price - a.price;
        }

        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

function ProductsGridSkeleton() {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({length: 8}).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-3xl border bg-card">
                    <Skeleton className="aspect-[4/3] w-full rounded-none" />

                    <div className="space-y-4 p-4">
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>

                        <div className="flex gap-2">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-24" />
                        </div>

                        <Skeleton className="h-4 w-24" />
                    </div>

                    <div className="border-t p-4">
                        <Skeleton className="h-6 w-24" />
                    </div>
                </div>
            ))}
        </div>
    );
}
