import type {LucideIcon} from "lucide-react";

type SettingsFieldProps = {
    label: string;
    description: string;
    icon: LucideIcon;
    value?: string;
    enabled?: boolean;
};

export function SettingsField({label, description, icon: Icon, value, enabled}: SettingsFieldProps) {
    const hasToggle = typeof enabled === "boolean";

    return (
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
            </div>

            {value ? (
                <div className="shrink-0 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {value}
                </div>
            ) : null}

            {hasToggle ? (
                <div
                    className={
                        enabled
                            ? "flex h-7 w-12 shrink-0 items-center justify-end rounded-full bg-primary p-1"
                            : "flex h-7 w-12 shrink-0 items-center justify-start rounded-full bg-muted p-1"
                    }
                    aria-label={enabled ? "Enabled" : "Disabled"}
                >
                    <span className="h-5 w-5 rounded-full bg-background shadow-sm" />
                </div>
            ) : null}
        </div>
    );
}
