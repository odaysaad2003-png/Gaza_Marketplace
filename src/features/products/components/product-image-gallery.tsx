"use client";

import * as React from "react";
import Image from "next/image";
import {ImageIcon} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {FavoriteButton} from "@/features/favorites/components/favorite-button";
import {cn} from "@/lib/utils";

type ProductImageGalleryProps = {
    images: string[];
    title: string;
    productId: string;
    isFeatured?: boolean;
};

export function ProductImageGallery({images, title, productId, isFeatured = false}: ProductImageGalleryProps) {
    const safeImages = images.length > 0 ? images : ["/placeholder.svg"];
    const [selectedImage, setSelectedImage] = React.useState(safeImages[0]);

    React.useEffect(() => {
        setSelectedImage(safeImages[0]);
    }, [safeImages[0]]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/70 bg-muted shadow-xl shadow-black/[0.05] dark:shadow-black/20">
                {selectedImage ? (
                    <Image
                        src={selectedImage}
                        alt={title}
                        fill
                        priority
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-10 w-10" />
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute left-4 top-4 z-10">
                    <FavoriteButton productId={productId} />
                </div>

                <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                    {isFeatured ? (
                        <Badge className="rounded-full bg-primary px-3 py-1 text-primary-foreground shadow-sm">
                            مميز
                        </Badge>
                    ) : null}

                    <Badge className="rounded-full bg-background/90 px-3 py-1 text-foreground shadow-sm backdrop-blur hover:bg-background/90">
                        {safeImages.length} صورة
                    </Badge>
                </div>
            </div>

            {safeImages.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                    {safeImages.map((image, index) => {
                        const isSelected = image === selectedImage;

                        return (
                            <button
                                key={`${image}-${index}`}
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                className={cn(
                                    "relative aspect-square overflow-hidden rounded-2xl border bg-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95",
                                    isSelected
                                        ? "border-primary ring-2 ring-primary/30"
                                        : "border-border/70 hover:border-primary/30"
                                )}
                                aria-label={`عرض صورة ${index + 1} للمنتج`}
                            >
                                <Image
                                    src={image}
                                    alt={`${title} - صورة ${index + 1}`}
                                    fill
                                    sizes="120px"
                                    className="object-cover"
                                />

                                {isSelected ? (
                                    <span className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-primary" />
                                ) : null}
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
