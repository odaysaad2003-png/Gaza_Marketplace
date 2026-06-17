import {MessageCircle, PlusCircle, Search} from "lucide-react";

import {Card} from "@/components/ui/card";
import {SectionHeading} from "@/components/shared/section-heading";

const steps = [
    {
        title: "تصفح المنتجات",
        description: "استخدم البحث والفلاتر للوصول للمنتجات المناسبة حسب المدينة والتصنيف والسعر.",
        icon: Search,
    },
    {
        title: "تواصل مع البائع",
        description: "افتح صفحة المنتج وشاهد تفاصيل التواصل المتاحة للبائع.",
        icon: MessageCircle,
    },
    {
        title: "أضف منتجك",
        description: "املأ نموذج إضافة المنتج ليظهر ضمن بيانات الـ Mock API الحالية.",
        icon: PlusCircle,
    },
];

export function HowItWorksSection() {
    return (
        <section className="py-8 sm:py-10">
            <SectionHeading
                align="center"
                eyebrow="طريقة الاستخدام"
                title="تجربة بسيطة وواضحة"
                description="الصفحة مصممة لتكون قريبة من تجربة Marketplace حقيقية لكن بحجم تدريبي مناسب."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
                {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <Card
                            key={step.title}
                            className="rounded-3xl border-border/70 bg-card/80 p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Icon className="h-6 w-6" />
                            </div>

                            <div className="mt-5 space-y-2">
                                <p className="text-sm font-bold text-primary">خطوة {index + 1}</p>
                                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                                <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
