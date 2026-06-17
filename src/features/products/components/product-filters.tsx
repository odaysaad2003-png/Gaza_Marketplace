"use client";

import * as React from "react";
import {Filter, RotateCcw, Search} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

import {GAZA_CITIES, PRODUCT_CATEGORIES, PRODUCT_CONDITIONS} from "../constants/product-options";
import type {GazaCity, ProductCategory, ProductCondition} from "../types/product.types";

export type ProductsSortValue = "latest" | "price-asc" | "price-desc";

export type ProductFiltersState = {
    search: string;
    category: ProductCategory | "all";
    city: GazaCity | "all";
    condition: ProductCondition | "all";
    minPrice: string;
    maxPrice: string;
    sort: ProductsSortValue;
};

type ProductFiltersProps = {
    filters: ProductFiltersState;
    onFiltersChange: (filters: ProductFiltersState) => void;
};

const defaultFilters: ProductFiltersState = {
    search: "",
    category: "all",
    city: "all",
    condition: "all",
    minPrice: "",
    maxPrice: "",
    sort: "latest",
};

export function ProductFilters({filters, onFiltersChange}: ProductFiltersProps) {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = React.useState(false);

    const activeFiltersCount = getActiveFiltersCount(filters);
    const hasActiveFilters = activeFiltersCount > 0;

    function updateFilter<Key extends keyof ProductFiltersState>(key: Key, value: ProductFiltersState[Key]) {
        onFiltersChange({
            ...filters,
            [key]: value,
        });
    }

    function resetFilters() {
        onFiltersChange(defaultFilters);
    }

    return (
        <div className="space-y-4">
            {/* Desktop filters */}
            <div className="hidden rounded-3xl border border-border bg-card p-4 shadow-sm md:block">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-sm font-semibold text-foreground">فلترة المنتجات</h2>
                        <p className="mt-1 text-xs text-muted-foreground">
                            خصّص النتائج حسب البحث، المدينة، التصنيف، الحالة والسعر.
                        </p>
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        disabled={!hasActiveFilters}
                        className="gap-2"
                    >
                        <RotateCcw className="h-4 w-4" />
                        مسح الفلاتر
                    </Button>
                </div>

                <FiltersFields filters={filters} updateFilter={updateFilter} layout="desktop" />
            </div>

            {/* Mobile filters */}
            <div className="rounded-3xl border border-border bg-card p-4 shadow-sm md:hidden">
                <div className="space-y-4">
                    <SearchField filters={filters} updateFilter={updateFilter} />

                    <div className="grid grid-cols-[1fr_auto] gap-3">
                        <SortField filters={filters} updateFilter={updateFilter} />

                        <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                            <SheetTrigger asChild>
                                <Button type="button" variant="outline" className="gap-2 whitespace-nowrap">
                                    <Filter className="h-4 w-4" />
                                    فلترة
                                    {hasActiveFilters ? (
                                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
                                            {activeFiltersCount}
                                        </span>
                                    ) : null}
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[92vw] max-w-sm overflow-y-auto">
                                <SheetHeader className="text-right">
                                    <SheetTitle>فلترة المنتجات</SheetTitle>
                                    <SheetDescription>
                                        اختر التصنيف، المدينة، حالة المنتج، أو نطاق السعر لتقليل النتائج.
                                    </SheetDescription>
                                </SheetHeader>

                                <div className="mt-6 space-y-5">
                                    <FiltersFields
                                        filters={filters}
                                        updateFilter={updateFilter}
                                        layout="mobile"
                                        hideSearch
                                        hideSort
                                    />

                                    <div className="grid gap-3 border-t border-border pt-5">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={resetFilters}
                                            disabled={!hasActiveFilters}
                                            className="gap-2"
                                        >
                                            <RotateCcw className="h-4 w-4" />
                                            مسح الفلاتر
                                        </Button>

                                        <Button type="button" onClick={() => setIsMobileFiltersOpen(false)}>
                                            عرض النتائج
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {hasActiveFilters ? (
                        <div className="flex items-center justify-between gap-3 rounded-2xl bg-muted/50 px-3 py-2">
                            <p className="text-xs text-muted-foreground">لديك {activeFiltersCount} فلتر نشط</p>

                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={resetFilters}
                                className="h-auto px-2 py-1 text-xs"
                            >
                                مسح الكل
                            </Button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

type FiltersFieldsProps = {
    filters: ProductFiltersState;
    updateFilter: <Key extends keyof ProductFiltersState>(key: Key, value: ProductFiltersState[Key]) => void;
    layout: "desktop" | "mobile";
    hideSearch?: boolean;
    hideSort?: boolean;
};

function FiltersFields({filters, updateFilter, layout, hideSearch = false, hideSort = false}: FiltersFieldsProps) {
    const fieldsClassName = layout === "desktop" ? "grid gap-4 lg:grid-cols-[1.5fr_repeat(5,1fr)]" : "grid gap-4";

    return (
        <div className="space-y-4">
            <div className={fieldsClassName}>
                {!hideSearch ? <SearchField filters={filters} updateFilter={updateFilter} /> : null}

                <CategoryField filters={filters} updateFilter={updateFilter} />

                <CityField filters={filters} updateFilter={updateFilter} />

                <ConditionField filters={filters} updateFilter={updateFilter} />

                <Input
                    inputMode="numeric"
                    value={filters.minPrice}
                    onChange={(event) => updateFilter("minPrice", event.target.value)}
                    placeholder="أقل سعر"
                />

                <Input
                    inputMode="numeric"
                    value={filters.maxPrice}
                    onChange={(event) => updateFilter("maxPrice", event.target.value)}
                    placeholder="أعلى سعر"
                />
            </div>

            {!hideSort ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <SortField filters={filters} updateFilter={updateFilter} />
                </div>
            ) : null}
        </div>
    );
}

type FieldProps = {
    filters: ProductFiltersState;
    updateFilter: <Key extends keyof ProductFiltersState>(key: Key, value: ProductFiltersState[Key]) => void;
};

function SearchField({filters, updateFilter}: FieldProps) {
    return (
        <div className="relative">
            <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                value={filters.search}
                onChange={(event) => updateFilter("search", event.target.value)}
                placeholder="ابحث عن منتج..."
                className="pr-9"
            />
        </div>
    );
}

function CategoryField({filters, updateFilter}: FieldProps) {
    return (
        <Select
            value={filters.category}
            onValueChange={(value) => updateFilter("category", value as ProductFiltersState["category"])}
        >
            <SelectTrigger>
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
    );
}

function CityField({filters, updateFilter}: FieldProps) {
    return (
        <Select
            value={filters.city}
            onValueChange={(value) => updateFilter("city", value as ProductFiltersState["city"])}
        >
            <SelectTrigger>
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
    );
}

function ConditionField({filters, updateFilter}: FieldProps) {
    return (
        <Select
            value={filters.condition}
            onValueChange={(value) => updateFilter("condition", value as ProductFiltersState["condition"])}
        >
            <SelectTrigger>
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
    );
}

function SortField({filters, updateFilter}: FieldProps) {
    return (
        <Select
            value={filters.sort}
            onValueChange={(value) => updateFilter("sort", value as ProductFiltersState["sort"])}
        >
            <SelectTrigger className="w-full sm:w-56">
                <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="latest">الأحدث أولًا</SelectItem>
                <SelectItem value="price-asc">السعر من الأقل للأعلى</SelectItem>
                <SelectItem value="price-desc">السعر من الأعلى للأقل</SelectItem>
            </SelectContent>
        </Select>
    );
}

function getActiveFiltersCount(filters: ProductFiltersState) {
    let count = 0;

    if (filters.search.trim()) count += 1;
    if (filters.category !== "all") count += 1;
    if (filters.city !== "all") count += 1;
    if (filters.condition !== "all") count += 1;
    if (filters.minPrice.trim()) count += 1;
    if (filters.maxPrice.trim()) count += 1;
    if (filters.sort !== "latest") count += 1;

    return count;
}
