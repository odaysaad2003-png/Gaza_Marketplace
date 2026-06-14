import {useMutation, useQueryClient} from "@tanstack/react-query";

import {createProduct} from "../api/products.mock-api";
import {productQueryKeys} from "../api/products.query-keys";

export function useCreateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProduct,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: productQueryKeys.all,
            });
        },
    });
}
