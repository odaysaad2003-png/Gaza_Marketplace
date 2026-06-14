import Link from "next/link";

import {mainNavItems} from "@/lib/navigation";

import {MainContainer} from "./main-container";
import {SiteLogo} from "./site-logo";

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <MainContainer className="py-10">
                <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
                    <div className="space-y-4">
                        <SiteLogo />

                        <p className="max-w-md text-sm leading-7 text-muted-foreground">
                            منصة تدريبية عربية لعرض وبيع وشراء المنتجات داخل غزة، مبنية بأسلوب Frontend احترافي وقابل
                            للتوسع.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">روابط سريعة</h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {mainNavItems.slice(0, 4).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="transition-colors hover:text-foreground">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">مناطق غزة</h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>غزة</li>
                            <li>خانيونس</li>
                            <li>رفح</li>
                            <li>دير البلح</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Mini Marketplace Gaza — مشروع تدريبي للبرتفوليو.
                </div>
            </MainContainer>
        </footer>
    );
}
