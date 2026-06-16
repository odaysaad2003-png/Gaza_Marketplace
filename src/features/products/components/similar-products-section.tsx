import {SectionHeading} from "@/components/shared/section-heading";
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
        <section className="space-y-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <SectionHeading
                    eyebrow="اقتراحات"
                    title="منتجات مشابهة"
                    description="منتجات من نفس التصنيف قد تهمك أيضًا."
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
