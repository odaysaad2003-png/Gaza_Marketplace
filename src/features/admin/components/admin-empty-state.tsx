import Link from "next/link";
import {PackagePlus} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export function AdminEmptyState() {
    return (
        <Card className="rounded-[2rem] border-dashed border-border/80 bg-card/80">
            <CardContent className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <PackagePlus className="h-7 w-7" />
                </div>

                <h2 className="text-xl font-bold text-foreground">لا توجد منتجات بعد</h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    عندما تتم إضافة منتجات إلى السوق، ستظهر هنا الإحصائيات والجدول الإداري الخاص بها.
                </p>

                <Button asChild className="mt-6 rounded-full">
                    <Link href="/products/create">إضافة أول منتج</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
