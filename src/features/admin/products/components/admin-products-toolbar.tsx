"use client";

import {Filter, RotateCcw, Search} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {GAZA_CITIES, PRODUCT_CATEGORIES, PRODUCT_CONDITIONS} from "@/features/products/constants/product-options";

import type {AdminFeaturedFilter, AdminProductsFiltersState, AdminProductsSort} from "../types/admin-products.types";

type AdminProductsToolbarProps = {
    filters: AdminProductsFiltersState;
    activeFiltersCount: number;
    onFiltersChange: (filters: AdminProductsFiltersState) => void;
    onClearFilters: () => void;
};

export function AdminProductsToolbar({
    filters,
    activeFiltersCount,
    onFiltersChange,
    onClearFilters,
}: AdminProductsToolbarProps) {
    function updateFilter<Key extends keyof AdminProductsFiltersState>(
        key: Key,
        value: AdminProductsFiltersState[Key]
    ) {
        onFiltersChange({
            ...filters,
            [key]: value,
        });
    }

    return (
        <div className="rounded-[2rem] border border-border/70 bg-card/85 p-4 shadow-sm shadow-black/[0.03]">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative flex-1">
                        <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={filters.search}
                            onChange={(event) => updateFilter("search", event.target.value)}
                            placeholder="ابحث باسم المنتج، البائع، المدينة أو التصنيف..."
                            className="h-11 rounded-full bg-background/70 pr-11"
                        />
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <Button
                            type="button"
                            variant="outline"
                            className="rounded-full"
                            onClick={onClearFilters}
                            disabled={activeFiltersCount === 0}
                        >
                            <RotateCcw className="ml-2 h-4 w-4" />
                            مسح الفلاتر
                        </Button>

                        <Badge variant="secondary" className="justify-center rounded-full px-4 py-2">
                            <Filter className="ml-2 h-4 w-4" />
                            {activeFiltersCount} فلاتر نشطة
                        </Badge>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    <Select
                        value={filters.category}
                        onValueChange={(value) =>
                            updateFilter("category", value as AdminProductsFiltersState["category"])
                        }
                    >
                        <SelectTrigger className="rounded-full bg-background/70">
                            <SelectValue placeholder="التصنيف" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">كل التصنيفات</SelectItem>
                            {PRODUCT_CATEGORIES.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={filters.city}
                        onValueChange={(value) => updateFilter("city", value as AdminProductsFiltersState["city"])}
                    >
                        <SelectTrigger className="rounded-full bg-background/70">
                            <SelectValue placeholder="المدينة" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">كل المدن</SelectItem>
                            {GAZA_CITIES.map((city) => (
                                <SelectItem key={city} value={city}>
                                    {city}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={filters.condition}
                        onValueChange={(value) =>
                            updateFilter("condition", value as AdminProductsFiltersState["condition"])
                        }
                    >
                        <SelectTrigger className="rounded-full bg-background/70">
                            <SelectValue placeholder="الحالة" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">كل الحالات</SelectItem>
                            {PRODUCT_CONDITIONS.map((condition) => (
                                <SelectItem key={condition} value={condition}>
                                    {condition}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={filters.featured}
                        onValueChange={(value) => updateFilter("featured", value as AdminFeaturedFilter)}
                    >
                        <SelectTrigger className="rounded-full bg-background/70">
                            <SelectValue placeholder="التمييز" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">كل المنتجات</SelectItem>
                            <SelectItem value="featured">المميزة فقط</SelectItem>
                            <SelectItem value="normal">العادية فقط</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={filters.sort}
                        onValueChange={(value) => updateFilter("sort", value as AdminProductsSort)}
                    >
                        <SelectTrigger className="rounded-full bg-background/70">
                            <SelectValue placeholder="الترتيب" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">الأحدث أولًا</SelectItem>
                            <SelectItem value="oldest">الأقدم أولًا</SelectItem>
                            <SelectItem value="price-asc">السعر من الأقل</SelectItem>
                            <SelectItem value="price-desc">السعر من الأعلى</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
