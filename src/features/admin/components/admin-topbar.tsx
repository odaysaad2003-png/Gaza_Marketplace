"use client";

import Link from "next/link";
import {Menu, Plus, ShoppingBag} from "lucide-react";

import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/theme/theme-toggle";

type AdminTopbarProps = {
    onOpenSidebar: () => void;
};

export function AdminTopbar({onOpenSidebar}: AdminTopbarProps) {
    return (
        <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
            <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <div className="flex min-w-0 items-center gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-full lg:hidden"
                        onClick={onOpenSidebar}
                        aria-label="فتح قائمة لوحة الإدارة"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <div>
                        <p className="text-sm font-black text-foreground">Admin Dashboard</p>
                        <p className="hidden text-xs text-muted-foreground sm:block">
                            إدارة تدريبية مبنية على Mock API
                        </p>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <ThemeToggle />

                    <Button asChild variant="outline" className="hidden rounded-full sm:inline-flex">
                        <Link href="/products">
                            <ShoppingBag className="ml-2 h-4 w-4" />
                            السوق
                        </Link>
                    </Button>

                    <Button asChild className="rounded-full shadow-sm shadow-primary/20">
                        <Link href="/products/create">
                            <Plus className="ml-2 h-4 w-4" />
                            <span className="hidden sm:inline">إضافة منتج</span>
                            <span className="sm:hidden">إضافة</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
