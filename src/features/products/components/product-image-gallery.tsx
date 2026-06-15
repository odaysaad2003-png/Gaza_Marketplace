"use client";

import * as React from "react";
import Image from "next/image";

import {cn} from "@/lib/utils";

type ProductImageGalleryProps = {
    images: string[];
    title: string;
};

export function ProductImageGallery({images, title}: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = React.useState(images[0]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border bg-muted shadow-sm">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                    {images.map((image, index) => {
                        const isSelected = image === selectedImage;

                        return (
                            <button
                                key={`${image}-${index}`}
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                className={cn(
                                    "relative aspect-square overflow-hidden rounded-2xl border bg-muted transition-all hover:opacity-90",
                                    isSelected ? "border-primary ring-2 ring-primary/30" : "border-border"
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
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
