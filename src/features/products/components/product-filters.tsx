import {Search} from "lucide-react";

import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

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

export function ProductFilters({filters, onFiltersChange}: ProductFiltersProps) {
    function updateFilter<Key extends keyof ProductFiltersState>(key: Key, value: ProductFiltersState[Key]) {
        onFiltersChange({
            ...filters,
            [key]: value,
        });
    }

    return (
        <div className="rounded-3xl border bg-card p-4 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
                <div className="relative">
                    <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={filters.search}
                        onChange={(event) => updateFilter("search", event.target.value)}
                        placeholder="ابحث عن منتج..."
                        className="pr-9"
                    />
                </div>

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

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

                <button
                    type="button"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() =>
                        onFiltersChange({
                            search: "",
                            category: "all",
                            city: "all",
                            condition: "all",
                            minPrice: "",
                            maxPrice: "",
                            sort: "latest",
                        })
                    }
                >
                    إعادة ضبط الفلاتر
                </button>
            </div>
        </div>
    );
}
