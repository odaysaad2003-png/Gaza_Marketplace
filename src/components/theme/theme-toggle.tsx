"use client";

import {Monitor, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";

export function ThemeToggle() {
    const {setTheme, theme} = useTheme();

    return (
        <div className="flex items-center gap-1 rounded-full border bg-background p-1 shadow-sm">
            <Button
                type="button"
                variant={theme === "light" ? "default" : "ghost"}
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setTheme("light")}
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">الوضع الفاتح</span>
            </Button>

            <Button
                type="button"
                variant={theme === "dark" ? "default" : "ghost"}
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setTheme("dark")}
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">الوضع الداكن</span>
            </Button>

            <Button
                type="button"
                variant={theme === "system" ? "default" : "ghost"}
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setTheme("system")}
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">حسب النظام</span>
            </Button>
        </div>
    );
}
