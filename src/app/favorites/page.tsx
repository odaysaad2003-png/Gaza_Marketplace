import type {Metadata} from "next";

import {MainContainer} from "@/components/layout/main-container";
import {FavoritesView} from "@/features/favorites/components/favorites-view";

export const metadata: Metadata = {
    title: "المفضلة | Mini Marketplace Gaza",
    description: "المنتجات التي قمت بحفظها في المفضلة داخل Mini Marketplace Gaza.",
};

export default function FavoritesPage() {
    return (
        <MainContainer className="py-10 sm:py-14">
            <div className="mb-8 space-y-3">
                <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                    المنتجات المحفوظة
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">المفضلة</h1>

                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        هنا تجد المنتجات التي حفظتها للرجوع إليها لاحقًا بسهولة.
                    </p>
                </div>
            </div>

            <FavoritesView />
        </MainContainer>
    );
}
