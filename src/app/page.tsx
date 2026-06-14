import Link from "next/link";

import {MainContainer} from "@/components/layout/main-container";
import {Button} from "@/components/ui/button";
import {LatestProductsPreview} from "@/features/products/components/latest-products-preview";

export default function HomePage() {
    return (
        <MainContainer className="py-16 sm:py-24">
            <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                    <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                        منصة عربية محلية لسوق غزة
                    </div>

                    <div className="space-y-5">
                        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            بيع واشتري بسهولة داخل غزة
                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            Mini Marketplace Gaza هو مشروع تدريبي احترافي لعرض المنتجات، البحث عنها، حفظ المفضلة، وإضافة
                            منتجات جديدة بتجربة عربية RTL قريبة من مشاريع سوق العمل.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg">
                            <Link href="/products">تصفح المنتجات</Link>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <Link href="/products/create">أضف منتجك الآن</Link>
                        </Button>
                    </div>
                </div>

                <LatestProductsPreview />
            </section>
        </MainContainer>
    );
}
