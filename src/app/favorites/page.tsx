import type {Metadata} from "next";

import {MainContainer} from "@/components/layout/main-container";
import {FavoritesView} from "@/features/favorites/components/favorites-view";

export const metadata: Metadata = {
    title: "المفضلة | Mini Marketplace Gaza",
    description: "المنتجات التي قمت بحفظها في المفضلة داخل Mini Marketplace Gaza.",
};

export default function FavoritesPage() {
    return (
        <MainContainer className="py-8 sm:py-10 lg:py-14">
            <div className="mb-6 space-y-3 sm:mb-8">
                <div className="inline-flex rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                    المنتجات المحفوظة
                </div>

                <div className="space-y-3">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">المفضلة</h1>

                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        هنا تجد المنتجات التي حفظتها للرجوع إليها لاحقًا بسهولة.
                    </p>
                </div>
            </div>

            <FavoritesView />
        </MainContainer>
    );
}
