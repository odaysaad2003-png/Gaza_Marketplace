import {useQuery} from "@tanstack/react-query";

import {getFeaturedProducts, getLatestProducts, getProducts} from "../api/products.mock-api";
import {productQueryKeys} from "../api/products.query-keys";

export function useProducts() {
    return useQuery({
        queryKey: productQueryKeys.lists(),
        queryFn: getProducts,
    });
}

export function useFeaturedProducts() {
    return useQuery({
        queryKey: productQueryKeys.featured(),
        queryFn: getFeaturedProducts,
    });
}

export function useLatestProducts(limit = 6) {
    return useQuery({
        queryKey: productQueryKeys.latest(limit),
        queryFn: () => getLatestProducts(limit),
    });
}
