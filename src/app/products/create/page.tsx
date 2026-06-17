import type {Metadata} from "next";
import {CheckCircle2, PackagePlus, Sparkles} from "lucide-react";

import {MainContainer} from "@/components/layout/main-container";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {CreateProductForm} from "@/features/products/components/create-product-form";

export const metadata: Metadata = {
    title: "إضافة منتج | Mini Marketplace Gaza",
    description: "أضف منتجًا جديدًا للبيع داخل Mini Marketplace Gaza.",
};

export default function CreateProductPage() {
    return (
        <MainContainer className="py-8 sm:py-10 lg:py-14">
            <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8">
                <section className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/85 p-5 shadow-sm shadow-black/[0.03] sm:rounded-[2rem] sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-center">
                        <div className="space-y-5">
                            <Badge
                                variant="secondary"
                                className="w-fit rounded-full border border-border/70 bg-secondary/70 px-4 py-2 text-primary"
                            >
                                <PackagePlus className="ml-2 h-4 w-4" />
                                إضافة منتج جديد
                            </Badge>

                            <div className="space-y-3">
                                <h1 className="text-2xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
                                    اعرض منتجك للبيع داخل غزة
                                </h1>

                                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                                    أضف تفاصيل المنتج بدقة مع صورة واضحة وسعر مناسب حتى يتمكن المشترون من الوصول إليه
                                    بسهولة.
                                </p>
                            </div>
                        </div>

                        <Card className="rounded-3xl border-border/70 bg-muted/30 p-4 shadow-none sm:p-5">
                            <div className="flex gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Sparkles className="h-5 w-5" />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="font-bold text-foreground">نصيحة لإعلان أفضل</h2>

                                    <p className="text-sm leading-7 text-muted-foreground">
                                        استخدم عنوان واضح، سعر منطقي، وصف صادق، وصورة قريبة من المنتج. التفاصيل الجيدة
                                        تزيد ثقة المشتري.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
                    <CreateProductForm />

                    <aside className="space-y-4 lg:sticky lg:top-24">
                        <Card className="rounded-[1.75rem] border-border/70 bg-card/85 p-5 shadow-sm shadow-black/[0.03] sm:rounded-[2rem]">
                            <h2 className="font-bold text-foreground">قبل النشر</h2>

                            <div className="mt-4 space-y-4">
                                <HelperItem text="تأكد أن رابط الصورة صحيح ويبدأ بـ / أو https://" />
                                <HelperItem text="اكتب وصفًا يوضح الحالة والعيوب إن وجدت." />
                                <HelperItem text="اختر المدينة بدقة حتى تظهر في الفلاتر." />
                                <HelperItem text="معلومات التواصل هنا تدريبية وليست حقيقية." />
                            </div>
                        </Card>

                        <Card className="rounded-[1.75rem] border-border/70 bg-primary p-5 text-primary-foreground shadow-sm shadow-primary/20 sm:rounded-[2rem]">
                            <h2 className="font-bold">نسخة Frontend تدريبية</h2>
                            <p className="mt-2 text-sm leading-7 opacity-90">
                                عند النشر سيتم إضافة المنتج داخل الـ Mock API في الذاكرة أثناء الجلسة الحالية، وليس داخل
                                قاعدة بيانات حقيقية.
                            </p>
                        </Card>
                    </aside>
                </div>
            </div>
        </MainContainer>
    );
}

function HelperItem({text}: {text: string}) {
    return (
        <div className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{text}</span>
        </div>
    );
}
