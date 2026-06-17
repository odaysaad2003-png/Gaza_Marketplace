import Link from "next/link";

import {formatDate, formatPrice} from "../utils/admin-analytics";

type TopProduct = {
    id: string;
    title: string;
    slug: string;
    city: string;
    category: string;
    price: number;
    createdAt: string;
};

type TopProductsCardProps = {
    title: string;
    description: string;
    products: TopProduct[];
    valueType: "price" | "date";
};

export function TopProductsCard({title, description, products, valueType}: TopProductsCardProps) {
    return (
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-5 space-y-1">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
            </div>

            <div className="space-y-3">
                {products.map((product, index) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-4 transition hover:bg-muted/50"
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                                {index + 1}
                            </div>

                            <div className="min-w-0 space-y-1">
                                <h3 className="truncate text-sm font-semibold text-foreground">{product.title}</h3>

                                <p className="truncate text-xs text-muted-foreground">
                                    {product.city} · {product.category}
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0 text-sm font-semibold text-foreground">
                            {valueType === "price" ? formatPrice(product.price) : formatDate(product.createdAt)}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
