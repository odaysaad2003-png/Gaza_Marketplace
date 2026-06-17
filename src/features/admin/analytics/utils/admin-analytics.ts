type AnalyticsProduct = {
    id: string;
    title: string;
    slug: string;
    price: number;
    category: string;
    city: string;
    condition: string;
    createdAt: string;
    isFeatured: boolean;
};

export type DistributionItem = {
    name: string;
    value: number;
};

export type PriceRangeItem = {
    range: string;
    count: number;
};

export function getTotalProducts(products: AnalyticsProduct[]) {
    return products.length;
}

export function getAveragePrice(products: AnalyticsProduct[]) {
    if (products.length === 0) return 0;

    const total = products.reduce((sum, product) => sum + product.price, 0);

    return Math.round(total / products.length);
}

export function getHighestPrice(products: AnalyticsProduct[]) {
    if (products.length === 0) return 0;

    return Math.max(...products.map((product) => product.price));
}

export function getUsedCategoriesCount(products: AnalyticsProduct[]) {
    return new Set(products.map((product) => product.category)).size;
}

export function getCategoryDistribution(products: AnalyticsProduct[]): DistributionItem[] {
    const map = new Map<string, number>();

    products.forEach((product) => {
        map.set(product.category, (map.get(product.category) ?? 0) + 1);
    });

    return Array.from(map.entries()).map(([name, value]) => ({
        name,
        value,
    }));
}

export function getCityDistribution(products: AnalyticsProduct[]): DistributionItem[] {
    const map = new Map<string, number>();

    products.forEach((product) => {
        map.set(product.city, (map.get(product.city) ?? 0) + 1);
    });

    return Array.from(map.entries())
    .map(([name, value]) => ({
        name,
        value,
    }))
    .sort((a, b) => b.value - a.value);
}

export function getPriceRangeDistribution(products: AnalyticsProduct[]): PriceRangeItem[] {
    const ranges = [
        {range: "0 - 100", min: 0, max: 100},
        {range: "101 - 500", min: 101, max: 500},
        {range: "501 - 1000", min: 501, max: 1000},
        {range: "1001 - 3000", min: 1001, max: 3000},
        {range: "+3000", min: 3001, max: Number.POSITIVE_INFINITY},
    ];

    return ranges.map((item) => ({
        range: item.range,
        count: products.filter((product) => product.price >= item.min && product.price <= item.max).length,
    }));
}

export function getFeaturedProductsDistribution(products: AnalyticsProduct[]): DistributionItem[] {
    const featured = products.filter((product) => product.isFeatured).length;
    const regular = products.length - featured;

    return [
        {
            name: "منتجات مميزة",
            value: featured,
        },
        {
            name: "منتجات عادية",
            value: regular,
        },
    ];
}

export function getMostExpensiveProducts(products: AnalyticsProduct[], limit = 5) {
    return [...products].sort((a, b) => b.price - a.price).slice(0, limit);
}

export function getLatestProducts(products: AnalyticsProduct[], limit = 5) {
    return [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export function formatPrice(value: number) {
    return new Intl.NumberFormat("ar-PS", {
        style: "currency",
        currency: "ILS",
        maximumFractionDigits: 0,
    }).format(value);
}

export function formatDate(value: string) {
    return new Intl.DateTimeFormat("ar-PS", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(value));
}
