"use client";

import * as React from "react";

import {Sheet, SheetContent, SheetTitle} from "@/components/ui/sheet";

import {AdminSidebar} from "./admin-sidebar";
import {AdminTopbar} from "./admin-topbar";

type AdminShellProps = {
    children: React.ReactNode;
};

export function AdminShell({children}: AdminShellProps) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background/40">
            <div className="mx-auto flex w-full max-w-[1600px]">
                <div className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-l border-border/70 bg-card/70 backdrop-blur-xl lg:block">
                    <AdminSidebar />
                </div>

                <div className="min-w-0 flex-1">
                    <AdminTopbar onOpenSidebar={() => setIsSidebarOpen(true)} />
                    <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
                        <div className="mx-auto w-full max-w-7xl">{children}</div>
                    </main>{" "}
                </div>
            </div>

            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetContent
                    side="right"
                    className="w-[min(22rem,calc(100vw-2rem))] border-l border-border/70 bg-background/95 p-0 backdrop-blur-xl"
                >
                    <SheetTitle className="sr-only">تنقل لوحة الإدارة</SheetTitle>
                    <AdminSidebar onNavigate={() => setIsSidebarOpen(false)} />
                </SheetContent>
            </Sheet>
        </div>
    );
}
