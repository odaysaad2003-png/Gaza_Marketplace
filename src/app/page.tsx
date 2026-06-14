import Link from "next/link";

import {MainContainer} from "@/components/layout/main-container";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export default function HomePage() {
    return (
        <MainContainer className="py-16 sm:py-24">
            <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                    <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                        منصة تجارية محلية
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

                <Card className="overflow-hidden border-primary/10 bg-gradient-to-br from-primary/10 via-background to-muted shadow-sm">
                    <CardContent className="p-6">
                        <div className="space-y-4 rounded-3xl border bg-background/80 p-4 shadow-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">منتجات مميزة</span>
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">غزة</span>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    ["هاتف سامسونج A52", "₪ 750", "موبايلات"],
                                    ["كنبة زاوية 7 مقاعد", "₪ 1,200", "أثاث"],
                                    ["غسالة أوتوماتيك", "₪ 850", "أجهزة منزلية"],
                                ].map(([title, price, category]) => (
                                    <div
                                        key={title}
                                        className="flex items-center justify-between rounded-2xl border bg-card p-4"
                                    >
                                        <div>
                                            <h3 className="font-medium">{title}</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">{category}</p>
                                        </div>

                                        <span className="font-bold text-primary">{price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </MainContainer>
    );
}
