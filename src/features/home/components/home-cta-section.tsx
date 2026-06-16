import Link from "next/link";
import {ArrowLeft, Plus} from "lucide-react";

import {Button} from "@/components/ui/button";

export function HomeCtaSection() {
    return (
        <section className="py-12">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/20 sm:p-10">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="max-w-2xl space-y-3">
                        <p className="text-sm font-semibold opacity-90">جاهز تعرض منتجك؟</p>

                        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                            أضف منتجك الآن وخلي المستخدمين يلاقوه بسهولة
                        </h2>

                        <p className="leading-7 opacity-85">
                            هذه النسخة Frontend تدريبية، لكنها مبنية بروح منتج حقيقي وتجربة استخدام احترافية.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="rounded-full px-6 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <Link href="/products/create">
                                <Plus className="ml-2 h-5 w-5" />
                                أضف منتجك
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="rounded-full px-6 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                        >
                            <Link href="/products">
                                تصفح السوق
                                <ArrowLeft className="mr-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
