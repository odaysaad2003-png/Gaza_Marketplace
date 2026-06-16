import Link from "next/link";
import {ArrowLeft, Plus, Search, ShieldCheck} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {formatPrice} from "@/lib/formatters";
import type {Product} from "@/features/products/types/product.types";

type HeroSectionProps = {
    latestProducts: Product[];
};

export function HeroSection({latestProducts}: HeroSectionProps) {
    const previewProducts = latestProducts.slice(0, 4);

    return (
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-7">
                    <Badge
                        variant="secondary"
                        className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-primary shadow-sm"
                    >
                        منصة عربية محلية لسوق غزة
                    </Badge>

                    <div className="space-y-5">
                        <h1 className="max-w-3xl text-4xl font-black leading-[1.25] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            بيع واشتري بسهولة داخل غزة
                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            تصفّح منتجات محلية، تواصل مباشرة مع البائعين، أو أضف منتجك خلال دقائق ضمن تجربة عربية RTL
                            نظيفة وسريعة.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-6 shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <Link href="/products">
                                <Search className="ml-2 h-5 w-5" />
                                تصفح المنتجات
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full bg-card/70 px-6 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <Link href="/products/create">
                                <Plus className="ml-2 h-5 w-5" />
                                أضف منتجك
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-3 pt-2 text-sm text-muted-foreground sm:grid-cols-3">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            Mock API للتدريب
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            واجهة عربية RTL
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            تجربة Portfolio
                        </div>
                    </div>
                </div>

                <Card className="relative overflow-hidden rounded-[2rem] border-border/70 bg-card/80 p-5 shadow-xl shadow-black/[0.05] backdrop-blur">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">من Mock API</p>
                            <h2 className="text-xl font-bold text-foreground">أحدث المنتجات</h2>
                        </div>

                        <Badge className="rounded-full">مباشر</Badge>
                    </div>

                    <div className="space-y-3">
                        {previewProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group flex items-center justify-between gap-4 rounded-3xl border border-border/70 bg-background/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary/60"
                            >
                                <div className="min-w-0">
                                    <h3 className="line-clamp-1 font-semibold text-foreground group-hover:text-primary">
                                        {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {product.category} — {product.city}
                                    </p>
                                </div>

                                <p className="shrink-0 font-bold text-primary">{formatPrice(product.price)}</p>
                            </Link>
                        ))}
                    </div>

                    <Button
                        asChild
                        variant="ghost"
                        className="mt-5 w-full rounded-full text-primary hover:bg-primary/10 hover:text-primary"
                    >
                        <Link href="/products">
                            عرض كل المنتجات
                            <ArrowLeft className="mr-2 h-4 w-4" />
                        </Link>
                    </Button>
                </Card>
            </div>
        </section>
    );
}
