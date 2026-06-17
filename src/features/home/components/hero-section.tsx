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
        <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                <div className="space-y-6 sm:space-y-7">
                    <Badge
                        variant="secondary"
                        className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-medium text-primary shadow-sm sm:text-sm"
                    >
                        منصة عربية محلية لسوق غزة
                    </Badge>

                    <div className="space-y-4 sm:space-y-5">
                        <h1 className="max-w-3xl text-3xl font-black leading-[1.25] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            بيع واشتري بسهولة داخل غزة
                        </h1>

                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            تصفّح منتجات محلية، تواصل مباشرة مع البائعين، أو أضف منتجك خلال دقائق ضمن تجربة عربية RTL
                            نظيفة وسريعة.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:flex sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="w-full rounded-full px-6 shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
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
                            className="w-full rounded-full bg-card/70 px-6 transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                        >
                            <Link href="/products/create">
                                <Plus className="ml-2 h-5 w-5" />
                                أضف منتجك
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-3 pt-1 text-sm text-muted-foreground sm:grid-cols-3 sm:pt-2">
                        <div className="flex items-center gap-2 rounded-2xl bg-card/60 px-3 py-2 sm:bg-transparent sm:p-0">
                            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                            <span>Mock API للتدريب</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-2xl bg-card/60 px-3 py-2 sm:bg-transparent sm:p-0">
                            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                            <span>واجهة عربية RTL</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-2xl bg-card/60 px-3 py-2 sm:bg-transparent sm:p-0">
                            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                            <span>تجربة Portfolio</span>
                        </div>
                    </div>
                </div>

                <Card className="relative overflow-hidden rounded-[1.75rem] border-border/70 bg-card/80 p-4 shadow-xl shadow-black/[0.05] backdrop-blur sm:rounded-[2rem] sm:p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="min-w-0">
                            <p className="text-sm text-muted-foreground">من Mock API</p>
                            <h2 className="text-lg font-bold text-foreground sm:text-xl">أحدث المنتجات</h2>
                        </div>

                        <Badge className="shrink-0 rounded-full">مباشر</Badge>
                    </div>

                    <div className="space-y-3">
                        {previewProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group grid gap-3 rounded-3xl border border-border/70 bg-background/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary/60 sm:grid-cols-[1fr_auto] sm:items-center"
                            >
                                <div className="min-w-0">
                                    <h3 className="line-clamp-1 font-semibold text-foreground group-hover:text-primary">
                                        {product.title}
                                    </h3>

                                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                                        {product.category} — {product.city}
                                    </p>
                                </div>

                                <p className="shrink-0 text-sm font-bold text-primary sm:text-base">
                                    {formatPrice(product.price)}
                                </p>
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
