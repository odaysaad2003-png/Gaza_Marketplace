"use client";

import * as React from "react";

const FAVORITES_STORAGE_KEY = "mini-marketplace-gaza:favorites";

export function useFavorites() {
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

    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteIds),
    );
  }, [favoriteIds, isHydrated]);

  function isFavorite(productId: string) {
    return favoriteIds.includes(productId);
  }

  function addFavorite(productId: string) {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(productId)) {
        return currentIds;
      }

      return [...currentIds, productId];
    });
  }

  function removeFavorite(productId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== productId),
    );
  }

  function toggleFavorite(productId: string) {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(productId)) {
        return currentIds.filter((currentId) => currentId !== productId);
      }

      return [...currentIds, productId];
    });
  }

  function clearFavorites() {
    setFavoriteIds([]);
  }

  return {
    favoriteIds,
    favoriteCount: favoriteIds.length,
    isHydrated,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
  };
}