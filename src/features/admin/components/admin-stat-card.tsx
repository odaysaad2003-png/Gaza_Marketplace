import type {LucideIcon} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";

type AdminStatCardProps = {
    title: string;
    value: string | number;
    description: string;
    icon: LucideIcon;
    className?: string;
};

export function AdminStatCard({title, value, description, icon: Icon, className}: AdminStatCardProps) {
    return (
        <Card className={cn("rounded-[1.75rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]", className)}>
            <CardContent className="flex items-start justify-between gap-4 p-5">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{title}</p>
                    <p className="text-2xl font-black tracking-tight text-foreground">{value}</p>
                    <p className="text-xs leading-5 text-muted-foreground">{description}</p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                </div>
            </CardContent>
        </Card>
    );
}
