"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ArrowLeft, ShieldCheck} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

import {adminNavItems} from "../config/admin-navigation";

function isActiveAdminLink(pathname: string, href: string) {
    if (href === "/admin") {
        return pathname === "/admin";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

type AdminSidebarProps = {
    onNavigate?: () => void;
};

export function AdminSidebar({onNavigate}: AdminSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="flex h-full flex-col">
            <div className="border-b border-border/70 p-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                        <p className="font-black leading-5 text-foreground">لوحة الإدارة</p>
                        <p className="mt-1 text-xs text-muted-foreground">Mini Marketplace Gaza</p>
                    </div>
                </div>

                <Badge variant="secondary" className="mt-4 rounded-full px-3 py-1">
                    Frontend Mock Admin
                </Badge>
            </div>

            <nav aria-label="تنقل لوحة الإدارة" className="flex-1 space-y-2 overflow-y-auto p-4">
                {adminNavItems.map((item) => {
                    const active = isActiveAdminLink(pathname, item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onNavigate}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                                "group flex items-start gap-3 rounded-2xl px-4 py-3 transition-all duration-200",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                active
                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <Icon className="mt-0.5 h-5 w-5 shrink-0" />

                            <span className="min-w-0 flex-1">
                                <span className="block text-sm font-bold">{item.label}</span>
                                <span
                                    className={cn(
                                        "mt-1 line-clamp-1 block text-xs",
                                        active ? "text-primary-foreground/80" : "text-muted-foreground"
                                    )}
                                >
                                    {item.description}
                                </span>
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-border/70 p-4">
                <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href="/products" onClick={onNavigate}>
                        الرجوع للسوق
                        <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </aside>
    );
}
