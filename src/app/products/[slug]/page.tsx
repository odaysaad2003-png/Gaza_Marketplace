import type {Metadata} from "next";

import {MainContainer} from "@/components/layout/main-container";
import {ProductDetailsView} from "@/features/products/components/product-details-view";

type ProductDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({params}: ProductDetailsPageProps): Promise<Metadata> {
    const {slug} = await params;

    return {
        title: `تفاصيل المنتج | ${decodeURIComponent(slug)}`,
        description: "صفحة تفاصيل المنتج في Mini Marketplace Gaza.",
    };
}

export default async function ProductDetailsPage({params}: ProductDetailsPageProps) {
    const {slug} = await params;

    return (
        <MainContainer className="py-8 sm:py-12">
            <ProductDetailsView slug={decodeURIComponent(slug)} />
        </MainContainer>
    );
}
