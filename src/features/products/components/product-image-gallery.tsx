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
    const safeImages = React.useMemo(() => (images?.length > 0 ? images : ["/placeholder.svg"]), [images]);

    const [selectedImage, setSelectedImage] = React.useState<string>(safeImages[0]);

    React.useEffect(() => {
        setSelectedImage(safeImages[0]);
    }, [safeImages]);

    return (
        <div className="space-y-4">
            {/* MAIN IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted shadow-xl shadow-black/[0.05] dark:shadow-black/20 sm:rounded-[2rem]">
                {selectedImage ? (
                    <Image
                        src={selectedImage}
                        alt={title}
                        fill
                        priority
                        quality={90}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="cursor-zoom-in object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-10 w-10" />
                    </div>
                )}

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                {/* favorite */}
                <div className="absolute left-3 top-3 z-10 sm:left-4 sm:top-4">
                    <FavoriteButton productId={productId} />
                </div>

                {/* badges */}
                <div className="absolute right-3 top-3 z-10 flex flex-wrap items-center gap-2 sm:right-4 sm:top-4">
                    {isFeatured && (
                        <Badge className="rounded-full bg-primary px-3 py-1 text-primary-foreground shadow-sm">
                            مميز
                        </Badge>
                    )}

                    <Badge className="rounded-full bg-background/90 px-3 py-1 text-foreground shadow-sm backdrop-blur">
                        {safeImages.length} صورة
                    </Badge>
                </div>
            </div>

            {/* THUMBNAILS */}
            {safeImages.length > 1 && (
                <div className="-mx-1 overflow-x-auto px-1 pb-1">
                    <div className="grid min-w-max grid-flow-col auto-cols-[5rem] gap-3 sm:min-w-0 sm:grid-flow-row sm:grid-cols-5">
                        {safeImages.map((image, index) => {
                            const isSelected = image === selectedImage;

                            return (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className={cn(
                                        "relative aspect-square overflow-hidden rounded-2xl border bg-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30",
                                        isSelected
                                            ? "border-primary ring-2 ring-primary/30 scale-[1.02]"
                                            : "border-border/70 hover:border-primary/30"
                                    )}
                                    aria-label={`عرض صورة ${index + 1} للمنتج`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} - صورة ${index + 1}`}
                                        fill
                                        loading="lazy"
                                        sizes="120px"
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />

                                    {/* active indicator */}
                                    {isSelected && (
                                        <span className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-primary" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
