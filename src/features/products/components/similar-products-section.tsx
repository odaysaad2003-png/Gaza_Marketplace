import type {Product} from "../types/product.types";
import {ProductCard} from "./product-card";

type SimilarProductsSectionProps = {
    products: Product[];
};

export function SimilarProductsSection({products}: SimilarProductsSectionProps) {
    if (products.length === 0) {
        return null;
    }

    return (
        <section className="space-y-5">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">منتجات مشابهة</h2>

                    <p className="mt-2 text-sm text-muted-foreground">منتجات من نفس التصنيف قد تهمك أيضًا.</p>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
