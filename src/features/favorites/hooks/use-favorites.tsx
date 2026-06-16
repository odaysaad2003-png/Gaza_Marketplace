"use client";

import * as React from "react";

const FAVORITES_STORAGE_KEY = "mini-marketplace-gaza:favorites";

type FavoritesContextValue = {
    favoriteIds: string[];
    favoriteCount: number;
    isHydrated: boolean;
    isFavorite: (productId: string) => boolean;
    addFavorite: (productId: string) => void;
    removeFavorite: (productId: string) => void;
    toggleFavorite: (productId: string) => void;
    clearFavorites: () => void;
};

const FavoritesContext = React.createContext<FavoritesContextValue | null>(null);

type FavoritesProviderProps = {
    children: React.ReactNode;
};

export function FavoritesProvider({children}: FavoritesProviderProps) {
    const [favoriteIds, setFavoriteIds] = React.useState<string[]>([]);
    const [isHydrated, setIsHydrated] = React.useState(false);

    React.useEffect(() => {
        try {
            const storedValue = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

            if (storedValue) {
                const parsedValue = JSON.parse(storedValue);

                if (Array.isArray(parsedValue)) {
                    setFavoriteIds(parsedValue.filter((id) => typeof id === "string"));
                }
            }
        } catch {
            setFavoriteIds([]);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    React.useEffect(() => {
        if (!isHydrated) {
            return;
        }

        window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    }, [favoriteIds, isHydrated]);

    const value = React.useMemo<FavoritesContextValue>(
        () => ({
            favoriteIds,
            favoriteCount: favoriteIds.length,
            isHydrated,

            isFavorite: (productId: string) => favoriteIds.includes(productId),

            addFavorite: (productId: string) => {
                setFavoriteIds((currentIds) => {
                    if (currentIds.includes(productId)) {
                        return currentIds;
                    }

                    return [...currentIds, productId];
                });
            },

            removeFavorite: (productId: string) => {
                setFavoriteIds((currentIds) => currentIds.filter((currentId) => currentId !== productId));
            },

            toggleFavorite: (productId: string) => {
                setFavoriteIds((currentIds) => {
                    if (currentIds.includes(productId)) {
                        return currentIds.filter((currentId) => currentId !== productId);
                    }

                    return [...currentIds, productId];
                });
            },

            clearFavorites: () => {
                setFavoriteIds([]);
            },
        }),
        [favoriteIds, isHydrated]
    );

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
    const context = React.useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavorites must be used inside FavoritesProvider");
    }

    return context;
}
