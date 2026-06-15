import type {Product} from "../types/product.types";
import {ProductCard} from "./product-card";

type ProductGridProps = {
    products: Product[];
};

export function ProductGrid({products}: ProductGridProps) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
