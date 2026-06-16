import type {Metadata} from "next";

import {MainContainer} from "@/components/layout/main-container";
import {CreateProductForm} from "@/features/products/components/create-product-form";

export const metadata: Metadata = {
    title: "إضافة منتج | Mini Marketplace Gaza",
    description: "أضف منتجًا جديدًا للبيع داخل Mini Marketplace Gaza.",
};

export default function CreateProductPage() {
    return (
        <MainContainer className="py-10 sm:py-14">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8 space-y-3">
                    <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                        إضافة منتج جديد
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">اعرض منتجك للبيع داخل غزة</h1>

                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                            أضف تفاصيل المنتج بدقة مع صورة واضحة وسعر مناسب حتى يتمكن المشترون من الوصول إليه بسهولة.
                        </p>
                    </div>
                </div>

                <CreateProductForm />
            </div>
        </MainContainer>
    );
}
