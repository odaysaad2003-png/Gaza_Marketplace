"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Plus} from "lucide-react";

import {Button} from "@/components/ui/button";
import {MainContainer} from "@/components/layout/main-container";
import {SiteLogo} from "@/components/layout/site-logo";
import {ThemeToggle} from "@/components/theme/theme-toggle";
import {mainNavItems} from "@/lib/navigation";
import {cn} from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
    if (href === "/") {
        return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 shadow-sm shadow-black/[0.03] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
            {" "}
            <MainContainer>
                <div className="flex h-16 items-center justify-between gap-4">
                    <SiteLogo />

                    <nav
                        aria-label="التنقل الرئيسي"
                        className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 shadow-sm shadow-black/[0.03] md:flex"
                    >
                        {mainNavItems.map((item) => {
                            const active = isActiveLink(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                        "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                                        "hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                        active
                                            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <Button
                            asChild
                            className="hidden rounded-full px-4 shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex"
                        >
                            <Link href="/products/create">
                                <Plus className="ml-2 h-4 w-4" />
                                أضف منتجك
                            </Link>
                        </Button>
                    </div>
                </div>
            </MainContainer>
        </header>
    );
}
