import type {LucideIcon} from "lucide-react";

type SettingsStatusCardProps = {
    label: string;
    value: string;
    description: string;
    icon: LucideIcon;
};

export function SettingsStatusCard({label, value, description, icon: Icon}: SettingsStatusCardProps) {
    return (
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <Icon className="h-5 w-5" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                    <p className="text-xs font-medium text-muted-foreground">{value}</p>
                </div>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
    );
}
