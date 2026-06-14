import {ThemeToggle} from "@/components/theme/theme-toggle";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 text-center">
                <ThemeToggle />

                <Card className="w-full max-w-2xl">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Mini Marketplace Gaza</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">منصة محلية لعرض وبيع وشراء المنتجات في غزة</p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <Button>ابدأ التصفح</Button>
                            <Button variant="outline">أضف منتجك الآن</Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
