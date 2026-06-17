"use client";

import Link from "next/link";
import {BarChart3, Boxes, Building2, FolderKanban, PackageCheck, Plus, ShoppingBag} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {SkeletonList} from "@/components/shared/loading-skeleton";
import {formatPrice} from "@/lib/formatters";
import {useProducts} from "@/features/products/hooks/use-products";

import {AdminEmptyState} from "./admin-empty-state";
import {AdminInsightsSection} from "./admin-insights-section";
import {AdminStatCard} from "./admin-stat-card";
import {getAdminStats} from "../utils/admin-stats";

export function AdminDashboardView() {
    const {data: products = [], isLoading, isError} = useProducts();

    const stats = getAdminStats(products);

    return (
        <div className="space-y-8">
            <section className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
                <div className="relative p-5 sm:p-7 lg:p-8">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-3xl space-y-4">
                            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                                لوحة الإدارة
                            </div>

                            <div className="space-y-3">
                                <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                                    إدارة السوق
                                </h1>

                                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                                    نظرة سريعة على المنتجات والتصنيفات والمدن داخل Mini Marketplace Gaza. هذه لوحة تحكم
                                    تدريبية تعتمد حاليًا على Mock API فقط.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                            <Button asChild variant="outline" className="rounded-full">
                                <Link href="/products">
                                    <ShoppingBag className="ml-2 h-4 w-4" />
                                    عرض السوق
                                </Link>
                            </Button>

                            <Button asChild className="rounded-full shadow-sm shadow-primary/20">
                                <Link href="/products/create">
                                    <Plus className="ml-2 h-4 w-4" />
                                    إضافة منتج
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {isLoading ? (
                <AdminDashboardSkeleton />
            ) : isError ? (
                <Card className="rounded-[2rem] border-destructive/30 bg-card/85">
                    <CardContent className="p-6">
                        <p className="font-bold text-destructive">حدث خطأ أثناء تحميل بيانات لوحة التحكم.</p>
                        <p className="mt-2 text-sm text-muted-foreground">جرّب تحديث الصفحة أو افحص Mock API.</p>
                    </CardContent>
                </Card>
            ) : products.length === 0 ? (
                <AdminEmptyState />
            ) : (
                <>
                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                        <AdminStatCard
                            title="إجمالي المنتجات"
                            value={stats.totalProducts}
                            description="عدد المنتجات الموجودة حاليًا"
                            icon={Boxes}
                        />

                        <AdminStatCard
                            title="المنتجات المميزة"
                            value={stats.featuredProducts}
                            description="منتجات تظهر بعلامة مميز"
                            icon={PackageCheck}
                        />

                        <AdminStatCard
                            title="المدن النشطة"
                            value={stats.usedCitiesCount}
                            description="مدن لديها منتجات منشورة"
                            icon={Building2}
                        />

                        <AdminStatCard
                            title="التصنيفات المستخدمة"
                            value={stats.usedCategoriesCount}
                            description="تصنيفات تحتوي منتجات"
                            icon={FolderKanban}
                        />

                        <AdminStatCard
                            title="متوسط السعر"
                            value={formatPrice(stats.averagePrice)}
                            description="متوسط أسعار المنتجات الحالية"
                            icon={BarChart3}
                        />
                    </section>

                    <AdminInsightsSection
                        topCategory={stats.topCategory}
                        topCity={stats.topCity}
                        highestPriceProduct={stats.highestPriceProduct}
                        latestProduct={stats.latestProduct}
                    />

                    <Card className="rounded-[2rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
                        <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-lg font-black text-foreground">إدارة المنتجات التفصيلية</p>
                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                    انتقل إلى صفحة إدارة المنتجات لاستخدام البحث والفلاتر والفرز الإداري.
                                </p>
                            </div>

                            <Button asChild className="rounded-full">
                                <Link href="/admin/products">فتح إدارة المنتجات</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
}


function AdminDashboardSkeleton() {
    return (
        <div className="space-y-8">
            <SkeletonList
                count={5}
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
                itemClassName="h-36 rounded-[1.75rem]"
            />

            <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6">
                <div className="mb-5 h-6 w-40 animate-pulse rounded-full bg-muted" />

                <SkeletonList
                    count={4}
                    className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
                    itemClassName="h-28 rounded-[1.5rem]"
                />
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="h-6 w-44 animate-pulse rounded-full bg-muted" />
                    <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
                </div>

                <SkeletonList count={6} className="grid gap-3" itemClassName="h-14 rounded-2xl" />
            </div>
        </div>
    );
}