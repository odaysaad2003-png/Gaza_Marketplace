import type {GazaCity, ProductCategory, ProductCondition} from "@/features/products/types/product.types";

export type AdminFeaturedFilter = "all" | "featured" | "normal";

export type AdminProductsSort = "latest" | "oldest" | "price-asc" | "price-desc";

export type AdminProductsFiltersState = {
    search: string;
    category: ProductCategory | "all";
    city: GazaCity | "all";
    condition: ProductCondition | "all";
    featured: AdminFeaturedFilter;
    sort: AdminProductsSort;
};
