import type {ReactNode} from "react";

type AdminChartCardProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

export function AdminChartCard({title, description, children}: AdminChartCardProps) {
    return (
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-5 space-y-1">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>

                {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
            </div>

            <div className="h-72 w-full">{children}</div>
        </section>
    );
}
