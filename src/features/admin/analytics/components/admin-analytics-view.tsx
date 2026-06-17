"use client";

import {BadgeCheck, ChartNoAxesCombined, Package, Tags} from "lucide-react";
import {Button} from "@/components/ui/button";
import {AdminStatCard} from "@/features/admin/components/admin-stat-card";
import {useProducts} from "@/features/products/hooks/use-products";

import {AdminChartCard} from "./admin-chart-card";
import {CategoryDistributionChart} from "./category-distribution-chart";
import {CityDistributionChart} from "./city-distribution-chart";
import {FeaturedProductsChart} from "./featured-products-chart";
import {PriceRangeChart} from "./price-range-chart";
import {TopProductsCard} from "./top-products-card";

import {
    formatPrice,
    getAveragePrice,
    getCategoryDistribution,
    getCityDistribution,
    getFeaturedProductsDistribution,
    getHighestPrice,
    getLatestProducts,
    getMostExpensiveProducts,
    getPriceRangeDistribution,
    getTotalProducts,
    getUsedCategoriesCount,
} from "../utils/admin-analytics";

export function AdminAnalyticsView() {
    const {data: products = [], isLoading, isError, refetch} = useProducts();

    if (isLoading) {
        return <AdminAnalyticsSkeleton />;
    }

    if (isError) {
        return (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto max-w-md space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold text-foreground">تعذر تحميل بيانات التحليلات</h1>
                        <p className="text-sm leading-6 text-muted-foreground">
                            حدث خطأ أثناء جلب المنتجات من Mock API. يمكنك إعادة المحاولة.
                        </p>
                    </div>

                    <Button onClick={() => refetch()}>إعادة المحاولة</Button>
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto max-w-md space-y-3">
                    <div className="inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
                        التحليلات
                    </div>

                    <h1 className="text-2xl font-bold text-foreground">لا توجد منتجات لتحليلها بعد</h1>

                    <p className="text-sm leading-6 text-muted-foreground">
                        عندما تتم إضافة منتجات إلى السوق، ستظهر هنا مؤشرات الأداء والتوزيع حسب التصنيفات والمدن
                        والأسعار.
                    </p>
                </div>
            </div>
        );
    }

    const categoryDistribution = getCategoryDistribution(products);
    const cityDistribution = getCityDistribution(products);
    const priceRangeDistribution = getPriceRangeDistribution(products);
    const featuredDistribution = getFeaturedProductsDistribution(products);
    const mostExpensiveProducts = getMostExpensiveProducts(products);
    const latestProducts = getLatestProducts(products);

    return (
        <div className="space-y-8">
            <header className="space-y-4">
                <div className="inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                    التحليلات
                </div>

                <div className="max-w-3xl space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">تحليلات السوق</h1>

                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                        لوحة تحليلية مبنية على Mock API الحالي. البنية جاهزة لاحقًا للربط مع Backend حقيقي، قواعد
                        بيانات، وصلاحيات إدارية.
                    </p>
                </div>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <AdminStatCard
                    title="عدد المنتجات"
                    value={getTotalProducts(products).toString()}
                    description="إجمالي المنتجات الحالية"
                    icon={Package}
                />

                <AdminStatCard
                    title="متوسط السعر"
                    value={formatPrice(getAveragePrice(products))}
                    description="متوسط أسعار المنتجات"
                    icon={ChartNoAxesCombined}
                />

                <AdminStatCard
                    title="أعلى سعر"
                    value={formatPrice(getHighestPrice(products))}
                    description="أعلى منتج سعرًا"
                    icon={BadgeCheck}
                />

                <AdminStatCard
                    title="التصنيفات المستخدمة"
                    value={getUsedCategoriesCount(products).toString()}
                    description="عدد التصنيفات النشطة"
                    icon={Tags}
                />
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
                <AdminChartCard
                    title="توزيع المنتجات حسب التصنيف"
                    description="يوضح أي التصنيفات تحتوي على أكبر عدد من المنتجات."
                >
                    <CategoryDistributionChart data={categoryDistribution} />
                </AdminChartCard>

                <AdminChartCard title="المدن الأكثر نشاطًا" description="يعرض توزيع المنتجات حسب المدينة.">
                    <CityDistributionChart data={cityDistribution} />
                </AdminChartCard>

                <AdminChartCard title="توزيع المنتجات حسب السعر" description="يقسم المنتجات إلى نطاقات سعرية واضحة.">
                    <PriceRangeChart data={priceRangeDistribution} />
                </AdminChartCard>

                <AdminChartCard
                    title="المنتجات المميزة والعادية"
                    description="مقارنة بين المنتجات المميزة والمنتجات العادية."
                >
                    <FeaturedProductsChart data={featuredDistribution} />
                </AdminChartCard>
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
                <TopProductsCard
                    title="أغلى المنتجات"
                    description="قائمة بأعلى المنتجات سعرًا في السوق."
                    products={mostExpensiveProducts}
                    valueType="price"
                />

                <TopProductsCard
                    title="أحدث المنتجات"
                    description="آخر المنتجات المنشورة حسب تاريخ الإضافة."
                    products={latestProducts}
                    valueType="date"
                />
            </section>
        </div>
    );
}

function AdminAnalyticsSkeleton() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="h-9 w-28 animate-pulse rounded-full bg-muted" />
                <div className="h-10 w-72 animate-pulse rounded-xl bg-muted" />
                <div className="h-5 w-full max-w-2xl animate-pulse rounded-lg bg-muted" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="h-32 animate-pulse rounded-2xl border border-border bg-card" />
                ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="h-96 animate-pulse rounded-2xl border border-border bg-card" />
                ))}
            </div>
        </div>
    );
}
