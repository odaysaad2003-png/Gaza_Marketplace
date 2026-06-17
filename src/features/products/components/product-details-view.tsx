"use client";

import Link from "next/link";
import {ArrowRight, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {SkeletonList} from "@/components/shared/loading-skeleton";
import {useProduct} from "../hooks/use-product";
import {useProducts} from "../hooks/use-products";
import {ProductImageGallery} from "./product-image-gallery";
import {ProductInfoCard} from "./product-info-card";
import {SellerContactCard} from "./seller-contact-card";
import {SimilarProductsSection} from "./similar-products-section";

type ProductDetailsViewProps = {
    slug: string;
};

export function ProductDetailsView({slug}: ProductDetailsViewProps) {
    const {data: product, isLoading, isError, refetch} = useProduct(slug);
    const {data: allProducts} = useProducts();

    const similarProducts =
        product && allProducts
            ? allProducts.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4)
            : [];

    if (isLoading) {
        return <ProductDetailsSkeleton />;
    }

    if (isError) {
        return (
            <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-destructive/30 bg-destructive/10 p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <RotateCcw className="h-6 w-6" />
                </div>

                <h1 className="mt-5 text-xl font-bold text-destructive sm:text-2xl">حدث خطأ أثناء تحميل المنتج</h1>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    تعذر تحميل تفاصيل المنتج. تأكد من الاتصال أو حاول مرة أخرى.
                </p>

                <Button className="mt-6 rounded-full" variant="outline" onClick={() => refetch()}>
                    إعادة المحاولة
                </Button>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-border/70 bg-card/85 p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-10">
                <h1 className="text-xl font-bold sm:text-2xl">المنتج غير موجود</h1>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    ربما تم حذف المنتج أو أن الرابط غير صحيح. يمكنك الرجوع إلى صفحة المنتجات وتصفح العروض المتاحة.
                </p>

                <Button asChild className="mt-6 rounded-full">
                    <Link href="/products">العودة إلى المنتجات</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <Button
                asChild
                variant="ghost"
                className="rounded-full px-3 text-muted-foreground transition-all duration-200 hover:-translate-x-1 hover:bg-secondary hover:text-foreground"
            >
                <Link href="/products">
                    <ArrowRight className="h-4 w-4" />
                    العودة إلى المنتجات
                </Link>
            </Button>

            <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-8">
                <ProductImageGallery
                    images={product.images}
                    title={product.title}
                    productId={product.id}
                    isFeatured={product.isFeatured}
                />

                <div className="space-y-5 sm:space-y-6 lg:sticky lg:top-24">
                    <ProductInfoCard product={product} />
                    <SellerContactCard product={product} />
                </div>
            </section>

            <SimilarProductsSection products={similarProducts} />
        </div>
    );
}

function ProductDetailsSkeleton() {
    return (
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <Skeleton className="h-10 w-44 rounded-full" />

            <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
                <div className="space-y-4">
                    <Skeleton className="aspect-[4/3] w-full rounded-[1.75rem] sm:rounded-[2rem]" />
                    <SkeletonList
                        count={5}
                        className="grid-cols-4 sm:grid-cols-5"
                        itemClassName="aspect-square rounded-2xl"
                    />
                </div>

                <div className="space-y-5 sm:space-y-6">
                    <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-5 sm:rounded-[2rem] sm:p-6">
                        <Skeleton className="h-6 w-32 rounded-full" />
                        <Skeleton className="mt-5 h-9 w-3/4 sm:h-10" />
                        <Skeleton className="mt-4 h-10 w-44 sm:h-12" />
                        <SkeletonList count={4} className="mt-6 sm:grid-cols-2" itemClassName="h-24 rounded-2xl" />
                    </div>

                    <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-5 sm:rounded-[2rem] sm:p-6">
                        <Skeleton className="h-6 w-36" />
                        <Skeleton className="mt-5 h-20 w-full rounded-3xl" />
                        <Skeleton className="mt-5 h-12 w-full rounded-2xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
