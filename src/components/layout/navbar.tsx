import Link from "next/link";

import {ThemeToggle} from "@/components/theme/theme-toggle";
import {Button} from "@/components/ui/button";
import {mainNavItems} from "@/lib/navigation";

import {MainContainer} from "./main-container";
import {SiteLogo} from "./site-logo";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <MainContainer>
                <div className="flex h-16 items-center justify-between gap-4">
                    <SiteLogo />

                    <nav className="hidden items-center gap-1 md:flex">
                        {mainNavItems.map((item) => (
                            <Button key={item.href} asChild variant="ghost" size="sm">
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <Button asChild className="hidden sm:inline-flex">
                            <Link href="/products/create">أضف منتجك</Link>
                        </Button>
                    </div>
                </div>
            </MainContainer>
        </header>
    );
}
