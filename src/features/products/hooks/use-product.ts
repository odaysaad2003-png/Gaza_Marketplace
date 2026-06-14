import {useQuery} from "@tanstack/react-query";

import {getProductBySlug} from "../api/products.mock-api";
import {productQueryKeys} from "../api/products.query-keys";

export function useProduct(slug: string) {
    return useQuery({
        queryKey: productQueryKeys.detail(slug),
        queryFn: () => getProductBySlug(slug),
        enabled: Boolean(slug),
    });
}
