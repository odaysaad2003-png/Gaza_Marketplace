import {SearchX} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

type AdminProductsEmptyStateProps = {
    onClearFilters: () => void;
};

export function AdminProductsEmptyState({onClearFilters}: AdminProductsEmptyStateProps) {
    return (
        <Card className="rounded-[2rem] border-dashed border-border/80 bg-card/80">
            <CardContent className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <SearchX className="h-7 w-7" />
                </div>

                <h2 className="text-xl font-bold text-foreground">لا توجد منتجات مطابقة</h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    جرّب تغيير كلمات البحث أو إزالة بعض الفلاتر لعرض نتائج أكثر.
                </p>

                <Button type="button" variant="outline" className="mt-6 rounded-full" onClick={onClearFilters}>
                    مسح الفلاتر
                </Button>
            </CardContent>
        </Card>
    );
}
