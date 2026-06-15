import type {Metadata} from "next";

import {MainContainer} from "@/components/layout/main-container";
import {ProductsListingView} from "@/features/products/components/products-listing-view";

export const metadata: Metadata = {
    title: "المنتجات | Mini Marketplace Gaza",
    description: "تصفح المنتجات المعروضة للبيع داخل غزة حسب التصنيف والمدينة والسعر.",
};

export default function ProductsPage() {
    return (
        <MainContainer className="py-10 sm:py-14">
            <div className="mb-8 space-y-3">
                <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                    سوق غزة المحلي
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">تصفح المنتجات</h1>

                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        ابحث عن المنتجات المتوفرة في غزة، وفلتر النتائج حسب التصنيف، المدينة، حالة المنتج، والسعر للوصول
                        لما تحتاجه بسرعة.
                    </p>
                </div>
            </div>

            <ProductsListingView />
        </MainContainer>
    );
}
