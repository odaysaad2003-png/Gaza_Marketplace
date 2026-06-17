"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, CalendarDays, MapPin} from "lucide-react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import "swiper/css";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {formatDate, formatPrice} from "@/lib/formatters";
import {FavoriteButton} from "@/features/favorites/components/favorite-button";

import type {Product} from "../types/product.types";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({product}: ProductCardProps) {
    const mainImage = product.images[0];

    return (
        <Card className="group overflow-hidden rounded-[1.75rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/[0.06] dark:shadow-black/20">
            <div className="relative">
                <Link href={`/products/${product.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{delay: 2500}}
                            loop={product.images.length > 1}
                            className="h-full w-full"
                        >
                            {product.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={product.title}
                                        fill
                                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* fallback gradient overlay (زي ما هو عندك) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                        {product.images.length > 1 && (
                            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
                                {product.images.map((_, i) => (
                                    <span key={i} className="h-1 w-1 rounded-full bg-white/70" />
                                ))}
                            </div>
                        )}
                    </div>
                </Link>

                <div className="absolute left-3 top-3 z-10">
                    <FavoriteButton productId={product.id} />
                </div>

                <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                    {product.isFeatured ? (
                        <Badge className="rounded-full bg-primary px-3 py-1 text-primary-foreground shadow-sm">
                            مميز
                        </Badge>
                    ) : null}

                    <Badge
                        variant="secondary"
                        className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-primary shadow-sm backdrop-blur dark:bg-card/90"
                    >
                        {product.condition}
                    </Badge>
                </div>

                <div className="absolute bottom-3 right-3 z-10">
                    <Badge className="rounded-full bg-background/90 px-3 py-1 text-foreground shadow-sm backdrop-blur hover:bg-background/90">
                        {product.category}
                    </Badge>
                </div>
            </div>

            <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                    <Link href={`/products/${product.slug}`}>
                        <h3 className="line-clamp-1 text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {product.title}
                        </h3>
                    </Link>

                    <p className="line-clamp-2 min-h-11 text-sm leading-6 text-muted-foreground">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <p className="text-xl font-black text-primary">{formatPrice(product.price)}</p>

                    <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{product.city}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>{formatDate(product.createdAt)}</span>
                </div>

                <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                >
                    عرض التفاصيل
                    <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
}
