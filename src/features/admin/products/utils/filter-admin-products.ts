import type {Product} from "@/features/products/types/product.types";

import type {AdminProductsFiltersState} from "../types/admin-products.types";

export function filterAdminProducts(products: Product[], filters: AdminProductsFiltersState) {
    const searchTerm = filters.search.trim().toLowerCase();

    return products
    .filter((product) => {
        const matchesSearch =
            searchTerm.length === 0 ||
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.sellerName.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.city.toLowerCase().includes(searchTerm);

        const matchesCategory = filters.category === "all" || product.category === filters.category;
        const matchesCity = filters.city === "all" || product.city === filters.city;
        const matchesCondition = filters.condition === "all" || product.condition === filters.condition;

        const matchesFeatured =
            filters.featured === "all" ||
            (filters.featured === "featured" && product.isFeatured) ||
            (filters.featured === "normal" && !product.isFeatured);

        return matchesSearch && matchesCategory && matchesCity && matchesCondition && matchesFeatured;
    })
    .sort((a, b) => {
        if (filters.sort === "oldest") {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }

        if (filters.sort === "price-asc") {
            return a.price - b.price;
        }

        if (filters.sort === "price-desc") {
            return b.price - a.price;
        }

        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

export function getActiveAdminFiltersCount(filters: AdminProductsFiltersState) {
    let count = 0;

    if (filters.search.trim()) count += 1;
    if (filters.category !== "all") count += 1;
    if (filters.city !== "all") count += 1;
    if (filters.condition !== "all") count += 1;
    if (filters.featured !== "all") count += 1;
    if (filters.sort !== "latest") count += 1;

    return count;
}
