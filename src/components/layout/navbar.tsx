"use client";

import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, Plus, X} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 shadow-sm shadow-black/[0.03] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
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

                        <MobileMenu pathname={pathname} open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />
                    </div>
                </div>
            </MainContainer>
        </header>
    );
}

type MobileMenuProps = {
    pathname: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

function MobileMenu({pathname, open, onOpenChange}: MobileMenuProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/70 md:hidden"
                    aria-label="فتح قائمة التنقل"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[min(22rem,calc(100vw-2rem))] border-l border-border/70 bg-background/95 p-0 backdrop-blur-xl"
            >
                <div className="flex h-full flex-col">
                    <div className="flex h-16 items-center justify-between border-b border-border/70 px-5">
                        <SheetTitle asChild>
                            <div>
                                <SiteLogo />
                            </div>
                        </SheetTitle>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => onOpenChange(false)}
                            aria-label="إغلاق قائمة التنقل"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6">
                        <div className="rounded-[1.75rem] border border-border/70 bg-card/80 p-3 shadow-sm">
                            <p className="px-3 pb-3 text-xs font-semibold text-muted-foreground">التنقل</p>

                            <nav aria-label="تنقل الموبايل" className="space-y-1">
                                {mainNavItems.map((item) => {
                                    const active = isActiveLink(pathname, item.href);

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            className={cn(
                                                "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                                                "hover:bg-secondary hover:text-foreground",
                                                active
                                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                                    : "text-muted-foreground"
                                            )}
                                        >
                                            <span>{item.label}</span>

                                            {active ? (
                                                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                                            ) : null}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="rounded-[1.75rem] border border-border/70 bg-secondary/60 p-5">
                            <p className="text-sm font-bold text-foreground">عندك منتج للبيع؟</p>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                أضف منتجك خلال دقائق وخلّي المستخدمين يشوفوه داخل السوق.
                            </p>

                            <Button
                                asChild
                                className="mt-4 w-full rounded-full shadow-sm shadow-primary/20"
                                onClick={() => onOpenChange(false)}
                            >
                                <Link href="/products/create">
                                    <Plus className="ml-2 h-4 w-4" />
                                    أضف منتجك
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="border-t border-border/70 px-5 py-4">
                        <p className="text-xs leading-5 text-muted-foreground">
                            Mini Marketplace Gaza — تجربة Frontend عربية احترافية.
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
