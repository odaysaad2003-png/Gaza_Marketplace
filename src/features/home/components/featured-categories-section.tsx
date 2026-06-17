import Link from "next/link";
import {Baby, BookOpen, Car, Home, Laptop, Shirt, Smartphone, WashingMachine} from "lucide-react";

import {Card} from "@/components/ui/card";
import {SectionHeading} from "@/components/shared/section-heading";

const featuredCategories = [
    {
        label: "موبايلات",
        icon: Smartphone,
    },
    {
        label: "إلكترونيات",
        icon: Laptop,
    },
    {
        label: "أثاث",
        icon: Home,
    },
    {
        label: "أجهزة منزلية",
        icon: WashingMachine,
    },
    {
        label: "ملابس",
        icon: Shirt,
    },
    {
        label: "سيارات ومواصلات",
        icon: Car,
    },
    {
        label: "كتب وتعليم",
        icon: BookOpen,
    },
    {
        label: "أطفال",
        icon: Baby,
    },
];

export function FeaturedCategoriesSection() {
    return (
        <section className="py-8 sm:py-10">
            <SectionHeading
                eyebrow="التصنيفات"
                title="ابدأ من القسم المناسب"
                description="تصنيفات مختارة تساعد المستخدم يصل للمنتج المطلوب بسرعة."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {featuredCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Link key={category.label} href={`/products?category=${encodeURIComponent(category.label)}`}>
                            <Card className="group h-full rounded-3xl border-border/70 bg-card/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="line-clamp-1 font-bold text-foreground">{category.label}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">تصفح المنتجات</p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
