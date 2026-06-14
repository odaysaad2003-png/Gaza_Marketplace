import Link from "next/link";
import {Store} from "lucide-react";

export function SiteLogo() {
    return (
        <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Store className="h-5 w-5" />
            </span>

            <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">سوق غزة المصغّر</span>
                <span className="mt-1 text-xs text-muted-foreground">Mini Marketplace Gaza</span>
            </span>
        </Link>
    );
}
