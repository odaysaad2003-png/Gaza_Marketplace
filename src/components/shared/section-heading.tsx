import {cn} from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "start" | "center";
    className?: string;
};

export function SectionHeading({eyebrow, title, description, align = "start", className}: SectionHeadingProps) {
    return (
        <div className={cn("space-y-3", align === "center" && "mx-auto max-w-2xl text-center", className)}>
            {eyebrow ? <p className="text-sm font-semibold text-primary">{eyebrow}</p> : null}

            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>

            {description ? <p className="text-sm leading-7 text-muted-foreground sm:text-base">{description}</p> : null}
        </div>
    );
}
