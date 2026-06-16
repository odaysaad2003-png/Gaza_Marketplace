import {MainContainer} from "@/components/layout/main-container";
import {ProductGrid} from "@/features/products/components/product-grid";
import {getLatestProducts} from "@/features/products/api/products.mock-api";
import {HeroSection} from "@/features/home/components/hero-section";
import {FeaturedCategoriesSection} from "@/features/home/components/featured-categories-section";
import {HowItWorksSection} from "@/features/home/components/how-it-works-section";
import {HomeCtaSection} from "@/features/home/components/home-cta-section";
import {SectionHeading} from "@/components/shared/section-heading";

export default async function HomePage() {
    const latestProducts = await getLatestProducts(8);

    return (
        <MainContainer>
            <HeroSection latestProducts={latestProducts} />

            <FeaturedCategoriesSection />

            <section className="py-10">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <SectionHeading
                        eyebrow="وصل حديثًا"
                        title="أحدث المنتجات"
                        description="مجموعة مختارة من آخر المنتجات المضافة داخل السوق."
                    />
                </div>

                <ProductGrid products={latestProducts} />
            </section>

            <HowItWorksSection />

            <HomeCtaSection />
        </MainContainer>
    );
}
