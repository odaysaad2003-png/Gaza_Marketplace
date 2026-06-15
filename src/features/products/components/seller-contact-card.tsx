import {MessageCircle, Phone, ShieldCheck, UserRound} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import type {Product} from "../types/product.types";

type SellerContactCardProps = {
    product: Product;
};

export function SellerContactCard({product}: SellerContactCardProps) {
    return (
        <Card className="rounded-[2rem] border-primary/10 shadow-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <UserRound className="h-5 w-5 text-primary" />
                    بيانات البائع
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
                <div className="flex items-center gap-4 rounded-3xl border bg-muted/30 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <UserRound className="h-6 w-6" />
                    </div>

                    <div>
                        <h3 className="font-semibold">{product.sellerName}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">بائع محلي داخل غزة</p>
                    </div>
                </div>

                <div className="space-y-3 rounded-3xl border bg-background p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span>معلومات التواصل وهمية لأغراض التدريب</span>
                    </div>

                    {product.sellerPhone ? (
                        <div className="flex items-center gap-2 font-medium">
                            <Phone className="h-4 w-4 text-primary" />
                            <span dir="ltr">{product.sellerPhone}</span>
                        </div>
                    ) : null}

                    {product.contactMethod ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4 text-primary" />
                            <span>{product.contactMethod}</span>
                        </div>
                    ) : null}
                </div>

                <div className="grid gap-3">
                    <Button size="lg" className="rounded-2xl">
                        <MessageCircle className="h-5 w-5" />
                        تواصل مع البائع
                    </Button>

                    <Button size="lg" variant="outline" className="rounded-2xl">
                        <Phone className="h-5 w-5" />
                        عرض رقم التواصل
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
