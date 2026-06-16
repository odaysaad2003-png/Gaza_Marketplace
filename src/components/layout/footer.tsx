import Link from "next/link";
import {Heart, MapPin} from "lucide-react";

import {MainContainer} from "@/components/layout/main-container";

export function Footer() {
    return (
        <footer className="border-t border-border/70 bg-background/80 backdrop-blur-xl">
            <MainContainer>
                <div className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            غزة، فلسطين
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-foreground">سوق غزة المصغّر</h2>
                            <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
                                منصة عربية تدريبية لعرض منتجات البيع والشراء داخل غزة، مبنية كتجربة Frontend احترافية
                                باستخدام Next.js وواجهة RTL.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground">روابط سريعة</h3>

                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition-colors hover:text-primary">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="transition-colors hover:text-primary">
                                    المنتجات
                                </Link>
                            </li>
                            <li>
                                <Link href="/favorites" className="transition-colors hover:text-primary">
                                    المفضلة
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/create" className="transition-colors hover:text-primary">
                                    أضف منتجك
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground">عن المشروع</h3>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            هذا المشروع Frontend فقط حاليًا، ويستخدم Mock API و Local Storage كمرحلة تدريبية قبل بناء
                            نسخة أكبر وأكثر واقعية.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-border/70 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026   سوق غزة المصغّر. جميع الحقوق محفوظة و بواسطة عدي سعد</p>

                    <p className="inline-flex items-center gap-1.5">
                        صُمم بعناية
                        <Heart className="h-4 w-4 fill-primary text-primary" />
                        كتجربة Portfolio
                    </p>
                    <p>BY oday zoheer saaad</p>
                </div>
            </MainContainer>
        </footer>
    );
}
