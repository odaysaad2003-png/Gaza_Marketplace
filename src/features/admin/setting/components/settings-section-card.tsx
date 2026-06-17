import type {ReactNode} from "react";

type SettingsSectionCardProps = {
    title: string;
    description: string;
    children: ReactNode;
};

export function SettingsSectionCard({title, description, children}: SettingsSectionCardProps) {
    return (
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-5 space-y-1">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
            </div>

            <div className="space-y-3">{children}</div>
        </section>
    );
}
