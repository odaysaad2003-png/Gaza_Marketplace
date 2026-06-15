import Image from "next/image";
import Link from "next/link";
import {MapPin} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {formatDate, formatPrice} from "@/lib/formatters";

import type {Product} from "../types/product.types";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({product}: ProductCardProps) {
    const mainImage = product.images[0];

    return (
        <Card className="group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                        src={mainImage}
                        alt={product.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {product.isFeatured ? <Badge className="absolute right-3 top-3">مميز</Badge> : null}
                </div>
            </Link>

            <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                    <Link href={`/products/${product.slug}`}>
                        <h3 className="line-clamp-1 text-base font-semibold transition-colors hover:text-primary">
                            {product.title}
                        </h3>
                    </Link>

                    <p className="line-clamp-2 min-h-11 text-sm leading-6 text-muted-foreground">
                        {product.description}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <Badge variant="outline">{product.condition}</Badge>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{product.city}</span>
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t p-4">
                <div>
                    <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{formatDate(product.createdAt)}</p>
                </div>

                <Link
                    href={`/products/${product.slug}`}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                    عرض التفاصيل
                </Link>
            </CardFooter>
        </Card>
    );
}
