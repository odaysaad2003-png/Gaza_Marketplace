import Link from "next/link";
import {MessageCircle, Phone, ShieldCheck, UserRound, AlertCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import type {Product} from "../types/product.types";

type SellerContactCardProps = {
    product: Product;
};

export function SellerContactCard({product}: SellerContactCardProps) {
    const phoneHref = product.sellerPhone ? `tel:${product.sellerPhone.replace(/\s/g, "")}` : undefined;

    const whatsappHref = product.sellerPhone
        ? `https://wa.me/${normalizePhoneForWhatsapp(product.sellerPhone)}`
        : undefined;

    return (
        <Card className="overflow-hidden rounded-[1.75rem] border-border/70 bg-card/90 shadow-sm shadow-black/[0.03] dark:shadow-black/20 sm:rounded-[2rem]">
            <CardHeader className="border-b border-border/70 bg-muted/25 px-5 py-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <UserRound className="h-5 w-5 text-primary" />
                    بيانات البائع
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5 p-5 sm:p-6">
                <div className="flex items-center gap-4 rounded-3xl border border-border/70 bg-background/70 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
                        <UserRound className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                        <h3 className="line-clamp-1 font-bold text-foreground">{product.sellerName}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">بائع محلي داخل غزة</p>
                    </div>
                </div>

                <div className="space-y-3 rounded-3xl border border-border/70 bg-muted/30 p-4">
                    <div className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>تواصل مباشرة مع البائع. معلومات التواصل في هذه النسخة وهمية لأغراض التدريب.</span>
                    </div>

                    {product.sellerPhone ? (
                        <div className="flex items-center gap-2 font-bold text-foreground">
                            <Phone className="h-4 w-4 shrink-0 text-primary" />
                            <span dir="ltr">{product.sellerPhone}</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="h-4 w-4 shrink-0 text-primary" />
                            لا يوجد رقم تواصل مضاف لهذا المنتج.
                        </div>
                    )}

                    {product.contactMethod ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                            <span>{product.contactMethod}</span>
                        </div>
                    ) : null}
                </div>

                <div className="grid gap-3">
                    {whatsappHref ? (
                        <Button
                            asChild
                            size="lg"
                            className="rounded-2xl shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <Link href={whatsappHref} target="_blank" rel="noreferrer">
                                <MessageCircle className="h-5 w-5" />
                                تواصل عبر واتساب
                            </Link>
                        </Button>
                    ) : (
                        <Button size="lg" className="rounded-2xl" disabled>
                            <MessageCircle className="h-5 w-5" />
                            واتساب غير متاح
                        </Button>
                    )}

                    {phoneHref ? (
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-2xl bg-background/70 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <Link href={phoneHref}>
                                <Phone className="h-5 w-5" />
                                اتصال مباشر
                            </Link>
                        </Button>
                    ) : (
                        <Button size="lg" variant="outline" className="rounded-2xl" disabled>
                            <Phone className="h-5 w-5" />
                            الرقم غير متاح
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

function normalizePhoneForWhatsapp(phone: string) {
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.startsWith("970")) {
        return digitsOnly;
    }

    if (digitsOnly.startsWith("0")) {
        return `970${digitsOnly.slice(1)}`;
    }

    return digitsOnly;
}
