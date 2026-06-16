"use client";

import {Heart} from "lucide-react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useFavorites} from "../hooks/use-favorites";

type FavoriteButtonProps = {
    productId: string;
    variant?: "icon" | "full";
    className?: string;
};

export function FavoriteButton({productId, variant = "icon", className}: FavoriteButtonProps) {
    const {isFavorite, toggleFavorite, isHydrated} = useFavorites();

    const isProductFavorite = isHydrated ? isFavorite(productId) : false;

    if (variant === "full") {
        return (
            <Button
                type="button"
                variant={isProductFavorite ? "default" : "outline"}
                size="lg"
                className={cn("w-full rounded-2xl", className)}
                onClick={() => toggleFavorite(productId)}
                aria-pressed={isProductFavorite}
            >
                <Heart className={cn("h-5 w-5", isProductFavorite ? "fill-current" : "")} />
                {isProductFavorite ? "محفوظ في المفضلة" : "إضافة إلى المفضلة"}
            </Button>
        );
    }

    return (
        <Button
            type="button"
            variant="secondary"
            size="icon"
            className={cn(
                "rounded-full bg-background/90 shadow-sm backdrop-blur transition-colors hover:bg-background",
                isProductFavorite ? "text-primary" : "text-muted-foreground",
                className
            )}
            onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleFavorite(productId);
            }}
            aria-label={isProductFavorite ? "إزالة المنتج من المفضلة" : "إضافة المنتج إلى المفضلة"}
            aria-pressed={isProductFavorite}
        >
            <Heart className={cn("h-5 w-5", isProductFavorite ? "fill-current" : "")} />
        </Button>
    );
}
