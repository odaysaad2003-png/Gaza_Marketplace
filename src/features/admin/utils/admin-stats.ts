import type {Product} from "@/features/products/types/product.types";

function getMostCommonValue<T extends string>(items: T[]) {
    if (items.length === 0) {
        return null;
    }

    const counts = items.reduce<Record<T, number>>((acc, item) => {
        acc[item] = (acc[item] ?? 0) + 1;
        return acc;
    }, {} as Record<T, number>);

    return Object.entries(counts).sort((a, b) => Number(b[1]) - Number(a[1]))[0] as [T, number];
}

export function getAdminStats(products: Product[]) {
    const totalProducts = products.length;
    const featuredProducts = products.filter((product) => product.isFeatured).length;

    const usedCities = new Set(products.map((product) => product.city));
    const usedCategories = new Set(products.map((product) => product.category));

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalProducts > 0 ? Math.round(totalPrice / totalProducts) : 0;

    const highestPriceProduct = products.length ? [...products].sort((a, b) => b.price - a.price)[0] : null;

    const latestProduct = products.length
        ? [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]
        : null;

    const topCategory = getMostCommonValue(products.map((product) => product.category));
    const topCity = getMostCommonValue(products.map((product) => product.city));

    return {
        totalProducts,
        featuredProducts,
        usedCitiesCount: usedCities.size,
        usedCategoriesCount: usedCategories.size,
        averagePrice,
        highestPriceProduct,
        latestProduct,
        topCategory,
        topCity,
    };
}
